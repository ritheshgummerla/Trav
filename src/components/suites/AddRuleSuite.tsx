/* eslint-disable */
import React, { useContext } from 'react';
import useViewport from '../../hooks/useViewport';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useRulesList } from '../../hooks/useRulesList';
import { ProjectContext } from '../../context/project/ProjectContext';
import { useHistory, withRouter } from 'react-router-dom';

const AddRule: React.FC = () => {
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const [modalWindow, setModalWindow] = React.useState(false);
  const history = useHistory();

  const {
    addRulePayload,
    setAddrulePayload,
    isActiveProjectTab,
    groupPayload,
    setAddRuleRequestBody,
    selectedRules,
    addRuleRequestBody,
    setSelectedRules
  } = useContext(ProjectContext);
  const addedRules = [...selectedRules];
  const [isExpand, setIsExpand] = React.useState();
  const [selectedExpand, setSelectedExpand] = React.useState(true);
  const [currentPageDetails, setCurrentPageDetails] = React.useState({
    page: 1,
    items_per_page: 100,
    search: '',
    category: '',
    status: '',
    searchType: 'rule'
  });
  const { data: rulesListData } = useRulesList(currentPageDetails);
  const onExpandRule = (id: any) => {
    setIsExpand(id);
  };
  // const onPlusIconClick = (e: any, rule: any) => {
  //   rule.showOptional = false;
  //   addedRules.push(rule);
  //   setSelectedRules((current: any) => [...current, rule]);
  // };
  const onCancelAddRule = () => {
    setIsExpand(undefined);
    setSelectedExpand(true);
    setSelectedRules([]);
    setModalWindow(false);
  };
  const onPlusIconClick = (e: any, rule: any) => {
    addedRules.push(rule);
    setAddrulePayload({
      ...addRulePayload,
      rules: addRulePayload.rules.concat(addedRules)
    });
    // setSelectedRules([]);
    // build add rule request payload to set values for args
    let argList: any = {};
    const payload: any = {
      project: isActiveProjectTab?.name,
      group: groupPayload?.name,
      description: groupPayload?.description,
      tags: groupPayload?.tags,
      owner: 'Admin',
      rules: []
    };
    // const ruleData = addRulePayload.rules.concat(addedRules);
    const currentRule = [rule];
    currentRule?.map((item: any, i: any) => {
      item?.args?.map((arg: any) => {
        // if (arg.mandatory === 'yes') {
        argList[arg.name] = arg.default;
        // }
        return arg;
      });
      payload.rules.push({
        ruleId: addRuleRequestBody.rules.length,
        id: item.id,
        rule: item.rule,
        description: item.description,
        severity: 'Low',
        package: 'great_expectations',
        version: '0.0.1', //this is hard coded for now. need to send dynamic value
        args: argList
      });
      argList = {};
      return item;
    });
    addRuleRequestBody.rules.push(payload.rules[0])
    setAddRuleRequestBody(addRuleRequestBody);
    history.push('/createsuite/addrules');
    setModalWindow(false);
  };
  const onExpandSelected = () => {
    setSelectedExpand(!selectedExpand);
  };
  const onRemoveSelectedRule = (i: any) => {
    setSelectedRules((current: any[]) =>
      current.filter((e: any, index: any) => {
        return index !== i;
      })
    );
  };
  const searchRuleFilterByName = (e: any): any => {
    if (e.target.value.trim() !== '') {
      setCurrentPageDetails({
        ...currentPageDetails,
        search: e.target.value
      });
    } else {
      setCurrentPageDetails({
        ...currentPageDetails,
        search: ''
      });
    }
  };

  const [expand, setExpand] = React.useState(false);
  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };
  return (
    <div className="add-rule-model">
      <div>
        <div className="add-rule-content">
          <div className="search-box">
            <span className="dq-icon-search" />
            <TextField
              className="search"
              name="search"
              id="standard-basic"
              label="Search"
              placeholder="Search Expectations by name, tags"
              variant="standard"
              InputLabelProps={{
                shrink: true
              }}
              onKeyUp={(e) => searchRuleFilterByName(e)}
            />
          </div>
          <div className="accordian">
            {rulesListData?.data?.rules?.map((rule: any) => (
              <Accordion>
                <div className="flex justify-between bg-nc-6">
                  <AccordionSummary>
                    <Typography>{rule.rule}</Typography>
                  </AccordionSummary>
                  <span className="mr-12 flex items-center">
                    <IconButton
                      className="btn-icon sm round  btn-sc-1 add-rule-icon"
                      onClick={(e) => onPlusIconClick(e, rule)}
                    >
                      <a>
                        <span
                          className="dq-icon-add"
                          // onClick={onAddRuleClick}
                        />
                      </a>
                    </IconButton>
                  </span>
                </div>

                <AccordionDetails>
                  <div className="add-rule-detail">
                    <div className="vertical-sepreter-line">
                      <p className="description">{rule?.description}</p>
                    </div>
                    <div className="vertical-sepreter-line">
                      <span>Category</span>
                      <p>{rule?.category}</p>
                    </div>
                    <div className="vertical-sepreter-line">
                      <span>Status</span>
                      <p>{rule?.status}</p>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
      {/* <div  className="selected-rule">
          <div className="block">
            <p>Selected Rule : ({selectedRules?.length})</p>
            {selectedRules?.map((data: any, index: number) => (
              <Chip
                key={index}
                className="chip"
                label={data?.rule}
                onDelete={(i) => onRemoveSelectedRule(i)}
                deleteIcon={
                  <IconButton className="btn-icon xxsm bg-ex-1 text-nc-4 hover:bg-ex-1 hover:text-nc-3">
                    <span className="dq-icon-close" />
                  </IconButton>
                }
              />
            ))}
          </div>
        </div>
        <Button
          variant="contained"
          className="btn btn-pc-1"
          onClick={onAddRuleClick}
        >
          ADD RULES TO GROUP
        </Button> */}
    </div>
  );
};

export default withRouter(AddRule);
