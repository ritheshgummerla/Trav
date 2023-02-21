/* eslint-disable */
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { TagsInput } from 'react-tag-input-component';

const CreateModel: React.FC = () => {
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const [modalWindow, setModalWindow] = React.useState(false);
  const [selected, setSelected] = useState(['Dummy Tag']);

  return (
    <div className="model inline">
      <Button
        variant="contained"
        className="btn btn-pc-1"
        onClick={() => {
          setModalWindow(true);
        }}
      >
        Request New Expectation
      </Button>
      <Dialog className="dialog md-435" open={modalWindow}>
        <DialogTitle disableTypography>
          <span className="dialog-title">Request New Expectation</span>
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
          <div className="layout-70-30">
            <div className="mb-20">
              <TextField
                type="text"
                label="Rule Name"
                variant="outlined"
                className="input-field sm"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="mb-20">
              <FormControl
                variant="outlined"
                fullWidth={true}
                className="input-select-wrapper mt-2"
              >
                <InputLabel
                  id="user-time-zone-label"
                  className="input-select-label sm"
                >
                  Priority
                </InputLabel>
                <Select
                  labelId="user-time-zone-label"
                  id="user-time-zone"
                  label="Priority"
                  variant="outlined"
                  className="input-select"
                >
                  <MenuItem value="Year, Make, Model">
                    Year, Make, Model
                  </MenuItem>
                  <MenuItem value="Price - Low to High">High</MenuItem>
                  <MenuItem value="Price - High to Low">Medium</MenuItem>
                  <MenuItem value="Mileage - Low to High">Low</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <TextField
                type="text"
                label="Description"
                variant="outlined"
                className="input-field sm multiline"
                multiline
                rows={10}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div>
              <div className="custom-tag">
                <TagsInput
                  value={selected}
                  onChange={setSelected}
                  name="tags"
                  placeHolder="Enter Tags"
                />
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
  );
};

export default CreateModel;
