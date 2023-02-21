/* eslint-disable */
import React, { useState } from 'react';
import { SYSTEM_CONSTANTS } from '../common/constants/index';
import BadgeProfile from '../components/BadgeProfile';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Popover from '@material-ui/core/Popover';
import Drawer from '@material-ui/core/Drawer';
// import { a } from 'react-router-dom';

// const [salesManagerRefEl, setSalesManagerRefEl] =
// React.useState<HTMLButtonElement | null>(null);
// const salesManagerOpen = Boolean(salesManagerRefEl);

function Header() {
  const [drawerWindow, setDrawerWindow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className="header">
      <div className="left">
        <a href="/">
        <img className="float-left" src={'/assests/ADQT_logo.svg'} />
        </a>
        <span className="middle-line"></span>
        <ul className="navbar">
          <li>
            <a
              style={{
                backgroundColor:
                  window.location.pathname === '/projects' ? '#eaeef9' : ''
              }}
              href="/projects"
            >
              <span className="dq-icon-projects" />
              Projects
            </a>
          </li>
          <li>
            <a
              href="/suites"
              style={{
                backgroundColor:
                  window.location.pathname === '/suites' ||
                  window.location.pathname === '/creategroup'
                    ? '#eaeef9'
                    : ''
              }}
            >
              <span className="dq-icon-suites" />
              Suites
            </a>
          </li>
          <li>
            <a
              href="/expectations"
              style={{
                backgroundColor:
                  window.location.pathname === '/expectations' ? '#eaeef9' : ''
              }}
            >
              <span className="dq-icon-expectations" />
              Expectations
            </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="mr-12">
          <IconButton className="btn-icon icon lg">
            <span className="dq-icon-help"></span>
          </IconButton>
        </div>
        <span className="middle-line"></span>
        <div className="mr-12">
          <IconButton
            className="btn-icon icon lg"
            onClick={() => setDrawerWindow(true)}
          >
            <span className="dq-icon-notification"></span>
            <span className="badge-number">+9</span>
          </IconButton>
        </div>
        <IconButton
          className="p-0 profile"
          // onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          //   setSalesManagerRefEl(event.currentTarget);
          // }}
          onClick={handleClick}
        >
          <BadgeProfile size="md" alt="Jaimin Patel" />
        </IconButton>
        {/* Profile Popover Start */}
        <Popover
          className="popover"
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <div style={{ width: 260 }}>
            <div className="px-16 py-20 shadow-sm border-b border-nc-6">
              <div className="text-14 text-pc-1 font-barlow font-extra-bold">
                Anblicks
              </div>
              <div className="text-14 text-nc-3 font-roboto font-normal">
                Business User
              </div>
            </div>
            <div className="flex p-16">
              <Link
                underline="none"
                component="button"
                className="btn-link btn-link-tc-1 text-12"
              >
                <span className="dq-icon-change_password mr-6 text-14" />
                Change Password
              </Link>
              <span className="flex-1" />
              <IconButton className="btn-icon sm square btn-pc-1">
                <span className="dq-icon-logout" />
              </IconButton>
            </div>
          </div>
        </Popover>
        {/* Profile Popover End */}
      </div>
      {/* Notification Sider Start */}
      <Drawer open={drawerWindow} anchor="right" className="drawer">
        <div className="drawer__header">
          <div className="drawer__header__title">Notifications</div>
          <IconButton
            className="btn-icon xxsm bg-nc-7 text-nc-3 hover:bg-nc-7 hover:text-nc-1"
            onClick={() => {
              setDrawerWindow(false);
            }}
          >
            <span className="dq-icon-close text-10" />
          </IconButton>
        </div>
        <div className="drawer__body">
          <div>
            <div className="notification">
              <div className="repeate-loop">
                <div className="image">
                  <img
                    src={SYSTEM_CONSTANTS.BASE_URL + '/assests/images/user.png'}
                  />
                </div>
                <div className="notification-body">
                  <p>
                    <b>Richard L.</b>change Rule Request
                  </p>
                  <span className="text-sc-1 text-12">
                    column_average_lat_lon_pairwise_ distance_to_be_less_than
                    status to
                  </span>
                  <p className="font-extra-bold">InProgress</p>
                  <span className="text-10  text-nc-4">
                    19 Sep 2022 4:00 PM{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
      {/* Notification Sider End */}
    </div>
  );
}

export default Header;
