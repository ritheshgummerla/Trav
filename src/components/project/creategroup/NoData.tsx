/* eslint-disable */
import React from 'react';
import useViewport from '../../../hooks/useViewport';

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
        <p>Add multiple Expectations here from Left!</p>
      </div>
    </div>
  );
};

export default NoData;
