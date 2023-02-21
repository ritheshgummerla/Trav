/* eslint-disable */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Drawer from '@material-ui/core/Drawer';

interface Props {
  modalWindow: any;
  handleClose: any;
  row: any;
}

const DetailDrawer = (props: Props): any => {
  // React.useEffect(() => {
  //   document.body.classList.remove('full-page');
  //   document.body.classList.remove('branding-drawer-open');
  // }, []);

  return (
    <div>
      <Drawer
        open={props.modalWindow}
        anchor="right"
        className="drawer custom-drawer"
      >
        <div className="dialog">
          <div className="MuiDialogContent-root">
            <div className="drawer__header">
              <div className="drawer__header__title">Suite Detail</div>
              <IconButton
                className="btn-icon xxsm bg-nc-7 text-nc-3 hover:bg-nc-7 hover:text-nc-1"
                onClick={(e) => {
                  props.handleClose(e);
                }}
              >
                <span className="dq-icon-close text-10" />
              </IconButton>
            </div>
            <div className="drawer__body">
              <div className="model">
                <div className="model-body">
                  <p className="font-barlow font-extra-bold text-nc-1 text-16">
                    {props?.row?.name}
                  </p>
                  <div className="seprater-line" />
                  <span className="label">Decription</span>
                  <p className="font-roboto font-normal text-nc-1 text-14">
                    {props?.row?.description}
                  </p>
                  <div className="seprater-line" />
                  <span className="label">
                    Tags ({props?.row?.tags?.length})
                  </span>
                  <div className="block">
                    {props?.row?.tags?.map((data: any, index: number) => (
                      <Chip
                        key={index}
                        className="chip round nc-4"
                        label={data}
                      />
                    ))}
                  </div>
                  <div className="seprater-line" />
                  <span className="label">
                    Applied Rules({props?.row?.rules?.length})
                  </span>

                  {props?.row?.rules?.map((data: any, index: number) => (
                    <div className="block">
                      <p className="font-barlow font-extra-bold text-nc-3 text-14">
                        {index + 1}. {data.rule}
                      </p>
                      <span className="font-roboto font-normal text-nc-4 text-12">
                        {data.description}
                      </span>
                      <div className="applied-rules">
                        {Object.keys(data?.args)?.map(
                          (param: any, i: number) => {
                            return (
                              <div className="w-180">
                                <div className="col">
                                  <p>{`${param}$`}</p>
                                  <span>{data?.args[param]?.toString()}</span>
                                </div>
                              </div>
                            );
                          }
                        )}
                        {/* <div className="col">
                          <p>Column*</p>
                          <span>geo_region_US</span>
                        </div>
                        <div className="col">
                          <p>max_distance*</p>
                          <span>100</span>
                        </div>
                        <div className="col">
                          <p>Severity*</p>
                          <span>{data.severity}</span>
                        </div> */}
                      </div>
                      <div className="seprater-line" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="footer MuiDialogActions-root">
              <div className="vertical-sepreter-line">
                <span className="label">User</span>
                <div className="flex">
                  <img src={'/assests/images/user.png'} />
                  <p>{props?.row?.owner}</p>
                </div>
              </div>
              <div className="block">
                <span className="label pl-4">Used in Projects</span>
                <div className="block">
                  {props?.row?.project_count}
                  {/* {props?.row?.rules?[0]?.tags?.map(
                    (data: any, index: number) => (
                      <Chip
                        key={index}
                        className="chip round nc-4"
                        label={data}
                      />
                    )
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DetailDrawer;
