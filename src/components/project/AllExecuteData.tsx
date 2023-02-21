/* eslint-disable */
import React, { useEffect, useContext } from 'react';
import useViewport from '../../hooks/useViewport';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useHistory } from 'react-router';
import { fetchProjectsGroupsList } from '../../common/services/projectServices';
import { ProjectContext } from '../../context/project/ProjectContext';
import TextField from '@material-ui/core/TextField';

const AllExecuteData: React.FC = () => {
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);

  const {
    isActiveProjectTab,
    setIsProjectLoading,
    setGroupList,
    lastExecutedRuns
  } = useContext(ProjectContext);
  const [deleteGroup, setDeleteGroup] = React.useState({
    groupName: '',
    projectId: null
  });
  const [groupData, setGroupData] = React.useState();
  const [viewGroupDetails, setViewGroupDetails] = React.useState();
  const [groupsPagination, setGroupsPagination] = React.useState({
    page: 1,
    per_page: 10,
    count: 10
  });
  const [currentPageDetails, setCurrentPageDetails] = React.useState({
    page: 1,
    per_page: 10,
    group: '',
    project_id: '',
    owner: '',
    searchType: 'group',
    search: ''
  });
  const [groupsList, setGroupsList] = React.useState([]);
  useEffect(() => {
    if (isActiveProjectTab !== undefined) {
      setCurrentPageDetails({
        ...currentPageDetails,
        project_id: isActiveProjectTab?.id
      });
    }
  }, [isActiveProjectTab]);
  // useEffect(() => {
  //   if (currentPageDetails.project_id !== '') {
  //     setIsProjectLoading(true);
  //     const result = fetchProjectsGroupsList(currentPageDetails);
  //     result
  //       .then((response) => {
  //         if (response) {
  //           setGroupsList(response.groups);
  //           setGroupsPagination(response.pagination);
  //           setIsProjectLoading(false);
  //           setGroupData(response.groups);
  //           setGroupList(response.groups);
  //         }
  //       })
  //       .catch(() => {});
  //   }
  // }, [currentPageDetails]);

  const [drawerWindow, setDrawerWindow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const onSearchProject = (e: any) => {
    setCurrentPageDetails({
      ...currentPageDetails,
      search: e.target.value
    });
    localStorage.setItem('data', e.target.value);
  };

  return (
    <div className="datatable">
      <div className="dashboard-right">
        <div className="left filter search-drawer">
          <div className="right global-search">
            <div className="search-box">
              <span className="dq-icon-search" />
              <TextField
                className="search"
                id="standard-basic"
                label="Search"
                placeholder="Search Runs"
                variant="standard"
                InputLabelProps={{
                  shrink: true
                }}
                onKeyUp={onSearchProject}
                // onKeyUp={(e) => searchGroupFilterByName(e)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" projectdashboard ">
        <TableContainer className="height-set-drawer-runs">
          <Table
            className="small-table"
            sx={{ minWidth: '100%' }}
            size="small"
            aria-label="dense table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell>Data Asset</TableCell>
                <TableCell width="200">Suite Name</TableCell>
                <TableCell>Run Name</TableCell>
                <TableCell>Run Date</TableCell>
                <TableCell>Checkpoint</TableCell>
                <TableCell>Success</TableCell>
                <TableCell>Failed</TableCell>
                <TableCell>DQ Score</TableCell>
                {/* <TableCell align="center">GE Report</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {lastExecutedRuns?.dashboard === undefined && 'No Data Found'}
              {lastExecutedRuns?.dashboard !== undefined &&
                lastExecutedRuns?.dashboard?.length > 0 &&
                lastExecutedRuns?.dashboard?.map((row: any) => (
                  <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell scope="row">{row?.data_asset}</TableCell>
                    <TableCell scope="row">{row?.suite}</TableCell>
                    <TableCell>{row?.runName}</TableCell>
                    <TableCell>{row.run_date}</TableCell>
                    <TableCell>{row?.checkPoint}</TableCell>
                    <TableCell>
                      <b className="text-tc-2">{row?.sucess}</b>
                    </TableCell>
                    <TableCell>
                      <b className="text-tc-4">{row?.failed}</b>
                    </TableCell>
                    <TableCell>{row?.DQ_score}</TableCell>
                    {/* <TableCell>
                      <span className="dq-icon-expectations"></span>
                    </TableCell> */}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AllExecuteData;
