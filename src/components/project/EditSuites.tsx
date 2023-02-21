/* eslint-disable */
import React, { useContext, useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import {
  addSuitesToProject,
  deleteGroupUnderProject
} from '../../common/services/projectServices';
import { ProjectContext } from '../../context/project/ProjectContext';
import {
  fetchProjectsGroupsList,
  last20ExecutedRuns
} from '../../common/services/projectServices';
import { useGroupList } from '../../hooks/useGroupList';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import BadgeProfile from '../../components/BadgeProfile';
import Menu from '@mui/material/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toast, {
  ERROR_TOAST,
  SUCCESS_TOAST
} from '../../components/layouts/Toast';
import Pagination from '../../common/utils/Pagination';

const EditSuites: React.FC = () => {
  // const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const history = useHistory();
  const [modalWindow, setModalWindow] = React.useState(false);
  // const [selectedGroups, setSelectedGroups] = React.useState([]);
  const {
    setIsProjectLoading,
    setErrorMsg,
    isActiveProjectTab,
    suitesDrawerWindow,
    setSuitesDrawerWindow,
    setGroupList,
    groupList,
    selectedGroups,
    setSelectedGroups,
    newlyAddedGroupList,
    setNewlyAddedGroupList,
    setGroupsUnderProject,
    setLastExecutedRuns,
    currentPageDetailsLastRuns,
    setCurrentPageDetailsLastRuns
  } = useContext(ProjectContext);
  const [isProjectNameEmpty, setisProjectNameEmpty] = useState(false);
  const [onExpand, setOnExpand] = useState(false);
  const [onExpand1, setOnExpand1] = useState(false);
  const [newGroupList, setNewGroupList] = useState<any>([]);
  // const [newlyAddedGroupList, setNewlyAddedGroupList] = useState<any>([]);
  const [currentPageDetails, setCurrentPageDetails] = React.useState({
    page: 1,
    per_page: 100,
    group: '',
    project_id: '',
    owner: '',
    searchType: 'name',
    search: ''
  });
  const { data: groupsListData } = useGroupList(currentPageDetails);
  React.useEffect(() => {
    setGroupList(groupsListData?.data?.groups);
  }, [groupsListData]);

  useEffect(() => {
    if (isActiveProjectTab !== undefined) {
      setCurrentPageDetails({
        ...currentPageDetails,
        project_id: isActiveProjectTab?._id
      });
      setCurrentPageDetailsLastRuns({
        ...currentPageDetailsLastRuns,
        project_id: isActiveProjectTab?._id
      });
    }
  }, [isActiveProjectTab]);
  useEffect(() => {
    if (currentPageDetails.project_id !== '') {
      setIsProjectLoading(true);
      groupList?.map((group: any) => {
        group.isChecked = false;
      });
      const result = fetchProjectsGroupsList(currentPageDetails);
      result
        .then((response) => {
          if (response) {
            if (response.length > 0) {
              setGroupsUnderProject(response);
              // response.length > 0 &&
              //   response?.map((row: any) => {
              //     groupList?.map((group: any) => {
              //       if (group._id === row._id) {
              //         group.isChecked = true;
              //       }
              //     });
              //   });
              setSelectedGroups(response);
            } else {
              setSelectedGroups([]);
            }
            setIsProjectLoading(false);
          }
        })
        .catch((err) => {
          setIsProjectLoading(false);
          Toast(err?.message, ERROR_TOAST);
          setSelectedGroups([]);
        });
      // setNewGroupList(groupList);
      setGroupList(groupList);
    }
  }, [currentPageDetails]);

  useEffect(() => {
    if (currentPageDetails.project_id !== '') {
      setIsProjectLoading(true);
      const data = last20ExecutedRuns(currentPageDetailsLastRuns);
      data
        .then((response) => {
          if (response) {
            setLastExecutedRuns(response);
            setIsProjectLoading(false);
          }
        })
        .catch((err) => {
          setIsProjectLoading(false);
          setLastExecutedRuns([]);
          // Toast(err?.response?.data?.message, ERROR_TOAST);
        });
    }
  }, [currentPageDetailsLastRuns]);

  const [createProjectPayload, setCreateProjectPayload] = useState({
    name: '',
    description: '',
    owner: 'Admin'
  });
  const onCancelProject = () => {
    setisProjectNameEmpty(false);
    setSuitesDrawerWindow(false);
    setCreateProjectPayload({
      name: '',
      description: '',
      owner: 'Admin'
    });
    // setSelectedGroups([]);
  };
  const onSaveGroupsToProjet = () => {
    setIsProjectLoading(true);
    // selectedGroups([])
    newlyAddedGroupList?.map((row: any) => {
      setSelectedGroups([]);
      const payload = {
        project_id: isActiveProjectTab?._id,
        group_id: row?._id
      };
      const result = addSuitesToProject(payload);
      result
        .then((response) => {
          if (response) {
            Toast('Suite Added successfully', SUCCESS_TOAST);
            setSuitesDrawerWindow(false);
            setIsProjectLoading(false);
            if (
              JSON.stringify(selectedGroups) !==
              JSON.stringify(newlyAddedGroupList)
            ) {
              selectedGroups.push(...newlyAddedGroupList);
              setSelectedGroups([...selectedGroups]);
            }
            // setNewlyAddedGroupList([]);
          }
          history.push('/projects');
        })
        .catch((err) => {
          Toast(err?.message, ERROR_TOAST);
          setIsProjectLoading(false);
          setSelectedGroups([]);
          setNewlyAddedGroupList([]);
        });
    });
    // const payload = {
    //   project_id: 'string',
    //   group_id: selectedGroups[0]?._id,
    // };

    setModalWindow(false);
  };

  useEffect(() => {
    if (groupList !== undefined && groupList.length > 0) {
      let lists = groupList?.filter(
        (i: any) => !selectedGroups?.filter((y: any) => y._id === i._id).length
      );
      setNewGroupList(lists);
    }
  }, [groupList, selectedGroups]);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const onAddGroup = (e: any, value: any) => {
    if (e.target.checked) {
      groupList.find((v: any) => v._id === value._id).isChecked = true;
      newlyAddedGroupList.push({ ...value });
      setNewlyAddedGroupList([...newlyAddedGroupList]);
    } else {
      groupList.find((v: any) => v._id === value._id).isChecked = false;
      let index = newlyAddedGroupList.findIndex((e: any) => e._id === value.id);
      newlyAddedGroupList.splice(index, 1);
      setNewlyAddedGroupList([...newlyAddedGroupList]);
    }
    setGroupList(groupList);
  };

  const onremoveSelectedGroup = (value: any) => {
    let index = newlyAddedGroupList.findIndex((e: any) => e.id === value.id);
    newlyAddedGroupList.splice(index, 1);
    setNewlyAddedGroupList([...newlyAddedGroupList]);
    groupList.find((v: any) => v.id === value.id).isChecked = false;
    setGroupList([...groupList]);
  };

  const onshowMore = () => {
    setOnExpand(true);
  };
  const onshowLess = () => {
    setOnExpand(false);
  };

  const handleChangePage = (e: unknown, newPage: number) => {
    setCurrentPageDetails({
      ...currentPageDetails,
      page: newPage + 1
    });
  };
  const handleChangeRowsPerPage = (e: any) => {
    setCurrentPageDetails({
      ...currentPageDetails,
      page: 1,
      per_page: e.target.value
    });
  };

  const onremoveSelectedGroupAPI = (value: any) => {
    setIsProjectLoading(true);
    const payload = {
      // _id: 'string',
      project_id: isActiveProjectTab._id,
      group_id: value._id
      // created_date: '2023-01-31T05:26:10.655130',
      // modified_date: '2023-01-31T05:26:10.655133'
    };
    const result = deleteGroupUnderProject(payload);
    result
      .then((response) => {
        if (response) {
          groupList.find((v: any) => v._id === value?._id).isChecked = false;
          setGroupList([...groupList]);

          const lists = selectedGroups.filter((x: any) => {
            return x._id !== value?._id;
          });
          setSelectedGroups([...lists]);
          Toast('Group deleted successfully', SUCCESS_TOAST);
          setSuitesDrawerWindow(false);
          setIsProjectLoading(false);
          // setSelectedGroups([]);
          setNewlyAddedGroupList([]);
        }
        history.push('/projects');
      })
      .catch((err) => {
        Toast(err?.response?.data?.message, ERROR_TOAST);
        setIsProjectLoading(false);
        // setSelectedGroups([]);
        setNewlyAddedGroupList([]);
      });
  };
  const searchGroupFilterByName = (e: any): any => {
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
  return (
    <div className="add-rule-model right-120 ">
      <Drawer
        open={suitesDrawerWindow}
        anchor="right"
        className="drawer EditSuites add-project add-suite-drawer"
      >
        <div className="drawer__header">
          <div className="drawer__header__title">Add/Remove Suites</div>
          <IconButton
            className="btn-icon xxsm bg-nc-7 text-nc-3 hover:bg-nc-7 hover:text-nc-1"
            onClick={() => {
              setSuitesDrawerWindow(false);
            }}
          >
            <span className="dq-icon-close text-10" />
          </IconButton>
        </div>
        <div className="drawer__body block">
          <div className="datatable">
            <div className="dashboard-right">
              <div className="left filter search-drawer">
                <div className="right global-search">
                  <div className="search-box">
                    <span className="dq-icon-search" />
                    <TextField
                      className="search"
                      id="standard-basic"
                      label="Search"
                      placeholder="Search Suites by name,tags"
                      variant="standard"
                      InputLabelProps={{
                        shrink: true
                      }}
                      onKeyUp={(e) => searchGroupFilterByName(e)}
                      // onKeyUp={(e) => searchGroupFilterByName(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <Pagination
              count={groupsListData?.data?.pagination?.count}
              page={groupsListData?.data?.pagination?.page - 1}
              rowsPerPage={groupsListData?.data?.pagination?.per_page}
              // handleChangePage={handleChangePage}
              // handleChangeRowsPerPage={handleChangeRowsPerPage}
            /> */}
            {/* <div
            className={
              onExpand ? 'checkbox-list px-20 py-10 collapse' : 'checkbox-list px-20 py-10'
            }
           >
              {groupList?.map((row: any, i: any) => (
                <FormControlLabel
                  key={i}
                  className="checkbox"
                  control={
                    <Checkbox
                      checked={row?.isChecked}
                      icon={<span className="unCheckedIcon" />}
                      checkedIcon={<span className="checkedIcon" />}
                      onChange={(e) => onAddGroup(e, row)}
                    />
                  }
                  label={row.name}
                />
              ))}
            </div> */}
            <div
              className={
                onExpand
                  ? 'checkbox-list px-10 py-10 collapse'
                  : 'checkbox-list px-10 py-10'
              }
            >
              <div className="datatable">
                <TableContainer className="scroll-table-data add-suite-datatable">
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    {newGroupList?.map((row: any, i: any) => (
                      <TableBody>
                        {/* {isLoading ? (
              <></>
            ) : (
              <> */}

                        {/* Loop here */}
                        <TableRow
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 }
                          }}
                        >
                          <TableCell scope="row" width="25px">
                            <FormControlLabel
                              className="checkbox"
                              control={
                                <Checkbox
                                  checked={row?.isChecked}
                                  icon={<span className="unCheckedIcon" />}
                                  checkedIcon={<span className="checkedIcon" />}
                                  onChange={(e) => onAddGroup(e, row)}
                                />
                              }
                              label=""
                            />
                          </TableCell>
                          <TableCell scope="row">
                            <p className="elepsis-title cursor-pointer font-barlow font-extra-bold text-nc-3 text-16 inline">
                              {row.name}
                            </p>
                            <br />
                            <span className="elepsis-des font-roboto font-normal text-nc-4 text-14">
                              {row.description}
                            </span>
                          </TableCell>
                          <TableCell>
                            {row?.tags?.length > 0 && (
                              <>
                                <Chip
                                  // key={index}
                                  className="chip round nc-5"
                                  label={row?.tags?.length > 0 && row?.tags[0]}
                                />
                                {row?.tags?.length > 1 && (
                                  <Chip
                                    // key={index}
                                    className="chip round nc-5"
                                    label={`+${row?.tags?.length - 1}`}
                                  />
                                )}
                              </>
                            )}
                          </TableCell>
                        </TableRow>
                        {/* Loop here */}
                      </TableBody>
                    ))}
                  </Table>
                </TableContainer>
              </div>
            </div>
            <Pagination
              count={groupsListData?.data?.pagination?.count}
              page={groupsListData?.data?.pagination?.page - 1}
              rowsPerPage={groupsListData?.data?.pagination?.per_page}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <div
              className={
                onExpand ? 'selected-suites expand' : 'selected-suites'
              }
            >
              <div className="selected-rule">
                <div className="block-design">
                  <p>
                    Added Suites (
                    {selectedGroups?.length + newlyAddedGroupList.length})
                  </p>
                  {newlyAddedGroupList.map((data: any, index: number) => (
                    <Chip
                      key={index}
                      className="chip round tc-1"
                      label={data.name}
                      onDelete={() => onremoveSelectedGroup(data)}
                      deleteIcon={
                        <IconButton className="btn-icon xxsm bg-ex-1 text-nc-5 hover:bg-ex-1 hover:text-nc-1">
                          <span className="dq-icon-close" />
                        </IconButton>
                      }
                    />
                  ))}
                  {selectedGroups.map((data: any, index: number) => (
                    <Chip
                      key={index}
                      className="chip round tc-1"
                      label={data.name}
                      onDelete={() => onremoveSelectedGroupAPI(data)}
                      deleteIcon={
                        <IconButton className="btn-icon xxsm bg-ex-1 text-nc-5 hover:bg-ex-1 hover:text-nc-1">
                          <span className="dq-icon-close" />
                        </IconButton>
                      }
                    />
                  ))}
                  <div className="expand-collpase-arrow">
                    <IconButton
                      className="btn-icon icon sm"
                      onClick={onExpand ? onshowLess : onshowMore}
                    >
                      {onExpand ? (
                        <span className="dq-icon-down_cheveron" />
                      ) : (
                        <span className="dq-icon-up_cheveron" />
                      )}
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="MuiDialogActions-root footer">
          <Button
            variant="contained"
            className="btn btn-pc-1"
            onClick={onSaveGroupsToProjet}
            // onClick={(event) => (window.location.href = '/project/nogroup')}
          >
            Save
          </Button>
          <Button
            variant="contained"
            className="btn btn-sc sc-2 text-14"
            onClick={() => onCancelProject()}
          >
            Cancel
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default EditSuites;
