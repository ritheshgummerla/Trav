/* eslint-disable */
import React, { useContext, useEffect } from 'react';
import useViewport from '../../../hooks/useViewport';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { useHistory, useLocation } from 'react-router-dom';
import { ProjectContext } from '../../../context/project/ProjectContext';
import Toast, {
  ERROR_TOAST,
  SUCCESS_TOAST
} from '../../../components/layouts/Toast';
import { deleteRuleUnderGroup } from '../../../common/services/groupServices';
import DeleteSuite from '../DeleteSuite';
import Loader from '../../Loader';

const RuleList: React.FC = () => {
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const [modalWindow, setModalWindow] = React.useState(false);

  const history = useHistory();
  const location = useLocation();
  const updatedArgs: any[] = [];
  const {
    addRulePayload,
    setAddrulePayload,
    addRuleRequestBody,
    setAddRuleRequestBody,
    setGroupPayload,
    setPreviousGroupPayload,
    isActiveProjectTab,
    editRulesList,
    setEditRulesList,
    setEditRulesListCopy,
    setIsProjectLoading,
    setSuccessMsg,
    setErrorMsg,
    setOpenDeleteModal,
    groupPayload,
    isProjectLoading
  } = useContext(ProjectContext);
  const [deleteRule, setDeleteRule] = React.useState({
    group_id: '',
    rule_id: ''
  });
  const onHandleChange = (e: any, id: number, index: any, data: any) => {
    const name = e.target.name;
    let value = e.target.value;
    if (data.type === 'int' || name === 'column_index') {
      value = parseInt(value);
    }
    addRuleRequestBody.rules.filter((rules: any) => {
      if (rules.ruleId === index) {
        if (name === 'severity') {
          rules.severity = value;
        } else if (name === 'value_set' || name === 'column_list') {
          const isNumber = (i: any) => {
            return i >= '0' && i <= '9';
          };
          let valueSetValue: any;
          if (isNumber(value)) {
            valueSetValue = value.split(',').map(Number);
          } else {
            valueSetValue = value.split(',');
          }
          const args = {
            ...rules.args,
            [name]: valueSetValue
          };
          rules.args = args;
        } else {
          const args = { ...rules.args, [name]: value };
          rules.args = args;
        }
      }
      return rules;
    });
    setAddRuleRequestBody({...addRuleRequestBody});
  };
  useEffect(() => {
    editRulesList?.map((item: any, i: any) => {
      item.ruleId = i;
      return item;
    });
  }, [editRulesList]);

  const onEditRuleChange = (e: any, id: number, index: any, data: any) => {
    const name = e.target.name;
    const value = e.target.value;
    editRulesList.filter((rules: any) => {
      if (rules.ruleId === index) {
        if (name === 'severity') {
          rules.severity = value;
          rules.isEdited = true;
        } else if (name === 'value_set') {
          const isNumber = (i: any) => {
            return i >= '0' && i <= '9';
          };
          let valueSetValue: any;
          if (isNumber(value)) {
            valueSetValue = value.split(',').map(Number);
          } else {
            valueSetValue = value.split(',');
          }
          const args = {
            ...rules.args,
            [name]: valueSetValue
          };
          rules.args = args;
          rules.isEdited = true;
        } else {
          const args = { ...rules.args, [name]: value };
          rules.args = args;
          rules.isEdited = true;
        }
      }
      return rules;
    });
    setEditRulesList(editRulesList);
    setEditRulesListCopy(editRulesList);
  };

  useEffect(() => {
    if (history.location.state !== undefined) {
      const data: any = history.location.state;
      setGroupPayload({
        name: data.name,
        description: data.description,
        owner: data.owner,
        owner_email: 'Admin@anblicks.com',
        tags: data.tags,
        id: data._id
      });
      setPreviousGroupPayload({
        name: data.name,
        description: data.description,
        owner: data.owner,
        owner_email: 'Admin@anblicks.com',
        tags: data.tags,
        id: data._id
      });
      data?.applied_rules?.filter((item: any, i: any) => {
        item.ruleId = i;
        return item;
      });
      setEditRulesList(data.rules);
    } else {
      // setAddrulePayload(addRulePayload);
      // setGroupPayload({
      //   name: '',
      //   description: '',
      //   tags: [],
      //   owner: 'Admin',
      //   project_name: '',
      // });
    }
  }, []);
  const onRemoveSelectedRule = (i: any) => {
    const rules = addRulePayload.rules.filter((rule: any, index: any) => {
      return index !== i;
    });
    const rulesList = addRuleRequestBody.rules.filter(
      (rule: any, index: any) => {
        return index !== i;
      }
    );
    setAddRuleRequestBody({
      ...addRuleRequestBody,
      rules: rulesList
    });
    setAddrulePayload({
      ...addRulePayload,
      rules
    });
  };
  const removeRuleViaAPI = (data: any) => {
    setOpenDeleteModal(true);
    setDeleteRule({
      group_id: groupPayload.id,
      rule_id: data._id
    });
  };
  const onRuleDeleteConfirmation = (status: boolean) => {
    if (status) {
      setIsProjectLoading(true);
      const result = deleteRuleUnderGroup(deleteRule);
      result
        .then((response) => {
          if (response) {
            setEditRulesList([]);
            setIsProjectLoading(false);
            const editedRules = editRulesList.filter((rule: any) => {
              return rule.id !== deleteRule.rule_id;
            });
            setEditRulesList([...editedRules]);
            // history.push('/suites');
          }
        })
        .catch((err) => {
          setErrorMsg(err.response.data.error);
          setIsProjectLoading(false);
          history.push('/suites');
        });
    }
  };
  const onclickYes = () => {
    // const payload = {
    //   groupId: deleteRecord._id
    // };
    // setIsProjectLoading(true);
    setIsProjectLoading(true);
    const result = deleteRuleUnderGroup(deleteRule);
    result
      .then((response) => {
        if (response) {
          Toast('Rule deleted successfully', SUCCESS_TOAST);
          setEditRulesList([]);
          setOpenDeleteModal(false);
          setIsProjectLoading(false);
          const editedRules = editRulesList.filter((rule: any) => {
            return rule._id !== deleteRule.rule_id;
          });
          setEditRulesList([...editedRules]);
          //history.push('/projects');
        }
      })
      .catch((err) => {
        Toast(err?.message, ERROR_TOAST);
        setOpenDeleteModal(false);
        setIsProjectLoading(false);
        // history.push('/suites');
      });
  };
  const onShowOptionalFields = (value: any, index: any, data: any) => {
    addRulePayload.rules[index] = {
      ...addRulePayload.rules[index],
      showOptional: value
    };
    setAddrulePayload({ ...addRulePayload });
  };

  return (
    <div className="rule-list">
      {isProjectLoading && <Loader />}
      {addRulePayload?.rules?.map((rule: any, index: number) => (
        <div className="relative min-height-150">
          <div className="left">
            <p>
              {index + 1}. {rule.rule}
            </p>
            <span>{rule.description}</span>

            <div className="form-rule">
              {rule?.args?.map(
                (param: any, i: number) =>
                  (param.mandatory === 'yes'
                    ? true
                    : rule.showOptional && param.mandatory === 'no') && (
                    <div className="w-180">
                      <TextField
                        type={param.type}
                        label={`${param?.name}${
                          param.mandatory === 'yes' ? '*' : ''
                        }`}
                        name={param.name}
                        placeholder={param.name}
                        variant="outlined"
                        className="input-field sm"
                        onChange={(e) =>
                          onHandleChange(e, rule.ruleId, index, param)
                        }
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </div>
                  )
              )}
              <div className="w-180">
                <FormControl
                  variant="outlined"
                  fullWidth={true}
                  className="input-select-wrapper mt-4"
                >
                  <InputLabel
                    id="user-time-zone-label"
                    className="input-select-label sm"
                  >
                    Severity *
                  </InputLabel>
                  <Select
                    name="severity"
                    label="severity"
                    id="user-time-zone"
                    variant="outlined"
                    className="input-select"
                    onChange={(e) => onHandleChange(e, rule.id, index, rule)}
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left"
                      },
                      getContentAnchorEl: null
                    }}
                  >
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="action">
              <Tooltip
                title="Show Optional Fields"
                placement="bottom"
                classes={{ tooltip: 'my-tooltip bg-pc-1 text-nc-7 text-12' }}
              >
                <IconButton
                  className="btn-icon icon sm"
                  onClick={(e) =>
                    onShowOptionalFields(!rule.showOptional, index, rule?.args)
                  }
                >
                  <span className="dq-icon-mandatory_on" />
                </IconButton>
              </Tooltip>

              <Tooltip
                title="Duplicate"
                placement="bottom"
                classes={{ tooltip: 'my-tooltip bg-pc-1 text-nc-7 text-12' }}
              >
                <IconButton className="btn-icon icon sm">
                  <span className="dq-icon-duplicate" />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="Close"
                placement="bottom"
                classes={{ tooltip: 'my-tooltip bg-pc-1 text-nc-7 text-12' }}
              >
                <IconButton
                  className="btn-icon icon sm"
                  onClick={() => onRemoveSelectedRule(index)}
                >
                  <span className="dq-icon-close xs" />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <div className="seprater-line"></div>
        </div>
      ))}
      {editRulesList?.map((rule: any, index: number) => (
        <div className="relative min-height-150">
          <div className="left">
            <p>
              {addRulePayload.rules.length
                ? addRulePayload.rules.length + index + 1
                : index + 1}
              . {rule.rule}
            </p>
            <span>{rule.description}</span>

            <div className="form-rule">
              {Object.keys(rule?.args)?.map((param: any, i: number) => {
                return (
                  <div className="w-180">
                    <TextField
                      label={`${param}$`}
                      name={param}
                      placeholder={param}
                      defaultValue={rule?.args[param]}
                      value={rule?.args?.param}
                      onChange={(e) =>
                        onEditRuleChange(e, rule.ruleId, index, param)
                      }
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </div>
                );
              })}
              <div className="w-180">
                <FormControl
                  variant="outlined"
                  fullWidth={true}
                  className="input-select-wrapper mt-4"
                >
                  <InputLabel
                    id="user-time-zone-label"
                    className="input-select-label sm"
                  >
                    Severity *
                  </InputLabel>
                  <Select
                    name="severity"
                    label="severity"
                    id="user-time-zone"
                    variant="outlined"
                    defaultValue={rule.severity}
                    className="input-select"
                    onChange={(e) => onHandleChange(e, rule.id, index, rule)}
                  >
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="action">
              {/* <Tooltip
                title="Show Optional Fields"
                placement="bottom"
                classes={{ tooltip: 'my-tooltip bg-pc-1 text-nc-7 text-12' }}
              >
                <IconButton
                  className="btn-icon icon sm"
                  onClick={(e) =>
                    onShowOptionalFields(!rule.showOptional, index, rule?.args)
                  }
                >
                  <span className="dq-icon-mandatory_on" />
                </IconButton>
              </Tooltip> */}

              {/* <Tooltip
                title="Duplicate"
                placement="bottom"
                classes={{ tooltip: 'my-tooltip bg-pc-1 text-nc-7 text-12' }}
              >
                <IconButton className="btn-icon icon sm">
                  <span className="dq-icon-duplicate" />
                </IconButton>
              </Tooltip> */}
              <Tooltip
                title="Delete"
                placement="bottom"
                classes={{ tooltip: 'my-tooltip bg-pc-1 text-nc-7 text-12' }}
              >
                <IconButton
                  className="btn-icon icon sm"
                  onClick={() => removeRuleViaAPI(rule)}
                >
                  <span className="dq-icon-close xs" />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <div className="seprater-line"></div>
        </div>
      ))}
      <DeleteSuite onclickYes={onclickYes} />
    </div>
  );
};

export default RuleList;
