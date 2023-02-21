/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useContext } from 'react';
import Filter from '../components/suites/Filter';
import Datatable from '../components/suites/Datatable';
import Pagination from '../common/utils/Pagination';
import { useGroupList } from '../hooks/useGroupList';
import { ProjectContext } from '../context/project/ProjectContext';
import Loader from '../components/Loader';

const Suite: React.FC = () => {
  // const { windowWidth } = useViewport();
  const {
    setGroupList,
    groupList,
    setIsProjectLoading,
    isProjectLoading,
    setIsEditGroup,
  } = useContext(ProjectContext);
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);

  const [currentPageDetails, setCurrentPageDetails] = React.useState({
    page: 1,
    per_page: 10,
    searchType: 'name',
    search: '',
    owner: '',
  });
  const {
    data: groupsListData,
    isLoading,
    isFetching,
  } = useGroupList(currentPageDetails);
  useEffect(() => {
    setIsProjectLoading(isLoading);
  }, [isLoading]);

  React.useEffect(() => {
    setGroupList(groupsListData?.data?.groups);
  }, [groupsListData?.data?.groups]);
  const handleChangePage = (e: unknown, newPage: number) => {
    setCurrentPageDetails({
      ...currentPageDetails,
      page: newPage + 1,
    });
  };
  const handleChangeRowsPerPage = (e: any) => {
    setCurrentPageDetails({
      ...currentPageDetails,
      page: 1,
      per_page: e.target.value,
    });
  };
  return (
    <div className="suites-page">
      {isProjectLoading && <Loader />}
      <div className="suites-page_inner">
        <Filter
          setCurrentPageDetails={setCurrentPageDetails}
          currentPageDetails={currentPageDetails}
        />
        <Datatable />
        <Pagination
          count={groupsListData?.data?.pagination?.count}
          page={groupsListData?.data?.pagination?.page - 1}
          rowsPerPage={groupsListData?.data?.pagination?.per_page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default Suite;
