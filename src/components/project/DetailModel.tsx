/* eslint-disable */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';

const DetailModel: React.FC = () => {
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const [modalWindow, setModalWindow] = React.useState(false);

  return (
    <div className="model">
      <p
        onClick={() => {
          setModalWindow(true);
        }}
        className="cursor-pointer font-barlow font-extra-bold text-nc-3 text-16 inline"
      >
        geo_location_group
      </p>
      <Dialog maxWidth={false} className="dialog md" open={modalWindow}>
        <DialogTitle disableTypography>
          <span className="dialog-title">Suites Detail</span>
          <IconButton
            className="btn-icon xxsm bg-nc-7 text-nc-4 hover:bg-nc-7 hover:text-nc-1"
            onClick={() => {
              setModalWindow(false);
            }}
          >
            <span className="dq-icon-close" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <p className="font-barlow font-extra-bold text-nc-1 text-16">
            geo_location_group
          </p>
          <div className="seprater-line" />
          <span className="label">Decription</span>
          <p className="font-roboto font-normal text-nc-1 text-14">
            This group will compute the pairwise haversine distance between each
            (latitude, longitude) pair
          </p>
          <div className="seprater-line" />
          <span className="label">Tags (2)</span>
          <div className="block">
            {['CRM', 'Customer'].map((data: any, index: number) => (
              <Chip key={index} className="chip round nc-4" label={data} />
            ))}
          </div>
          <div className="seprater-line" />
          <span className="label">Applied Rules(2)</span>
          <div className="block">
            <p className="font-barlow font-extra-bold text-nc-3 text-14">
              1. column_average_lat_lon_pairwise_distance_to_be_less_than
            </p>
            <span className="font-roboto font-normal text-nc-4 text-12">
              This expectation will compute the pairwise haversine distance
              between each (latitude, longitude) pair
            </span>
            <div className="applied-rules">
              <div className="col">
                <p>Column*</p>
                <span>geo_region_US</span>
              </div>
              <div className="col">
                <p>max_distance*</p>
                <span>100</span>
              </div>
              <div className="col">
                <p>Severity*</p>
                <span>high</span>
              </div>
            </div>
            <div className="seprater-line" />
            <p className="font-barlow font-extra-bold text-nc-3 text-14">
              2. column_values_to_be_between
            </p>
            <span className="font-roboto font-normal text-nc-4 text-12">
              Expect column entries to be between a minimum value and a maximum
              value (inclusive).
            </span>
            <div className="applied-rules">
              <div className="col">
                <p>Column*</p>
                <span>Zipcode</span>
              </div>
              <div className="col">
                <p>Min. Value*</p>
                <span>10000</span>
              </div>
              <div className="col">
                <p>Max. Value*</p>
                <span>60000</span>
              </div>
              <div className="col">
                <p>Radius</p>
                <span>100</span>
              </div>
              <div className="col">
                <p>Except</p>
                <span></span>
              </div>
              <div className="col">
                <p>Severity*</p>
                <span>Low</span>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions disableSpacing className="footer">
          <div className="vertical-sepreter-line">
            <span className="label">User</span>
            <div className="flex">
              <img src={'/assests/images/user.png'} />
              <p>Joey Bishop</p>
            </div>
          </div>
          <div className="block">
            <span className="label pl-4">Status</span>
            {['CRM Customer Data'].map((data: any, index: number) => (
              <Chip key={index} className="chip round nc-5 flex" label={data} />
            ))}
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DetailModel;
