/* eslint-disable */
import React, { useContext } from 'react';
import useViewport from '../../hooks/useViewport';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@mui/material';
import Toast, {
  ERROR_TOAST,
  SUCCESS_TOAST
} from '../../components/layouts/Toast';
import { ProjectContext } from '../../context/project/ProjectContext';
import {
  createGroupInProject,
  addRuleToGroup,
  onUpdateGroupAPI,
  onUpdateRuleAPI
} from '../../common/services/groupServices';
import { useHistory } from 'react-router';

interface FilterProps {
  groupValidation: any;
  setGroupValidation: any;
}
const Filter: React.FC<FilterProps> = ({
  groupValidation,
  setGroupValidation
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
    addRulePayload,
    setGroupPayload,
    setAddRuleRequestBody,
    isActiveProjectTab,
    setIsActiveProjectTab,
    setIsProjectLoading,
    previousGroupPayload,
    setSuccessMsg,
    isEditGroup,
    setIsEditGroup,
    editRulesList,
    editRulesListCopy,
    setEditRulesListCopy
  } = useContext(ProjectContext);

  const editedRulesData = [...editRulesListCopy];
  const onUpdateGroup = () => {
    setIsProjectLoading(true);
    const addRulesToGroupPayload = { ...addRuleRequestBody };
    addRulesToGroupPayload.group = groupPayload.name;
    addRulesToGroupPayload.project = isActiveProjectTab?.name;
    const editedRules: any = [];
    editedRulesData?.filter((obj: any) => {
      if (obj.isEdited === true) {
        editedRules.push(obj);
      }
      return obj;
    });
    if (editedRules.length > 0) {
      editedRules.filter((obj: any) => {
        delete obj.isEdited;
        // delete obj.created_date;
        delete obj.modified_date;
        delete obj.ruleId;
        return obj;
      });
      const payload = {
        groupId: groupPayload.id,
        rules: {
          rules: editedRules
        }
      };
      setIsProjectLoading(true);
      // editedRules.rules.filter((obj: any, index: any) => {
      // delete obj.isEdited;
      const result = onUpdateRuleAPI(payload);
      result
        .then((response) => {
          if (response) {
            // setSuccess Msg(response.success);
            Toast('Rule updated successfully', SUCCESS_TOAST);
            setIsProjectLoading(false);
            setAddrulePayload({
              rules: []
            });
            // setIsEditGroup(false);
            history.push('/suites');
            // if (index === editedRules.rules.length - 1) {
            setEditRulesListCopy([]);
            // }
          }
        })
        .catch((err) => {
          Toast(err?.message, ERROR_TOAST);
          setIsProjectLoading(false);
          setIsEditGroup(false);
          history.push('/suites');
        });
      //   return obj;
      // });
    }
    if (JSON.stringify(groupPayload) !== JSON.stringify(previousGroupPayload)) {
      setIsProjectLoading(true);
      const result = onUpdateGroupAPI(groupPayload);
      result
        .then((response) => {
          if (response) {
            Toast('Group updated successfully', SUCCESS_TOAST);
            // set Success Msg(response.success);
            setIsProjectLoading(false);
            setIsEditGroup(false);
            history.push('/suites');
          }
        })
        .catch((err) => {
          Toast(err?.message, ERROR_TOAST);
          setIsProjectLoading(false);
          history.push('/suites');
        });
    }
    if (addRulesToGroupPayload.rules.length > 0) {
      addRulesToGroupPayload.rules.filter((item: any) => {
        delete item.ruleId;
        delete item.isEdited;
        return item;
      });
      setIsProjectLoading(true);
      const addRulesToGroup = {
        groupId: groupPayload?.id,
        rules: addRuleRequestBody?.rules
      };
      const result = addRuleToGroup(addRulesToGroup);
      result
        .then((response) => {
          if (response) {
            Toast('Rules added successfully', SUCCESS_TOAST);
            setIsProjectLoading(false);
            setIsEditGroup(false);
            setSuccessMsg(response.status);
            setAddrulePayload({
              rules: []
            });
            setAddRuleRequestBody({
              project: '',
              group: '',
              rules: []
            });
            if (
              JSON.stringify(groupPayload) ===
                JSON.stringify(previousGroupPayload) &&
              addRulesToGroupPayload.rules.length > 0
            ) {
              history.push('/suites');
            }
          }
        })
        .catch((err) => {
          Toast(err?.message, ERROR_TOAST);
          setIsProjectLoading(false);
          history.push('/suites');
        });
    }
    if (
      addRulesToGroupPayload.rules.length === 0 &&
      editRulesListCopy.length === 0 &&
      JSON.stringify(groupPayload) === JSON.stringify(previousGroupPayload)
    ) {
      history.push('/suites');
    }
  };

  const onSaveGroup = () => {
    setGroupValidation({
      ...groupValidation,
      groupName: false
    });
    if (groupPayload.name === '') {
      setGroupValidation({
        ...groupValidation,
        groupName: groupPayload.name === ''
      });
      return false;
    }
    const addGroupToProjectPayload = {
      name: groupPayload.name,
      description: groupPayload.description,
      tags: groupPayload.tags,
      project_name: groupPayload.project_name,
      owner: 'admin',
      owner_email: 'admin@anblicks.com'
    };

    const createGroupPayload = { ...addRuleRequestBody };
    createGroupPayload.group = groupPayload.name;

    let validKeys: any = [];
    let keys: any = [];
    addRulePayload.rules.filter((row: any) => {
      keys = [];
      row.args.filter((arg: any) => {
        if (arg.mandatory === 'yes') {
          validKeys.push(arg.name);
        }
      });
    });
    let unique = validKeys.filter(
      (v: any, i: any, a: any) => a.indexOf(v) === i
    );
    createGroupPayload?.rules !== undefined &&
      createGroupPayload?.rules?.filter((row: any) => {
        unique.filter((key: any) => {
          if (
            row.args[key] === '' ||
            row.args[key] === 'None' ||
            row.args[key] === null
          ) {
            keys.push(key);
          }
        });
      });
    // addRuleRequestBody?.rules?.filter((item: any) => {
    //   delete item.ruleId;
    //   return item;
    // });
    let errorValidation = keys.filter(
      (v: any, i: any, a: any) => a.indexOf(v) === i
    );
    if (errorValidation.length > 0) {
      Toast('Please fill the required fields', ERROR_TOAST);
      return;
    }
    setAddRuleRequestBody({
      addRuleRequestBody,
      group: groupPayload.name
    });
    setIsProjectLoading(true);
    const result = createGroupInProject(addGroupToProjectPayload);
    result
      .then((response: any) => {
        if (response) {
          // setSuccessMsg('Group created successfully');
          Toast('Suite created successfully', SUCCESS_TOAST);
          setGroupPayload({
            name: '',
            description: '',
            tags: [],
            rules: [],
            owner: 'Admin'
          });
          const addRulesToGroup = {
            groupId: response?._id,
            rules: addRuleRequestBody?.rules
          };
          const result = addRuleToGroup(addRulesToGroup);
          result
            .then((response) => {
              if (response) {
                setIsProjectLoading(false);
                Toast('Rules added successfully', SUCCESS_TOAST);
                setIsActiveProjectTab({
                  ...isActiveProjectTab,
                  rules: []
                });
                setAddRuleRequestBody({
                  ...addRuleRequestBody,
                  rules: []
                });
                history.push('/suites');
              }
            })
            .catch((err) => {
              // setErrorMsg(err.response.data.error);
              Toast(err?.message, ERROR_TOAST);
              setIsProjectLoading(false);
              history.push('/suites');
            });
        }
      })
      .catch((err: any) => {
        // setErrorMsg(err?.response?.data?.error);
        Toast(err?.message, ERROR_TOAST);
        setIsProjectLoading(false);
        history.push('/suites');
      });
  };
  const onCancelCreateGroup = () => {
    setIsEditGroup(false);
    setIsActiveProjectTab(isActiveProjectTab);
    setEditRulesListCopy([]);
    setAddrulePayload({
      ...previousGroupPayload,
      rules: []
    });
    setAddRuleRequestBody({
      ...addRuleRequestBody,
      rules: []
    });
    setGroupPayload({});
    history.push('/suites');
  };
  return (
    <div className="filter flex justify-between items-center py-12 border-t border-nc-6">
      <div className="left">
        <div className="group-filter">
          <IconButton
            onClick={onCancelCreateGroup}
            className="btn-icon icon sm text-nc-4 expand-arrow"
          >
            <span className="dq-icon-back_arrow  cursor-pointer"></span>
          </IconButton>
        </div>
      </div>
      <div className="right pr-12">
        <Button
          variant="contained"
          className="btn btn-pc-1"
          disabled={
            editRulesList?.length === 0 &&
            addRulePayload?.rules?.length === 0 &&
            !isEditGroup
          }
          onClick={isEditGroup ? onUpdateGroup : onSaveGroup}
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
