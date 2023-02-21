/* eslint-disable */
import React, { useContext } from 'react';
import useViewport from '../../hooks/useViewport';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { ProjectContext } from '../../context/project/ProjectContext';
import AllExecuteData from './AllExecuteData';

const ExecutedData: React.FC = () => {
  const { currentPageDetailsLastRuns, setCurrentPageDetailsLastRuns } =
    useContext(ProjectContext);
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const [modalWindow, setModalWindow] = React.useState(false);

  const [drawerWindow, setDrawerWindow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="ExecutedData">
      <a
        className="cursor-pointer"
        onClick={() => {
          setDrawerWindow(true),
            setCurrentPageDetailsLastRuns({
              ...currentPageDetailsLastRuns,
              page: 1,
              per_page: 100
            });
        }}
      >
        View all Runs <span className="dq-icon-back_arrow"></span>
      </a>
      <Drawer
        open={drawerWindow}
        anchor="right"
        className="drawer ExecutedData"
      >
        <div className="drawer__header">
          <div className="drawer__header__title">
            CRM Customer Data DQ - Runs
          </div>
          <IconButton
            className="btn-icon xxsm bg-nc-7 text-nc-3 hover:bg-nc-7 hover:text-nc-1"
            onClick={() => {
              setDrawerWindow(false);
            }}
          >
            <span className="dq-icon-close text-10" />
          </IconButton>
        </div>
        <div className="drawer__body">
          <AllExecuteData />
        </div>
      </Drawer>
    </div>
  );
};

export default ExecutedData;
