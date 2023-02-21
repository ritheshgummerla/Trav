/* eslint-disable */
import React, { useContext } from 'react';
import useViewport from '../../hooks/useViewport';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ProjectContext } from '../../context/project/ProjectContext';
const CreateModel: React.FC = () => {
  const { windowWidth } = useViewport();
const {isActiveProjectTab} = useContext(ProjectContext)
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const [modalWindow, setModalWindow] = React.useState(false);
  return (
    <div className="model inline">
      <div className="fab-primary">
        <a
          onClick={() => {
            setModalWindow(true);
          }}
        >
          <span className="dq-icon-add" />
        </a>
      </div>
      <Dialog className="dialog sm" open={modalWindow}>
        <DialogTitle disableTypography>
          <span className="dialog-title">Add New Project</span>
          <IconButton
            className="btn-icon xxsm bg-nc-7 text-nc-4 hover:bg-nc-7 hover:text-nc-1"
            onClick={() => {
              setModalWindow(false);
            }}
          >
            <span className="dq-icon-close" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className="mb-20">
            <TextField
              type="text"
              label="Project Name"
              variant="outlined"
              // value={isActiveProjectTab?.name}
              className="input-field sm"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <TextField
            type="text"
            label="Description"
            variant="outlined"
            className="input-field sm multiline"
            multiline
            rows={6}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions disableSpacing>
          <Button variant="contained" className="btn btn-pc-1">
            Add Project
          </Button>
          <Button
            variant="contained"
            className="btn btn-sc sc-2 text-14"
            onClick={() => {
              setModalWindow(false);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateModel;
