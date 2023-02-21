/* eslint-disable */
import React from 'react';
import { Button } from '@material-ui/core';
import useViewport from '../../hooks/useViewport';
import { SYSTEM_CONSTANTS } from '../../common/constants/index';
import AddProject from './AddProject';

const NoData: React.FC = () => {
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const [modalWindow, setModalWindow] = React.useState(false);
  return (
    <div className="nodata">
      <div className="child">
        <img className="" src={'/assests/images/no_rules_added.svg'} />
        <p>Create Project List Content Pending</p>
        <AddProject />
      </div>
    </div>
  );
};

export default NoData;
