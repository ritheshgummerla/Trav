import React, { useContext, useEffect } from 'react';
import Filter from '../components/expectation/Filter';
import Datatable from '../components/expectation/Datatable';
import { useRulesList } from '../hooks/useRulesList';
// import TablePagination from '@mui/material/TablePagination';
import Pagination from '../common/utils/Pagination';
import Loader from '../components/Loader';
import { ProjectContext } from '../context/project/ProjectContext';

const Expectations: React.FC = () => {
  const { setRulesData, isProjectLoading } = useContext(ProjectContext);
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);

  const [currentPageDetails, setCurrentPageDetails] = React.useState({
    page: 1,
    items_per_page: 10,
    search: '',
    category: '',
    status: '',
    searchType: 'by_rule',
  });
  const { data } = useRulesList(currentPageDetails);

  useEffect(() => {
    setRulesData(data?.data?.rules);
  }, [data]);
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
      items_per_page: e.target.value,
    });
  };
  {
    /* Pagination Code */
  }
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (
  //   event: React.MouseEvent<HTMLButtonElement> | null,
  //   newPage: number
  // ) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };
  {
    /* Pagination Code */
  }
  return (
    <div className="expectations-page">
      {isProjectLoading && <Loader />}
      <div className="expectations-page_inner">
        <Filter
          currentPageDetails={currentPageDetails}
          setCurrentPageDetails={setCurrentPageDetails}
        />
        <Datatable />
        <Pagination
          count={data?.data?.pagination?.count}
          page={data?.data?.pagination?.page - 1}
          rowsPerPage={data?.data?.pagination?.per_page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default Expectations;
