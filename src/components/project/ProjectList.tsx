/* eslint-disable */
import React, { useEffect, useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@mui/material/Menu';
import TextField from '@material-ui/core/TextField';
import { projectsList } from '../../hooks/useProjectsList';
import { ProjectContext } from '../../context/project/ProjectContext';
import {
  deleteProject,
  editProject
} from '../../common/services/projectServices';
import { modalClose } from '../../common/utils';
import AddProject from './AddProject';
import EditSuites from './EditSuites';
import DeleteSuite from './DeleteSuite';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';

const ProjectList: React.FC = () => {
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const {
    isActiveProjectTab,
    setIsActiveProjectTab,
    projectlist,
    setProjectList,
    setisDismissModal,
    setSuccessMsg,
    setIsProjectLoading,
    setErrorMsg,
    setSuitesDrawerWindow,
    setAddProjectModal,
    setCreateProjectPayload,
    setIsEditProject,
    setOpenDeleteModal,
    setSelectedGroups,
    newlyAddedGroupList,
    setNewlyAddedGroupList
  } = useContext(ProjectContext);
  const [deleteProjectName, setDeleteProjectName] = React.useState('');
  const [currentProject, setCurrentProject] = React.useState({});
  const [currentPageDetails, setCurrentPageDetails] = React.useState({
    page: 1,
    per_page: 100, //for now it is 100
    search: ''
  });
  const { data: projectData } = projectsList(currentPageDetails);

  useEffect(() => {
    if (projectData?.data?.all_projects.length > 1) {
      localStorage.setItem('data', '');
    }
    setSelectedGroups([]);
    setProjectList(projectData?.data?.all_projects);
    setIsActiveProjectTab(
      isActiveProjectTab === undefined
        ? projectData?.data?.all_projects[0]
        : isActiveProjectTab
    );
  }, [projectData?.data?.all_projects]);
  const onProjectClick = (obj: string) => {
    setIsActiveProjectTab(obj);
    setNewlyAddedGroupList([]);
    // setSelectedGroups([]);
  };
  const onDeleteProject = (event: any, name: string) => {
    event.stopPropagation();
    setOpenDeleteModal(true);
    setDeleteProjectName(name);
  };
  const onSearchProject = (e: any) => {
    setCurrentPageDetails({
      ...currentPageDetails,
      search: e.target.value
    });
    localStorage.setItem('data', e.target.value);
  };
  const onEditProject = (event: any, project: any) => {
    event.stopPropagation();
    setAnchorEl(null);
    setCurrentProject(project);
    setAddProjectModal(true);
    setIsEditProject(true);
    setCreateProjectPayload({
      id: project._id,
      name: project.name,
      description: project.description,
      owner: 'Admin',
      owner_email: 'Admin@anblicks.com',
      tags: []
    });
  };
  const onclickYes = () => {
    setIsProjectLoading(true);
    const result = deleteProject({
      project_id: isActiveProjectTab._id
    });
    result
      .then((response) => {
        if (response) {
          const lists = projectlist.filter((x: any) => {
            setSuccessMsg(response.status);
            setIsProjectLoading(false);
            return x.name !== response?.name;
          });
          setOpenDeleteModal(false);
          setProjectList([...lists]);
          setIsActiveProjectTab(lists[0]);
        }
      })
      .catch((err) => {
        setErrorMsg(err?.response?.data?.error);
        setIsProjectLoading(false);
      });
  };
  const onOpenDrawer = (event: any) => {
    event.stopPropagation();
    setSuitesDrawerWindow(true);
    setAnchorEl(null);
  };
  return (
    <div className="projectlist-page">
      <div className="projectlist-page_inner">
        <div className="project-search">
          <span className="dq-icon-search"></span>
          <TextField
            id="standard-basic"
            label=""
            placeholder="Search Project"
            variant="standard"
            onKeyUp={onSearchProject}
          />
        </div>

        <TableContainer className="shadow-none dashboard-table">
          <Table
            className="small-table border-head-white project-list-table"
            sx={{ minWidth: '100%' }}
            size="small"
            aria-label="dense table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell>Projects ({projectlist?.length})</TableCell>
                {/* <TableCell>Suites</TableCell>
                <TableCell>Total # of runs</TableCell>
                <TableCell>Last Run Date</TableCell>
                <TableCell>DQ Score</TableCell> */}
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {projectlist?.map((project: any) => {
                return (
                  <TableRow
                    key={project._id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 }
                    }}
                    className={
                      project?.name === isActiveProjectTab?.name ? 'active' : ''
                    }
                    onClick={() => onProjectClick(project)}
                  >
                    <TableCell>
                      <Tooltip
                        title={project?.name}
                        placement="top"
                        classes={{
                          tooltip: 'my-tooltip bg-pc-1 text-nc-7 text-12'
                        }}
                      >
                        <b className="project-name">{project?.name}</b>
                      </Tooltip>
                    </TableCell>
                    {/* <TableCell>
                      <b>{project?.suites}</b>
                    </TableCell>
                    <TableCell>
                      <b>{project?.runs}</b>
                    </TableCell>
                    <TableCell>
                      <b>{project?.lastRunDate}</b>
                    </TableCell>
                    <TableCell>
                      <b>{project?.dqScore}</b>
                    </TableCell> */}
                    <TableCell align="right">
                      <div>
                        <ThreeDotsMenu
                          onEditProject={onEditProject}
                          handleClose={handleClose}
                          onOpenDrawer={onOpenDrawer}
                          onDeleteProject={onDeleteProject}
                          data={project}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <AddProject />
        <EditSuites />
        <DeleteSuite onclickYes={onclickYes} />
      </div>
    </div>
  );
};

interface Props {
  data: any;
  onEditProject: any;
  handleClose: any;
  onDeleteProject: any;
  onOpenDrawer: any;
}

const ThreeDotsMenu = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data } = props;
  return (
    <React.Fragment>
      <IconButton
        className="btn-icon sm square "
        id="basic-button"
        onClick={handleClick}
      >
        <span className="dq-icon-menu_dots" />
      </IconButton>
      <Menu
        id="card-actions-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={(e) => {
            handleClose(), props.onEditProject(e, data);
          }}
        >
          Edit Project
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            handleClose(), props.onDeleteProject(e);
          }}
        >
          Delete Project
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            handleClose(), props.onOpenDrawer(e, data);
          }}
        >
          Add/remove suites
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
export default ProjectList;
