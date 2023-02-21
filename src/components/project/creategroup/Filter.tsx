/* eslint-disable */
import React, { useContext } from 'react';
import useViewport from '../../../hooks/useViewport';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@mui/material';
import { ProjectContext } from '../../../context/project/ProjectContext';
import {
  createGroupInProject,
  addRuleToGroup,
  onUpdateGroupAPI,
  onUpdateRuleAPI,
} from '../../../common/services/groupServices';
import { useHistory } from 'react-router';
import AddRule from './AddRule';
interface FilterProps {
  groupValidation: any;
  setGroupValidation: any;
}
const Filter: React.FC<FilterProps> = ({
  groupValidation,
  setGroupValidation,
}: FilterProps) => {
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const history = useHistory();
  const {
    addRuleRequestBody,
    setAddrulePayload,
    groupPayload,
    setGroupPayload,
    setAddRuleRequestBody,
    isActiveProjectTab,
    setIsActiveProjectTab,
    setIsProjectLoading,
    previousGroupPayload,
    setSuccessMsg,
    setErrorMsg,
    isEditGroup,
    setIsEditGroup,
    editRulesListCopy,
    setEditRulesListCopy,
  } = useContext(ProjectContext);

  const editedRulesData = [...editRulesListCopy];
  const onSaveGroup = () => {
    setGroupValidation({
      ...groupValidation,
      groupName: false,
    });
    if (groupPayload.name === '') {
      setGroupValidation({
        ...groupValidation,
        groupName: groupPayload.name === '',
      });
      return false;
    }
    const addGroupToProjectPayload = {
      name: groupPayload.name,
      description: groupPayload.description,
      tags: groupPayload.tags,
      project_name: groupPayload.project_name,
      owner: 'admin',
    };
    setAddRuleRequestBody({
      addRuleRequestBody,
      group: groupPayload.name,
    });
    const addRulesToGroupPayload = { ...addRuleRequestBody };
    addRulesToGroupPayload.group = groupPayload.name;
    addRuleRequestBody?.rules?.filter((item: any) => {
      delete item.ruleId;
      return item;
    });
    setIsProjectLoading(true);
    const result = createGroupInProject(addGroupToProjectPayload);
    result
      .then((response: any) => {
        if (response) {
          setSuccessMsg('Suite created successfully');
          setGroupPayload({
            name: '',
            description: '',
            tags: [],
            rules: [],
            owner: 'Admin',
          });
          const result = addRuleToGroup(addRulesToGroupPayload);
          result
            .then((response) => {
              if (response) {
                setIsProjectLoading(false);
                setIsActiveProjectTab({
                  ...isActiveProjectTab,
                  rules: [],
                });
                setAddRuleRequestBody({
                  ...addRuleRequestBody,
                  rules: [],
                });
                history.push('/projects');
              }
            })
            .catch((err) => {
              setErrorMsg(err.response.data.error);
              setIsProjectLoading(false);
              history.push('/projects');
            });
        }
      })
      .catch((err: any) => {
        setErrorMsg(err?.response?.data?.error);
        setIsProjectLoading(false);
        history.push('/projects');
      });
  };
  const onCancelCreateGroup = () => {
    setIsEditGroup(false);
    setIsActiveProjectTab(isActiveProjectTab);
    setEditRulesListCopy([]);
    setAddrulePayload({
      ...previousGroupPayload,
      rules: [],
    });
    setAddRuleRequestBody({
      ...addRuleRequestBody,
      rules: [],
    });
    setGroupPayload({});
    history.push('/projects');
  };

  return (
    <div className="filter flex justify-between items-center p-16 border-t border-nc-6">
      <div className="left">
        <div className="group-filter">
          <IconButton
            onClick={onCancelCreateGroup}
            className="btn-icon icon sm text-nc-4"
          >
            <span className="dq-icon-back_arrow  cursor-pointer"></span>
          </IconButton>
          <div className="title-col text-nc-4">
            <p className="">Create Group  </p>
            <a href="/projects">Projects /</a>
            <span> {isActiveProjectTab?.name}</span>
            <a href="">
              {/* CRM Customer Data */}
              {/* {isActiveProjectTab?.name} /
              {isEditGroup ? 'Edit Group' : 'Create Group'} */}
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="inline-block mr-18 pr-18 border-r border-r-nc-5">
          <AddRule />
        </div>
        <Button
          variant="contained"
          className="btn btn-pc-1"
          // disabled={
          //   editRulesList?.length === 0 &&
          //   addRulePayload?.rules?.length === 0 &&
          //   !isEditGroup
          // }
          onClick={
            // isEditGroup ? onUpdateGroup :
            onSaveGroup
          }
        >
          {isEditGroup ? 'Update' : 'Save'}
          {/* Save */}
        </Button>
        <Button
          variant="contained"
          className="btn btn-sc sc-2"
          onClick={onCancelCreateGroup}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Filter;
