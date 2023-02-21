/* eslint-disable */
import React from 'react';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import { SYSTEM_CONSTANTS } from '../common/constants/index';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Menu from '@mui/material/Menu';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import BadgeProfile from '../components/BadgeProfile';
import Header from '../components/Header';
// import Autocomplete from '@material-ui/lab/Autocomplete';

function Boilerplate() {
  const [drawerWindow, setDrawerWindow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [modalWindow, setModalWindow] = React.useState(false);
  return (
    <div className="boilerplate-page branding-style">
      <h1 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Page URL List:
      </h1>
      <div className="grid">
        <b>Rule Module</b>
        <a href="http://localhost:3001/expectations" target="_blank">
          http://localhost:3001/expectations
        </a>

        <b>Group Module</b>
        <a href="http://localhost:3001/suites" target="_blank">
          http://localhost:3001/suites
        </a>

        <b>Project Module</b>
        <b>No Project Screen</b>
        <a href="http://localhost:3001/projectblank" target="_blank">
          http://localhost:3001/projectblank
        </a>

        <b>No Group Screen</b>
        <a href="http://localhost:3001/project/nogroup" target="_blank">
          http://localhost:3001/project/nogroup
        </a>

        <b>Create Group</b>
        <a href="http://localhost:3001/projects/creategroup" target="_blank">
          http://localhost:3001/projects/creategroup
        </a>

        <b>Rule Edit Screen</b>
        <a
          href="http://localhost:3001/projects/creategroup/rulelist"
          target="_blank"
        >
          http://localhost:3001/projects/creategroup/rulelist
        </a>

        <b>Project Main Screen</b>
        <a href="http://localhost:3001/projects" target="_blank">
          http://localhost:3001/projects
        </a>
      </div>
      <h1 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Font Icons
      </h1>
      <div className="flex flex-wrap gap-10 text-center">
        <div className="dq-icon-add">
          <div>dq-icon-add</div>
        </div>
        <div className="dq-icon-add_rules">
          <div>dq-icon-add_rules</div>
        </div>
        <div className="dq-icon-back_arrow">
          <div>dq-icon-back_arrow</div>
        </div>
        <div className="dq-icon-change_password">
          <div>dq-icon-change_password</div>
        </div>
        <div className="dq-icon-close">
          <div>dq-icon-close</div>
        </div>
        <div className="dq-icon-dashboard">
          <div>dq-icon-dashboard</div>
        </div>
        <div className="dq-icon-down_cheveron">
          <div>dq-icon-down_cheveron</div>
        </div>
        <div className="dq-icon-duplicate">
          <div>dq-icon-duplicate</div>
        </div>
        <div className="dq-icon-expectations">
          <div>dq-icon-expectations</div>
        </div>
        <div className="dq-icon-help">
          <div>dq-icon-help</div>
        </div>
        <div className="dq-icon-info">
          <div>dq-icon-info</div>
        </div>
        <div className="dq-icon-logout">
          <div>dq-icon-logout</div>
        </div>
        <div className="dq-icon-mandatory_off">
          <div>dq-icon-mandatory_off</div>
        </div>
        <div className="dq-icon-mandatory_on">
          <div>dq-icon-mandatory_on</div>
        </div>
        <div className="dq-icon-menu_dots">
          <div>dq-icon-menu_dots</div>
        </div>
        <div className="dq-icon-notification">
          <div>dq-icon-notification</div>
        </div>
        <div className="dq-icon-password">
          <div>dq-icon-password</div>
        </div>
        <div className="dq-icon-projects">
          <div>dq-icon-projects</div>
        </div>
        <div className="dq-icon-search">
          <div>dq-icon-search</div>
        </div>
        <div className="dq-icon-suites">
          <div>dq-icon-suites</div>
        </div>
        <div className="dq-icon-text_delete">
          <div>dq-icon-text_delete</div>
        </div>
        <div className="dq-icon-up_cheveron">
          <div>dq-icon-up_cheveron</div>
        </div>
        <div className="dq-icon-username">
          <div>dq-icon-username</div>
        </div>
      </div>

      <h1 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Font Family - Font Weight
      </h1>
      <div className="grid grid-cols-3 gap-12">
        <div>
          <h1 className="font-barlow font-normal text-24">Barlow Normal</h1>
        </div>
        <div>
          <h1 className="font-barlow font-bold text-24">Barlow Medium</h1>
        </div>
        <div>
          <h1 className="font-barlow font-extra-bold text-24">Barlow Bold</h1>
        </div>
        <div>
          <h1 className="font-roboto font-normal text-24">ROBOTO</h1>
        </div>
        <div>
          <h1 className="font-roboto text-24"></h1>
        </div>
        <div>
          <h1 className="font-roboto font-extra-bold text-24">ROBOTO - bold</h1>
        </div>
      </div>

      <h1 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Font Sizes
      </h1>
      <h1 className="text-32 font-barlow font-extra-bold">
        FS - 32 : Lorem ipsum dolor sit amet
      </h1>
      <h2 className="text-28 font-barlow font-extra-bold">
        FS - 28 : Lorem ipsum dolor sit amet
      </h2>
      <h2 className="text-24 font-barlow font-extra-bold">
        FS - 24 : Lorem ipsum dolor sit amet
      </h2>
      <h3 className="text-18 font-barlow font-extra-bold">
        FS - 18 : Lorem ipsum dolor sit amet
      </h3>
      <h4 className="text-16 font-barlow font-extra-bold">
        FS - 16 : Lorem ipsum dolor sit amet
      </h4>
      <p className="text-14 font-barlow">
        FS - 14 : Lorem ipsum dolor sit amet
      </p>
      <p className="text-12 font-barlow">
        FS - 12 : Lorem ipsum dolor sit amet
      </p>
      <p className="text-10 font-barlow">
        FS - 10 : Lorem ipsum dolor sit amet
      </p>

      <h1 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Primary Button
      </h1>
      <Button variant="contained" className="btn btn-pc-1">
        Request New Rule
      </Button>

      <h1 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Secondary Button
      </h1>
      <Button variant="contained" className="btn btn-sc sc-1">
        Request New Rule
      </Button>
      <Button variant="contained" className="btn btn-sc sc-2">
        Cancel
      </Button>

      <h1 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Tertiary Button
      </h1>
      <Button variant="contained" className="btn btn-tc tc-1">
        Delete
      </Button>

      <h1 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Border Button
      </h1>
      <Button variant="outlined" className="btn btn-pc-1 btn-text-nc-1">
        Create New Group
      </Button>
      <Button variant="outlined" className="btn btn-sc-1">
        Create New Group
      </Button>

      <h1 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Full Width Button
      </h1>
      <Button
        fullWidth={true}
        variant="contained"
        color="primary"
        className="btn btn-pc-1 mb-20"
      >
        Full Width
      </Button>
      <h1 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Button Sizes
      </h1>
      <div className="block mb-20">
        <Button variant="contained" size="small" className="btn btn-pc-1">
          Request New Rule
        </Button>
        <Button
          variant="outlined"
          size="small"
          className="btn btn-pc-1 btn-text-nc-1"
        >
          Request New Rule
        </Button>
        <Button variant="contained" size="medium" className="btn btn-pc-1">
          Request New Rule
        </Button>
        <Button
          variant="outlined"
          size="medium"
          className="btn btn-pc-1 btn-text-nc-1"
        >
          Request New Rule
        </Button>
        <Button variant="contained" size="large" className="btn btn-pc-1">
          Request New Rule
        </Button>
        <Button
          variant="outlined"
          size="large"
          className="btn btn-pc-1 btn-text-nc-1"
        >
          Request New Rule
        </Button>
      </div>
      <div className="block">
        <Button variant="contained" size="small" className="btn btn-sc-1">
          Request New Rule
        </Button>
        <Button variant="outlined" size="small" className="btn btn-sc-1">
          Request New Rule
        </Button>
        <Button variant="contained" size="medium" className="btn btn-sc-1">
          Request New Rule
        </Button>
        <Button variant="outlined" size="medium" className="btn btn-sc-1">
          Request New Rule
        </Button>
        <Button variant="contained" size="large" className="btn btn-sc-1">
          Request New Rule
        </Button>
        <Button variant="outlined" size="large" className="btn btn-sc-1">
          Request New Rule
        </Button>
      </div>

      <h1 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Only Icon
      </h1>
      <IconButton className="btn-icon sm square  btn-pc-1">
        <span className="dq-icon-logout" />
      </IconButton>
      <IconButton className="btn-icon md square btn-pc-1">
        <span className="dq-icon-logout" />
      </IconButton>
      <IconButton className="btn-icon lg square btn-pc-1">
        <span className="dq-icon-logout" />
      </IconButton>

      <h1 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Button Chip
      </h1>
      {['Year : 2010-2020', 'Audi', 'Hyudai', 'Toyota'].map(
        (data: any, index: number) => (
          <Chip
            key={index}
            className="chip"
            label={data}
            onDelete={() => {}}
            deleteIcon={
              <IconButton className="btn-icon xxsm bg-ex-1 text-nc-5 hover:bg-ex-1 hover:text-nc-1">
                <span className="dq-icon-close" />
              </IconButton>
            }
          />
        )
      )}
      <br />
      {['Column Average'].map((data: any, index: number) => (
        <Chip key={index} className="chip round nc-4" label={data} />
      ))}
      {['Column Average'].map((data: any, index: number) => (
        <Chip key={index} className="chip round tc-1" label={data} />
      ))}
      {['Column Average'].map((data: any, index: number) => (
        <Chip key={index} className="chip round tc-2" label={data} />
      ))}
      {['Column Average'].map((data: any, index: number) => (
        <Chip key={index} className="chip round tc-3" label={data} />
      ))}
      {['Column Average'].map((data: any, index: number) => (
        <Chip key={index} className="chip round tc-4" label={data} />
      ))}

      <br />
      {['Column Average'].map((data: any, index: number) => (
        <Chip
          key={index}
          className="chip round nc-4"
          label={data}
          onDelete={() => {}}
          deleteIcon={
            <IconButton className="btn-icon xxsm bg-ex-1 text-nc-5 hover:bg-ex-1 hover:text-nc-1">
              <span className="dq-icon-close" />
            </IconButton>
          }
        />
      ))}
      {['Column Average'].map((data: any, index: number) => (
        <Chip
          key={index}
          className="chip round tc-1"
          label={data}
          onDelete={() => {}}
          deleteIcon={
            <IconButton className="btn-icon xxsm bg-ex-1 text-nc-5 hover:bg-ex-1 hover:text-nc-1">
              <span className="dq-icon-close" />
            </IconButton>
          }
        />
      ))}
      {['Column Average'].map((data: any, index: number) => (
        <Chip
          key={index}
          className="chip round tc-2"
          label={data}
          onDelete={() => {}}
          deleteIcon={
            <IconButton className="btn-icon xxsm bg-ex-1 text-nc-5 hover:bg-ex-1 hover:text-nc-1">
              <span className="dq-icon-close" />
            </IconButton>
          }
        />
      ))}
      {['Column Average'].map((data: any, index: number) => (
        <Chip
          key={index}
          className="chip round tc-3"
          label={data}
          onDelete={() => {}}
          deleteIcon={
            <IconButton className="btn-icon xxsm bg-ex-1 text-nc-5 hover:bg-ex-1 hover:text-nc-1">
              <span className="dq-icon-close" />
            </IconButton>
          }
        />
      ))}
      {['Column Average'].map((data: any, index: number) => (
        <Chip
          key={index}
          className="chip round tc-4"
          label={data}
          onDelete={() => {}}
          deleteIcon={
            <IconButton className="btn-icon xxsm bg-ex-1 text-nc-5 hover:bg-ex-1 hover:text-nc-1">
              <span className="dq-icon-close" />
            </IconButton>
          }
        />
      ))}

      <h1 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Tooltip
      </h1>
      <Tooltip
        title="Top Tooltip"
        placement="top"
        classes={{ tooltip: 'my-tooltip bg-pc-1 text-nc-7 text-12' }}
      >
        <IconButton className="btn-icon icon sm">
          <span className="dq-icon-mandatory_on" />
        </IconButton>
      </Tooltip>

      <Tooltip
        title="right Tooltip"
        placement="right"
        classes={{ tooltip: 'my-tooltip bg-pc-1 text-nc-7 text-12' }}
      >
        <IconButton className="btn-icon icon sm">
          <span className="dq-icon-mandatory_on" />
        </IconButton>
      </Tooltip>

      <h2 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Vertical timeline(drawer)
      </h2>

      <div>
        <Button
          variant="contained"
          className="btn btn-sc sc-2"
          onClick={() => setDrawerWindow(true)}
        >
          Open Drawer
        </Button>
        <Drawer open={drawerWindow} anchor="right" className="drawer">
          <div className="drawer__header">
            <div className="drawer__header__title">Notifications</div>
            <IconButton
              className="btn-icon xxsm bg-nc-7 text-nc-3 hover:bg-nc-7 hover:text-nc-1 absolute right-12"
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
                    <img src={'/assests/images/user.png'} />
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
      </div>

      <h2 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Model
      </h2>
      <div>
        <Button
          variant="contained"
          className="btn btn-sc sc-2"
          onClick={() => {
            setModalWindow(true);
          }}
        >
          Open Model
        </Button>
        <Dialog maxWidth={false} className="dialog xl" open={modalWindow}>
          <DialogTitle disableTypography>
            <span className="dialog-title">Change Password</span>
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
            <div className="mb-20">
              <TextField
                type="password"
                label="Old Password"
                variant="outlined"
                className="input-field sm"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="mb-20">
              <TextField
                type="password"
                label="New Password"
                variant="outlined"
                className="input-field sm"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="mb-20">
              <TextField
                type="password"
                label="Confirm New Password"
                variant="outlined"
                className="input-field sm"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            <div className="flex text-nc-3">
              <span className="dd-icon-error text-16" />
              <div className="text-12">
                <div>
                  The password must contain at least one lowercase letter.
                </div>
                <div>The password must contain at least one number.</div>
                <div>
                  The password must contain at least one uppercase letter.
                </div>
                <div>The maximum length of the password is 20.</div>
                <div>The minimum length of the password is 6.</div>
                <div>
                  The password must contain at least one special character.
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions disableSpacing>
            <Button variant="contained" className="btn btn-pc-1">
              Send Request
            </Button>
            <Button
              variant="contained"
              className="btn btn-sc sc-2 text-14"
              onClick={() => {
                setModalWindow(false);
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <h2 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Input Field
      </h2>
      <div className="grid grid-cols-4 gap-12">
        <div>
          <h3 className="pb-10">Input Box - Normal</h3>
          <TextField
            label="Role/Title"
            variant="outlined"
            className="input-field"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <h3 className="pb-10">Small</h3>
          <TextField
            label="Role/Title"
            variant="outlined"
            className="input-field sm"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <h3 className="pb-10">Disable</h3>
          <TextField
            label="Role/Title"
            variant="outlined"
            className="input-field sm"
            disabled
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <h3 className="pb-10">Error</h3>
          <TextField
            label="Role/Title"
            variant="outlined"
            className="input-field sm"
            error
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>

      <h2 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Dropdown
      </h2>
      <div className="grid grid-cols-4 gap-12">
        <div>
          <h3 className="pb-10">Dropdown - Normal</h3>
          <FormControl
            variant="outlined"
            fullWidth={true}
            className="input-select-wrapper"
          >
            <InputLabel
              id="user-time-zone-label"
              className="input-select-label"
            >
              Time Zone
            </InputLabel>
            <Select
              labelId="user-time-zone-label"
              id="user-time-zone"
              label="Time Zone"
              variant="outlined"
              className="input-select"
            >
              <MenuItem value="Year, Make, Model">Year, Make, Model</MenuItem>
              <MenuItem value="Price - Low to High">
                Price - Low to High
              </MenuItem>
              <MenuItem value="Price - High to Low">
                Price - High to Low
              </MenuItem>
              <MenuItem value="Mileage - Low to High">
                Mileage - Low to High
              </MenuItem>
              <MenuItem value="Mileage - High to Low">
                Mileage - High to Low
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <h3 className="pb-10">Small</h3>
          <FormControl
            variant="outlined"
            fullWidth={true}
            className="input-select-wrapper"
          >
            <InputLabel
              id="user-time-zone-label"
              className="input-select-label sm"
            >
              Time Zone
            </InputLabel>
            <Select
              labelId="user-time-zone-label"
              id="user-time-zone"
              label="Time Zone"
              variant="outlined"
              className="input-select sm"
            >
              <MenuItem value="Year, Make, Model">Year, Make, Model</MenuItem>
              <MenuItem value="Price - Low to High">
                Price - Low to High
              </MenuItem>
              <MenuItem value="Price - High to Low">
                Price - High to Low
              </MenuItem>
              <MenuItem value="Mileage - Low to High">
                Mileage - Low to High
              </MenuItem>
              <MenuItem value="Mileage - High to Low">
                Mileage - High to Low
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <h3 className="pb-10">Disable</h3>
          <FormControl
            variant="outlined"
            fullWidth={true}
            className="input-select-wrapper"
          >
            <InputLabel
              id="user-time-zone-label"
              className="input-select-label sm"
            >
              Time Zone
            </InputLabel>
            <Select
              labelId="user-time-zone-label"
              id="user-time-zone"
              label="Time Zone"
              variant="outlined"
              className="input-select sm"
              disabled
            >
              <MenuItem value="Year, Make, Model">Year, Make, Model</MenuItem>
              <MenuItem value="Price - Low to High">
                Price - Low to High
              </MenuItem>
              <MenuItem value="Price - High to Low">
                Price - High to Low
              </MenuItem>
              <MenuItem value="Mileage - Low to High">
                Mileage - Low to High
              </MenuItem>
              <MenuItem value="Mileage - High to Low">
                Mileage - High to Low
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <h3 className="pb-10">Error</h3>
          <FormControl
            variant="outlined"
            fullWidth={true}
            className="input-select-wrapper"
            error
          >
            <InputLabel
              id="user-time-zone-label"
              className="input-select-label sm"
            >
              Time Zone
            </InputLabel>
            <Select
              labelId="user-time-zone-label"
              id="user-time-zone"
              label="Time Zone"
              variant="outlined"
              className="input-select sm"
              error
            >
              <MenuItem value="Year, Make, Model">Year, Make, Model</MenuItem>
              <MenuItem value="Price - Low to High">
                Price - Low to High
              </MenuItem>
              <MenuItem value="Price - High to Low">
                Price - High to Low
              </MenuItem>
              <MenuItem value="Mileage - Low to High">
                Mileage - Low to High
              </MenuItem>
              <MenuItem value="Mileage - High to Low">
                Mileage - High to Low
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <h2 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Autocomplete - Dropdown
      </h2>
      {/* <div className="grid grid-cols-4 gap-12">
          <Autocomplete
            className="autocomplete-field"
            options={[
              { title: 'The Shawshank Redemption', year: 1994 },
              { title: 'The Godfather', year: 1972 },
              { title: 'The Godfather: Part II', year: 1974 },
              { title: 'The Dark Knight', year: 2008 },
              { title: '12 Angry Men', year: 1957 },
              { title: "Schindler's List", year: 1993 },
            ]}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                className="input-field"
                variant="outlined"
                label="Combo box"
              />
            )}
          />
          <Autocomplete
            className="autocomplete-field sm"
            options={[
              { title: 'The Shawshank Redemption', year: 1994 },
              { title: 'The Godfather', year: 1972 },
              { title: 'The Godfather: Part II', year: 1974 },
              { title: 'The Dark Knight', year: 2008 },
              { title: '12 Angry Men', year: 1957 },
              { title: "Schindler's List", year: 1993 },
            ]}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                className="input-field sm"
                variant="outlined"
                label="Combo box"
              />
            )}
          />
        </div> */}
      <h2 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        action menu
      </h2>
      <IconButton
        className="btn-icon sm square "
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span className="dq-icon-menu_dots" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Edit Project</MenuItem>
        <MenuItem onClick={handleClose}>Delete Project</MenuItem>
      </Menu>
      <h2 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Checkbox
      </h2>
      <FormControlLabel
        className="checkbox"
        control={
          <Checkbox
            icon={<span className="unCheckedIcon" />}
            checkedIcon={<span className="checkedIcon" />}
          />
        }
        label="Label"
      />

      <h2 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Radio Buttons
      </h2>
      <h2 className="text-20 my-16">Radio</h2>
      <FormControlLabel
        className="radio"
        control={
          <Radio
            icon={<span className="unCheckedIcon" />}
            checkedIcon={<span className="checkedIcon" />}
          />
        }
        label="Label"
      />
      <FormControlLabel
        className="radio label-bold"
        control={
          <Radio
            icon={<span className="unCheckedIcon" />}
            checkedIcon={<span className="checkedIcon" />}
          />
        }
        label="Label Bold"
      />

      <h2 className="text-20 my-16">Radio Group</h2>
      <RadioGroup name="payment_method">
        <FormControlLabel
          className="radio"
          value="female"
          control={
            <Radio
              icon={<span className="unCheckedIcon" />}
              checkedIcon={<span className="checkedIcon" />}
            />
          }
          label="Floor Plan"
        />
        <FormControlLabel
          className="radio"
          value="male"
          control={
            <Radio
              icon={<span className="unCheckedIcon" />}
              checkedIcon={<span className="checkedIcon" />}
            />
          }
          label="Wire Transfer"
        />
        <FormControlLabel
          className="radio"
          value="other"
          control={
            <Radio
              icon={<span className="unCheckedIcon" />}
              checkedIcon={<span className="checkedIcon" />}
            />
          }
          label="Cashier Check"
        />
        <FormControlLabel
          className="radio"
          value="disabled"
          disabled
          control={
            <Radio
              icon={<span className="unCheckedIcon" />}
              checkedIcon={<span className="checkedIcon" />}
            />
          }
          label="(Disabled option)"
        />
      </RadioGroup>
      <h2 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Badges
      </h2>
      <div className="flex">
        <div className="mr-10">
          <BadgeProfile size="md" alt="Robert Dean" />
        </div>
        <div className="mr-10">
          <BadgeProfile size="sm" alt="Max Harris" />
        </div>
      </div>
      <h2 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Loader
      </h2>
      <div className="dd-loader-backdrop h-80 relative mb-24 p-12">
        <div className="dd-loader">
          <span className="dd-loader-img">
            <img
              className="img"
              src={SYSTEM_CONSTANTS.BASE_URL + '/assests/loading.gif'}
            />
          </span>
        </div>
      </div>

      <h2 className="boilerplate-title text-pc-1 font-extra-bold font-barlow">
        Header
      </h2>
      <Header />
    </div>
  );
}

export default Boilerplate;
