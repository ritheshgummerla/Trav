/* eslint-disable */
import React from 'react';
import useViewport from '../hooks/useViewport';
import ProjectList from '../components/project/ProjectList';
import ProjectGroupList from '../components/project/ProjectGroupList';
import NoData from '../components/project/NoData';

const ProjectLayout: React.FC = () => {
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);

  {
    /* Pagination Code */
  }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [projects, setProjects] = React.useState(0);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  {
    /* Pagination Code */
  }
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
        <NoData />
      </div>
    </div>
  );
};

export default ProjectLayout;
