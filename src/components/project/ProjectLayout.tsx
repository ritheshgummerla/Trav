/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import useViewport from '../../hooks/useViewport';
import ProjectList from './ProjectList';
import ProjectGroupList from './ProjectGroupList';

const ProjectLayout: React.FC = () => {
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  return (
    <div className="projectgrouplist-page">
      <div className="projectgrouplist-page_inner">
        <div className="projectlayout">
          <div className="col">
            <ProjectList />
          </div>
          <div className="col">
            <ProjectGroupList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
