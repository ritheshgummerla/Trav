/* eslint-disable */
import React from 'react';
import useViewport from '../../hooks/useViewport';
import ProjectDetail from './ProjectDetail';
import Datatable from './Datatable';

const ProjectGroupList: React.FC = () => {
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
  const [currentPageDetails, setCurrentPageDetails] = React.useState({
    page: 1,
    per_page: 10,
    group: '',
    project_id: '',
    owner: '',
    searchType: 'group',
    search: '',
  });

  return (
    <div className="projectgrouplist-page">
      <div className="projectgrouplist-page_inner">
        {/* <Filter
          currentPageDetails={currentPageDetails}
          setCurrentPageDetails={setCurrentPageDetails}
        /> */}
        <ProjectDetail />
        <Datatable />
      </div>
    </div>
  );
};

export default ProjectGroupList;
