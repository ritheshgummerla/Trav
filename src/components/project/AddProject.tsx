/* eslint-disable */
import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Toast, {
  ERROR_TOAST,
  SUCCESS_TOAST
} from '../../components/layouts/Toast';
import {
  createProjectList,
  editProject
} from '../../common/services/projectServices';
import { ProjectContext } from '../../context/project/ProjectContext';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
const AddProject: React.FC = () => {
  // const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const history = useHistory();
  const [modalWindow, setModalWindow] = React.useState(false);
  const {
    setIsProjectLoading,
    setProjectList,
    projectlist,
    addProjectModal,
    setAddProjectModal,
    createProjectPayload,
    setCreateProjectPayload,
    setIsEditProject,
    isEditProject
  } = useContext(ProjectContext);
  const [isProjectNameEmpty, setisProjectNameEmpty] = useState(false);
  // const [createProjectPayload, setCreateProjectPayload] = useState({
  //   name: '',
  //   description: '',
  //   owner: 'Admin',
  //   owner_email: 'Admin@anblicks.com',
  //   tags: []
  // });
  const onCancelProject = () => {
    setisProjectNameEmpty(false);
    setAddProjectModal(false);
    setCreateProjectPayload({
      name: '',
      description: '',
      owner: 'Admin',
      owner_email: 'Admin@anblicks.com',
      tags: []
    });
  };
  const onHandleChange = (e: any) => {
    setisProjectNameEmpty(false);
    setCreateProjectPayload({
      ...createProjectPayload,
      [e.target.name]: e.target.value
    });
  };

  const onUpdateProject = () => {
    setIsProjectLoading(true);
    const result = editProject(createProjectPayload, createProjectPayload?.id);
    result
      .then((response) => {
        const objIndex = projectlist.findIndex(
          (obj: any) => obj._id == response._id
        );
        projectlist[objIndex].description = response.description;
        setProjectList(projectlist);
        // setSuccessMsg('Project Edited successfully');
        Toast('Project updated successfully', SUCCESS_TOAST);
        setAddProjectModal(false);
        setIsProjectLoading(false);
        setCreateProjectPayload({
          name: '',
          description: '',
          owner: 'Admin',
          owner_email: 'Admin@anblicks.com',
          tags: []
        });
      })
      .catch((err) => {
        // setErrorMsg(err?.response?.data?.error);
        Toast(err?.message, ERROR_TOAST);
        setIsProjectLoading(false);
      });
    setIsEditProject(false);
  };
  const onSaveProject = () => {
    if (createProjectPayload.name === '') {
      setisProjectNameEmpty(true);
    } else {
      setIsProjectLoading(true);
      const result = createProjectList(createProjectPayload);
      result
        .then((response) => {
          if (response) {
            setProjectList((prevState: any) => [response, ...prevState]);
            setAddProjectModal(false);
            // setSuccessMsg('Project created successfully');
            Toast('Project created successfully', SUCCESS_TOAST);
            setIsProjectLoading(false);
            setCreateProjectPayload({
              name: '',
              description: '',
              owner: 'Admin',
              owner_email: 'Admin@anblicks.com',
              tags: []
            });
          }
          history.push('/projects');
        })
        .catch((err) => {
          console.log(err);
          
          debugger
          // setErrorMsg(err?.response?.data?.message);
          Toast(err?.response?.data, ERROR_TOAST);
          setIsProjectLoading(false);
        });
      // modalClose('close-button');
    }
    // setCreateProjectPayload({
    //   name: '',
    //   description: '',
    //   owner: 'Admin',
    //   owner_email: 'Admin@anblicks.com',
    //   tags: []
    // });
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  return (
    <div className="add-rule-model">
      <Button
        onClick={() => setAddProjectModal(true)}
        variant="contained"
        className="btn btn-pc-1 btn-text-nc-1"
      >
        Add Project
      </Button>
      <Drawer
        open={addProjectModal}
        anchor="right"
        className="drawer add-project"
      >
        <div className="drawer__header">
          <div className="drawer__header__title">Add New Project</div>
          <IconButton
            className="btn-icon xxsm bg-nc-7 text-nc-3 hover:bg-nc-7 hover:text-nc-1"
            onClick={() => {
              setAddProjectModal(false);
              setisProjectNameEmpty(false);
              setCreateProjectPayload({
                name: '',
                description: '',
                owner: 'Admin',
                owner_email: 'Admin@anblicks.com',
                tags: []
              });
            }}
          >
            <span className="dq-icon-close text-10" />
          </IconButton>
        </div>
        <div className="drawer__body block">
          <div className="mb-20">
            <TextField
              type="text"
              name="name"
              label="Project Name"
              required
              disabled={isEditProject ? true : false}
              variant="outlined"
              className="input-field sm"
              InputLabelProps={{
                shrink: true
              }}
              value={createProjectPayload.name}
              onChange={onHandleChange}
              error={isProjectNameEmpty && createProjectPayload.name === ''}
              helperText={
                isProjectNameEmpty &&
                createProjectPayload.name === '' &&
                'Please enter project name'
              }
            />
          </div>
          <div className="mb-20">
            <TextField
              type="text"
              name="description"
              label="Description"
              variant="outlined"
              className="input-field sm multiline"
              value={createProjectPayload.description}
              multiline
              rows={6}
              InputLabelProps={{
                shrink: true
              }}
              onChange={onHandleChange}
            />
          </div>
        </div>
        <div className="MuiDialogActions-root footer">
          <Button
            variant="contained"
            className="btn btn-pc-1"
            onClick={isEditProject ? onUpdateProject : onSaveProject}
            // onClick={(event) => (window.location.href = '/project/nogroup')}
          >
            {isEditProject ? 'Update Project' : 'Add Project'}
          </Button>
          <Button
            variant="contained"
            className="btn btn-sc sc-2 text-14"
            onClick={() => onCancelProject()}
          >
            Cancel
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default AddProject;
