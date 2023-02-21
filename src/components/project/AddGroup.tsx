/* eslint-disable */
import React from 'react';
import useViewport from '../../hooks/useViewport';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const AddProject: React.FC = () => {
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const [modalWindow, setModalWindow] = React.useState(false);
  const history = useHistory();

  return (
    <div className="add-rule-model">
      <Button
        onClick={() => {
          history.push('/projects/creategroup');
        }}
        variant="outlined"
        className="btn btn-pc-1 btn-text-nc-1"
      >
        Add Group
      </Button>
    </div>
  );
};

export default AddProject;
