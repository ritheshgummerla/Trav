/* eslint-disable */
import React, { useContext } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { ProjectContext } from '../../context/project/ProjectContext';

interface Props {
  currentPageDetails: any;
  setCurrentPageDetails: any;
}
const Filter = (props: Props): any => {
  const { setGroupPayload } = useContext(ProjectContext);
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);

  const onHandleChange = (e: any) => {
    props.setCurrentPageDetails({
      ...props.currentPageDetails,
      [e.target.name]: e.target.value !== 'All' ? e.target.value : ''
    });
  };

  const searchGroupFilterByName = (e: any): any => {
    if (e.target.value.trim() !== '') {
      props.setCurrentPageDetails({
        ...props.currentPageDetails,
        search: e.target.value,
        page: 1,
      });
    } else {
      props.setCurrentPageDetails({
        ...props.currentPageDetails,
        search: '',
        page: 1,
      });
    }
  };
  const history = useHistory();
  const onCreateSuites = () => {
    setGroupPayload({
      name: '',
      description: '',
      tags: [],
      owner: 'Admin',
      project_name: ''
    });
    // history.push('/creategroup');
  };
  return (
    <div className="filter flex justify-between items-center p-12 border-b border-nc-6">
      <div className="right global-search">
        <div className="search-box">
          <span className="dq-icon-search" />
          <TextField
            className="search"
            id="standard-basic"
            label="Search"
            placeholder="Search Suites"
            variant="standard"
            InputLabelProps={{
              shrink: true
            }}
            onKeyUp={(e) => searchGroupFilterByName(e)}
          />
        </div>
      </div>
      <div className="right-btn">
        <a href="/createsuite">
          <Button
            variant="contained"
            className="btn btn-pc-1"
            onClick={() => onCreateSuites()}
          >
            Create Suite
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Filter;
