/* eslint-disable */
import React from 'react';
import useViewport from '../../hooks/useViewport';
import TextField from '@material-ui/core/TextField';

interface Props {
  currentPageDetails: any;
  setCurrentPageDetails: any;
}
const Filter = (props: Props): any => {
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const [modalWindow, setModalWindow] = React.useState(false);

  const onHandleChange = (e: any) => {
    props.setCurrentPageDetails({
      ...props.currentPageDetails,
      [e.target.name]: e.target.value !== 'All' ? e.target.value : '',
    });
  };

  const searchRuleFilterByName = (e: any): any => {
    if (e.target.value.trim() !== '') {
      props.setCurrentPageDetails({
        ...props.currentPageDetails,
        search: e.target.value,
      });
    } else {
      props.setCurrentPageDetails({
        ...props.currentPageDetails,
        search: '',
      });
    }
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
            placeholder="Search Expectations"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            onKeyUp={(e) => searchRuleFilterByName(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
