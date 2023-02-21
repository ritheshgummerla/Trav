/* eslint-disable */
import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { createProjectList } from '../../common/services/projectServices';
import { ProjectContext } from '../../context/project/ProjectContext';
import { useHistory } from 'react-router-dom';

interface Props {
  onclickYes: any;
}
const DeleteSuite = (props: Props) => {
  // const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const history = useHistory();
  const [modalWindow, setModalWindow] = React.useState(false);
  const {
    setIsProjectLoading,
    setSuccessMsg,
    setErrorMsg,
    setProjectList,
    openDeleteModal,
    setOpenDeleteModal
  } = useContext(ProjectContext);
  const [isProjectNameEmpty, setisProjectNameEmpty] = useState(false);
  const [createProjectPayload, setCreateProjectPayload] = useState({
    name: '',
    description: '',
    owner: 'Admin'
  });
  const onCancelProject = () => {
    setOpenDeleteModal(false);
  };

  const [drawerWindow, setDrawerWindow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );


  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="add-rule-model right-235">
      <Dialog
        open={openDeleteModal}
        className="dialog sm"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className="delete-model">
          <div className="text-center">
            <img className="" src={'/assests/images/Delete.svg'} />
            <p className="font-barlow font-extra-bold text-16 text-nc-3 py-8">
              Confirn Delete
            </p>
            <span className="font-roboto text-14 text-nc-1 py-8">
              Are you sure you want to delete selected Record?
            </span>

            <div className="pt-10">
              <Button
                variant="contained"
                className="btn btn-tc-4"
                onClick={props.onclickYes}
                // onClick={(event) => (window.location.href = '/project/nogroup')}
              >
                Yes
              </Button>
              <Button
                variant="contained"
                className="btn btn-sc sc-2 text-14"
                onClick={() => onCancelProject()}
              >
                No
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteSuite;
