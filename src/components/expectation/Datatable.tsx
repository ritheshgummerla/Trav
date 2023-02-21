/* eslint-disable */
import React, { useEffect, useContext } from 'react';
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
import { ProjectContext } from '../../context/project/ProjectContext';

const Datatable: React.FC = () => {
  const { rulesData } =
    useContext(ProjectContext);
  useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);

  const [modalWindow, setModalWindow] = React.useState<boolean>(false);
  const [viewRuleDetails, setViewRuleDetails] = React.useState();
  const onViewRule = (event: any, rowData: any): any => {
    event.stopPropagation();
    setViewRuleDetails(rowData);
    setAnchorEl(null);
    setModalWindow(true);
    setDrawerWindow(true);
  };

  const [drawerWindow, setDrawerWindow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClose = () => {
    setModalWindow(false);
  };

  return (
    <div className="datatable">
      <TableContainer className="scroll-table-data">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {/* {isLoading ? (
              <></>
            ) : (
              <> */}
            {rulesData !== undefined &&
              rulesData.length > 0 &&
              rulesData?.map((row: any) => (
                <TableRow
                  key={row?.owner}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell scope="row"><p
                      onClick={(e) => onViewRule(e, row)}
                      className="elepsis-title cursor-pointer font-barlow font-extra-bold text-nc-3 text-16 inline"
                    >
                      {row?.rule}
                    </p>
                    <br />
                    <span className="elepsis-des font-roboto font-normal text-nc-4 text-14">
                      {row.description}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="font-roboto font-normal text-nc-4 text-12 pb-4 block">
                      Owner
                    </span>
                    <BadgeProfile size="sm" alt={row.owner} />
                  </TableCell>
                  <TableCell>
                    <span className="font-roboto font-normal text-nc-4 text-12 pb-4 block">
                      Category
                    </span>
                    <p className="font-roboto font-extra-bold pt-6 text-nc-1 text-14">
                      {row.category}
                    </p>
                  </TableCell>
                  <TableCell>
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
                    <span className="font-roboto font-normal text-nc-4 text-12 pb-4 block">
                      Backend Support
                    </span>
                    {row.supported_backends?.length > 0 && (
                      <>
                        <Chip
                          // key={index}
                          className="chip round nc-5"
                          label={
                            row.supported_backends?.length > 0 &&
                            row.supported_backends[0]
                          }
                        />
                        {row.supported_backends?.length > 1 && (
                          <Chip
                            // key={index}
                            className="chip round nc-5"
                            label={`+${row.supported_backends?.length - 1}`}
                          />
                        )}
                      </>
                    )}
                  </TableCell>
                  <TableCell width={125}>
                    <span className="font-roboto font-normal text-nc-4 text-12 pb-4 block">
                      Status
                    </span>
                    {['Production'].map((data: any, index: number) => (
                      <Chip
                        key={index}
                        className="chip round tc-2"
                        label={data}
                      />
                    ))}
                    {/* {row.status} */}
                  </TableCell>
                  <TableCell>
                    <div className="action">
                      <ThreeDotsMenu
                        onViewRule={onViewRule}
                        handleClose={handleClose}
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
        rowData={viewRuleDetails}
      />
    </div>
  );
};

interface Props {
  data: any;
  onViewRule: any;
  handleClose: any;
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
        <MenuItem onClick={(e) => props.onViewRule(e, data)}>
          View Expectation
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default Datatable;
