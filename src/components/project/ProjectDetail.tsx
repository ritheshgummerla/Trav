/* eslint-disable */
import React, { useEffect, useContext } from 'react';
import { ProjectContext } from '../../context/project/ProjectContext';

const ProjectDashboardDetail: React.FC = () => {
  const { isActiveProjectTab, groupList, lastExecutedRuns } =
    useContext(ProjectContext);

  return (
    <div>
      <div className="grid justify-between items-center pl-20">
        <p className="font-extra-bold text-nc-3 text-18">
          {isActiveProjectTab?.name}
        </p>
        <p className="font-normal text-nc-3 text-12 pb-10">
          {isActiveProjectTab?.description}
        </p>
        {/* <span className='dq-icon-close text-10 text-nc-4 :hover:text-sc-1 cursor-pointer'></span> */}
      </div>
      <div className="grid grid-cols-3 gap-20 pl-20">
        <div className="flex border border-nc-5 bg-nc-6 rounded-4 p-10 justify-between items-center h-[90px]">
          <div className="left">
            <p className="text-14 font-roboto font-normal text-nc-1">
              Total DQ Score
            </p>
            <span className="text-32 font-roboto font-extra-bold text-nc-1">
              {lastExecutedRuns?.total_dq_score?.toFixed(2) || '-'}
            </span>
          </div>
          {/* <div className="right">Chart</div> */}
        </div>
        <div className="flex border border-nc-5 bg-nc-6 rounded-4 p-10 justify-between items-center h-[90px]">
          <div className="left">
            <p className="text-14 font-roboto font-normal text-nc-1">
              Total Records
            </p>
            <span className="text-32 font-roboto font-extra-bold text-nc-1">
              {lastExecutedRuns?.total_record || '-'}
            </span>
          </div>
          <div className="right">
            <div className="flex gap-20">
              <div>
                <p className="text-14 font-roboto font-normal text-nc-1">
                  Failed
                </p>
                <span className="text-18  font-roboto font-extra-bold text-tc-4">
                  {lastExecutedRuns?.failed_record || '-'}
                </span>
                <span className="text-12 font-roboto font-bold text-nc-1 block">
                  {/* 6.8% */}
                </span>
              </div>
              <div>
                <p className="text-14 font-roboto font-normal text-nc-1">
                  Success
                </p>
                <span className="text-18  font-roboto font-extra-bold text-tc-2">
                  {lastExecutedRuns?.pass_record || '-'}
                </span>
                <span className="text-12 font-roboto font-bold text-nc-1 block">
                  {/* 94.2% */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboardDetail;
