/* eslint-disable */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Drawer from '@material-ui/core/Drawer';
interface Props {
  modalWindow: any;
  handleClose: any;
  rowData: any;
}
const DetailModel = (props: Props): any => {
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);

  return (
    <div>
      {/* Notification Sider Start */}
      <Drawer
        open={props.modalWindow}
        anchor="right"
        className="drawer custom-drawer"
      >
        <div className="dialog">
          <div className="MuiDialogContent-root">
            <div className="drawer__header">
              <div className="drawer__header__title">Expectation Detail</div>
              <IconButton
                className="btn-icon xxsm bg-nc-7 text-nc-3 hover:bg-nc-7 hover:text-nc-1"
                onClick={() => {
                  props.handleClose();
                }}
              >
                <span className="dq-icon-close text-10" />
              </IconButton>
            </div>
            <div className="drawer__body">
              <div className="model">
                <div className="model-body">
                  <p className="font-barlow font-extra-bold text-nc-1 text-16">
                    {props.rowData?.rule}
                  </p>
                  <div className="seprater-line" />
                  <span className="label">Decription</span>
                  <p className="font-roboto font-normal text-nc-1 text-14">
                    {props.rowData?.description}
                  </p>
                  <div className="seprater-line" />
                  <span className="label">Tags ({props.rowData?.tags?.length})</span>
                  <div className="block">
                    {props.rowData?.tags?.map((data: any, index: number) => (
                      <Chip
                        key={index}
                        className="chip round nc-4"
                        label={data}
                      />
                    ))}
                  </div>
                  <div className="seprater-line" />
                  <span className="label">
                    Backend Support ({props.rowData?.supported_backends?.length}
                    )
                  </span>
                  <div className="block">
                    {props.rowData?.supported_backends?.map(
                      (data: any, index: number) => (
                        <Chip
                          key={index}
                          className="chip round nc-4"
                          label={data}
                        />
                      )
                    )}
                  </div>
                  <div className="seprater-line" />
                  <span className="label">
                    Parameters ({props.rowData?.args?.length})
                  </span>
                  <div>
                    <TableContainer className="shadow-none">
                      <Table
                        className="small-table"
                        sx={{ minWidth: '100%' }}
                        size="small"
                        aria-label="dense table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Mandatory</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {props.rowData?.args?.map((row: any) => (
                            <TableRow
                              key={row.rule}
                              sx={{
                                '&:last-child td, &:last-child th': {
                                  border: 0
                                }
                              }}
                            >
                              <TableCell>{row.name}</TableCell>
                              <TableCell>{row.type}</TableCell>
                              <TableCell>{row.description}</TableCell>
                              <TableCell>
                                <span className="text-tc-2">
                                  {row.mandatory}
                                </span>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
                <div className="footer MuiDialogActions-root">
                  <div className="vertical-sepreter-line">
                    <span className="label">User</span>
                    <div className="flex">
                      <img src={'/assests/images/user.png'} />
                      <p>{props?.rowData?.owner}</p>
                    </div>
                  </div>
                  <div className="block">
                    <span className="label pl-4">Status</span>
                    <Chip
                      className="chip round tc-2 flex"
                      label={props.rowData?.status}
                    />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DetailModel;
