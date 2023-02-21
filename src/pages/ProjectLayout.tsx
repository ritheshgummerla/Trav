/* eslint-disable */
import React, { useContext } from 'react';
import useViewport from '../hooks/useViewport';
import ProjectList from '../components/project/ProjectList';
import ProjectGroupList from '../components/project/ProjectGroupList';
import NoData from '../components/project/NoData';
import { ProjectContext } from '../context/project/ProjectContext';
import NoGroup from '../components/project/NoGroup';
import Loader from '../components/Loader';

const ProjectLayout: React.FC = () => {
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const { isProjectLoading, projectlist, lastExecutedRuns } =
    useContext(ProjectContext);
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

  return (
    <div className="projectgrouplist-page">
      {isProjectLoading && (
        <>
          <Loader />
        </>
      )}
      <div className="projectgrouplist-page_inner">
        <div
          className={
            projectlist?.length >= 1 ||
            projectlist?.length == undefined ||
            localStorage.getItem('data') != ''
              ? 'projectlayout projectdashboard'
              : 'projectlayout hide'
          }
        >
          <div className="col">
            <ProjectList />
          </div>
          <div>
            {/* <div
              className={
                lastExecutedRuns?.dashboard?.length == 0 ? 'col ' : 'col hide'
              }
            >
              <NoGroup />
            </div> */}
            <div className="col design-add-border">
              <ProjectGroupList />
            </div>
          </div>
        </div>
        <div
          className={
            projectlist?.length == 0 && localStorage.getItem('data') === ''
              ? ' '
              : ' hide'
          }
        >
          <NoData />
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
