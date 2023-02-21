/* eslint-disable */
import React, { useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import BadgeProfile from '../../components/BadgeProfile';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DetailDrawer from './DetailDrawer';
import { useHistory, useLocation } from 'react-router-dom';
import { ProjectContext } from '../../context/project/ProjectContext';
import DeleteSuite from '../project/DeleteSuite';
import { deleteGroup } from '../../common/services/groupServices';
const Datatable: React.FC = () => {
  const {
    groupList,
    setGroupList,
    setIsEditGroup,
    setOpenDeleteModal,
    setIsProjectLoading,
    setAddrulePayload
  } = useContext(ProjectContext);
  useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);

  const history = useHistory();
  const [modalWindow, setModalWindow] = React.useState<boolean>(false);
  const [viewGroupDetails, setviewGroupDetails] = React.useState();
  const [deleteRecord, setDeleteRecord] = React.useState<any>();
  const [anchorEvent, setAnchorEvent] = React.useState<null | HTMLElement>(
    null
  );
  const onViewGroup = (event: any, row: any): any => {
    event.stopPropagation();
    setviewGroupDetails(row);
    setAnchorEvent(null);
    setModalWindow(true);
  };
  const menuClose = () => {
    setAnchorEvent(null);
  };
  const open = Boolean(anchorEvent);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEvent(event.currentTarget);
  };
  const handleClose = (event: any) => {
    event.stopPropagation();
    setAnchorEvent(null);
    setModalWindow(false);
  };
  const deleteSuite = (event: any, data: any) => {
    event.stopPropagation();
    setDeleteRecord(data);
    setOpenDeleteModal(true);
  };
  const handleSuiteUpdate = (event: any, row: any) => {
    event.stopPropagation();
    setAddrulePayload({
      rules: []
    });
    setAnchorEvent(null);
    setIsEditGroup(true);
    history.push({ pathname: '/createsuite/addrules', state: row });
  };
  const onclickYes = () => {
    const payload = {
      groupId: deleteRecord._id
    };
    setIsProjectLoading(true);
    const result = deleteGroup(payload);
    result
      .then((response) => {
        setOpenDeleteModal(false);
        if (response) {
          const lists = groupList.filter((x: any) => {
            // setSuccessMsg(response.status);
            setIsProjectLoading(false);
            return x.name !== response?.name;
          });
          setOpenDeleteModal(false);
          setGroupList([...lists]);
          // setIsActiveProjectTab(lists[0]);
        }
      })
      .catch((err) => {
        // setErrorMsg(err?.response?.data?.error);
        setOpenDeleteModal(false);
        setIsProjectLoading(false);
      });
  };

  return (
    <div className="datatable">
      <TableContainer className="scroll-table-data">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {groupList?.map((row: any) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell scope="row" width={600}>
                  {/* <span className="dq-icon-down_cheveron text-nc-4 p-4 relative top-1 cursor-pointer"></span> */}
                  <p
                    onClick={(e) => onViewGroup(e, row)}
                    className="elepsis-title cursor-pointer font-barlow font-extra-bold text-nc-3 text-16 inline"
                  >
                    {row?.name}
                  </p>
                  <br />
                  <span className="elepsis-des font-roboto font-normal text-nc-4 text-14">
                    {row?.description}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="font-roboto font-normal text-nc-4 text-12 pb-4 block">
                    User
                  </span>
                  <BadgeProfile size="sm" alt={row?.owner} />
                </TableCell>
                <TableCell>
                  <span className="font-roboto font-normal text-nc-4 text-12 pb-4 block">
                    Used inProjects
                  </span>
                  <Chip
                    className="chip round nc-5"
                    label={row?.project_count}
                  />
                </TableCell>
                <TableCell>
                  <span className="font-roboto font-normal text-nc-4 text-12 pb-4 block">
                    Applied Rules
                  </span>
                  {row?.rules?.length > 0 && (
                    <>
                      <Chip
                        // key={index}
                        className="chip round nc-5"
                        label={row?.rules?.length > 0 && row?.rules[0]?.rule}
                      />
                      {row?.rules?.length > 1 && (
                        <Chip
                          // key={index}
                          className="chip round nc-5"
                          label={`+${row?.rules?.length - 1}`}
                        />
                      )}
                    </>
                  )}
                </TableCell>
                <TableCell width="200">
                  <span className="font-roboto font-normal text-nc-4 text-12 pb-4 block">
                    Tags
                  </span>
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
                <TableCell>
                  <div className="action">
                    <ThreeDotsMenu
                      onViewGroup={onViewGroup}
                      handleClose={handleClose}
                      deleteSuite={deleteSuite}
                      handleSuiteUpdate={handleSuiteUpdate}
                      data={row}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DetailDrawer
        modalWindow={modalWindow}
        handleClose={handleClose}
        row={viewGroupDetails}
      />

      <DeleteSuite onclickYes={onclickYes} />
    </div>
  );
};
interface Props {
  data: any;
  onViewGroup: any;
  handleClose: any;
  deleteSuite: any;
  handleSuiteUpdate: any;
}

const ThreeDotsMenu = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data } = props;
  return (
    <React.Fragment>
      <IconButton
        className="btn-icon sm square "
        id="basic-button"
        onClick={handleClick}
      >
        <span className="dq-icon-menu_dots" />
      </IconButton>
      <Menu
        id="card-actions-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={(e) => props.onViewGroup(e, data)}>
          View Suite
        </MenuItem>
        {/* <MenuItem onClick={(e) => props.handleClose(e)}>
          Duplicate Suite
        </MenuItem> */}
        <MenuItem onClick={(e) => props.handleSuiteUpdate(e, data)}>
          Update Suite
        </MenuItem>
        <MenuItem onClick={(e) => props.deleteSuite(e, data)}>
          Delete Suite
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default Datatable;
