/* eslint-disable */
import React, { useState, useEffect } from 'react';
import useViewport from '../hooks/useViewport';
import Action from '../components/suites/Action';
import Form from '../components/suites/Form';
import NoData from '../components/project/creategroup/NoData';
import AddRuleList from '../components/suites/AddRuleSuite';

const CreateGroupLayout: React.FC = () => {
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const [groupValidation, setGroupValidation] = useState({ groupName: false });
  {
    /* Pagination Code */
  }
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
    <div className="creategrouplist-page">
      <div className="creategrouplist-page_inner">
        
        <Form
              groupValidation={groupValidation}
              setGroupValidation={setGroupValidation}
            />
        <div className="projectlayout">
          <div className="col border-right-design">
            <AddRuleList />
          </div>
          <div className="col">
            <NoData />
            <Action
          groupValidation={groupValidation}
          setGroupValidation={setGroupValidation}
        />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupLayout;
