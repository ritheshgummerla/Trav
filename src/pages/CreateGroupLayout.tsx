/* eslint-disable */
import React, { useState, useContext } from 'react';
import useViewport from '../hooks/useViewport';
import Filter from '../components/project/creategroup/Filter';
import RuleList from '../components/project/creategroup/RuleList';
import { ProjectContext } from '../context/project/ProjectContext';
import Form from '../components/suites/Form';
import AddRuleList from '../components/suites/AddRuleSuite';
import Action from '../components/suites/Action';
import { useHistory, withRouter } from 'react-router-dom';

const CreateGroupLayout: React.FC = () => { 
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
  const { groupPayload } = useContext(ProjectContext);
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
  const [groupValidation, setGroupValidation] = useState({ groupName: false });
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
            {/* add "full-width" class swich base */}
        <div className="projectlayout">
          <div className="col">
            <AddRuleList />
          </div>
          <div className="col">
            <RuleList />
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

export default withRouter(CreateGroupLayout);
