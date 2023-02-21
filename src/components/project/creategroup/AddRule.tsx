/* eslint-disable */
import React, { useContext } from 'react';
import useViewport from '../../../hooks/useViewport';
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
import { useRulesList } from '../../../hooks/useRulesList';
import { ProjectContext } from '../../../context/project/ProjectContext';
import { useHistory } from 'react-router';

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
    setSelectedRules,
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
    searchType: 'rule',
  });
  const { data: rulesListData } = useRulesList(currentPageDetails);
  const onExpandRule = (id: any) => {
    setIsExpand(id);
  };
  const onPlusIconClick = (e: any, rule: any) => {
    rule.showOptional = false;
    addedRules.push(rule);
    setSelectedRules((current: any) => [...current, rule]);
  };
  const onCancelAddRule = () => {
    setIsExpand(undefined);
    setSelectedExpand(true);
    setSelectedRules([]);
    setModalWindow(false);
  };
  const onAddRuleClick = () => {
    setAddrulePayload({
      ...addRulePayload,
      rules: addedRules.concat(addRulePayload.rules),
    });
    setSelectedRules([]);
    // build add rule request payload to set values for args
    const argList: any = {};
    const payload: any = {
      project: isActiveProjectTab?.name,
      group: groupPayload?.name,
      rules: [],
    };
    selectedRules?.map((item: any, i: any) => {
      item?.args?.map((arg: any) => {
        // if (arg.mandatory === 'yes') {
        argList[arg.name] = arg.default;
        // }
        return arg;
      });
      payload.rules.push({
        ruleId: i,
        id: item.id,
        rule: item.rule,
        description: item.description,
        severity: 'Low',
        package: 'great_expectations',
        args: argList,
      });
      return item;
    });
    setAddRuleRequestBody(payload);
    //Build request payload end
    // const location = {
    //   pathname: '/projects/creategroup/rulelist',
    //   state: { fromDashboard: true },
    // };
    history.push('/projects/creategroup/rulelist');
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
        search: e.target.value,
      });
    } else {
      setCurrentPageDetails({
        ...currentPageDetails,
        search: '',
      });
    }
  };
  return (
    <div className="add-rule-model">
      <Button
        onClick={() => {
          setModalWindow(true);
        }}
        variant="outlined"
        className="btn btn-pc-1 btn-text-nc-1"
      >
        Add Rules
      </Button>

      <Dialog maxWidth={false} className="dialog sm h-600" open={modalWindow}>
        <DialogTitle disableTypography>
          <span className="dialog-title">Add Rule</span>
          <IconButton
            className="btn-icon xxsm bg-nc-7 text-nc-4 hover:bg-nc-7 hover:text-nc-1"
            onClick={onCancelAddRule}
          >
            <span className="dq-icon-close" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className="add-rule-content">
            <div className="search-box">
              <TextField
                className="search"
                name="search"
                id="standard-basic"
                label="Search"
                placeholder="Search"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                onKeyUp={(e) => searchRuleFilterByName(e)}
              />
              <IconButton className="search-icon btn-icon md square btn-pc-1">
                <span className="dq-icon-search" />
              </IconButton>
            </div>
            <div className="accordian">
              {rulesListData?.data?.rules?.map((rule: any) => (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<span className="dq-icon-up_cheveron" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{rule.rule}</Typography>
                    <span className="mr-12">
                      <IconButton className="btn-icon sm square  btn-sc-1 add-rule-icon">
                        <a>
                          <span
                            onClick={(e) => onPlusIconClick(e, rule)}
                            className="dq-icon-add"
                          />
                        </a>
                      </IconButton>
                    </span>
                  </AccordionSummary>
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
        </DialogContent>
        <DialogActions disableSpacing className="selected-rule">
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
        </DialogActions>
        <Button
          variant="contained"
          className="btn btn-pc-1"
          onClick={onAddRuleClick}
        >
          ADD RULES TO GROUP
        </Button>
      </Dialog>
    </div>
  );
};

export default AddRule;
