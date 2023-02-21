/* eslint-disable */
import React, { useEffect, useContext } from 'react';
import useViewport from '../../hooks/useViewport';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useHistory } from 'react-router';
import { last20ExecutedRuns } from '../../common/services/projectServices';
import { ProjectContext } from '../../context/project/ProjectContext';
import { useGroupList } from '../../hooks/useGroupList';
import Toast, { ERROR_TOAST } from '../../components/layouts/Toast';
import ExecutedData from './ExecutedData';

const Datatable: React.FC = () => {
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);

  const history = useHistory();
  const {
    isActiveProjectTab,
    setAddrulePayload,
    addRulePayload,
    setIsEditGroup,
    setIsProjectLoading,
    setGroupList,
    groupList,
    setGroupsUnderProject,
    setSelectedGroups,
    lastExecutedRuns,
    setLastExecutedRuns
  } = useContext(ProjectContext);
  const [deleteGroup, setDeleteGroup] = React.useState({
    groupName: '',
    projectId: null
  });

  const [currentPageDetails, setCurrentPageDetails] = React.useState({
    project_id: isActiveProjectTab?._id
  });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const totalScore = {
    totalDQScore: '50.4%',
    totalRecords: '40.7k',
    failed: '2.4k',
    success: '34.7k'
  };
  return (
    <div className="datatable">
      <div className="dashboard-right">
        <div className="left">
          <p className="font-extra-bold text-nc-1 text-18">
            Last 10 Executed Runs
          </p>
        </div>
        <div className="right">
          <ExecutedData />
        </div>
      </div>
      <div className="table-20-record projectdashboard ">
        <TableContainer className="shadow-none dashboard-table">
          <Table
            className="small-table"
            sx={{ minWidth: '100%' }}
            size="small"
            aria-label="dense table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell width="200">Suite</TableCell>
                <TableCell>Run Name</TableCell>
                <TableCell>Checkpoint</TableCell>
                <TableCell>Success</TableCell>
                <TableCell>Failed</TableCell>
                <TableCell>DQ Score</TableCell>
                <TableCell>Run Date</TableCell>
                {/* <TableCell></TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {lastExecutedRuns?.dashboard === undefined && 'No Data Found'} 
              {lastExecutedRuns?.dashboard !== undefined &&
                lastExecutedRuns?.dashboard?.length > 0 &&
                lastExecutedRuns?.dashboard?.map((row: any) => (
                  <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell scope="row">{row?.suite}</TableCell>
                    <TableCell>{row?.runName}</TableCell>
                    <TableCell>{row?.checkPoint}</TableCell>
                    <TableCell>
                      <b className="text-tc-2">{row?.sucess}</b>
                    </TableCell>
                    <TableCell>
                      <b className="text-tc-4">{row?.failed}</b>
                    </TableCell>
                    <TableCell>{row?.DQ_score}</TableCell>
                    <TableCell>{row.run_date}</TableCell>
                    {/* <TableCell>
                      <span className="dq-icon-expectations"></span>
                    </TableCell> */}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Datatable;
