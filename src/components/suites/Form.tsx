/* eslint-disable */
import React, { useContext, useState } from 'react';
import useViewport from '../../hooks/useViewport';
import { ProjectContext } from '../../context/project/ProjectContext';
import TextField from '@material-ui/core/TextField';
import { TagsInput } from 'react-tag-input-component';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router';

interface GroupSideProps {
  groupValidation: any;
  setGroupValidation: any;
}
const Form: React.FC<GroupSideProps> = ({
  groupValidation,
  setGroupValidation
}: GroupSideProps) => {
  const {
    groupPayload,
    setGroupPayload,
    isActiveProjectTab,
    isEditGroup,
    setAddrulePayload,
    addRulePayload,
    setIsEditGroup,
    setEditRulesList
  } = useContext(ProjectContext);
  const [selected, setSelected] = useState([]);
  const history = useHistory();
  const onHandleChange = (e: any) => {
    setGroupPayload({
      ...groupPayload,
      [e.target.name]: e.target.value,
      project_name: isActiveProjectTab?.name
    });
  };

  const onTagsChange = (e: any) => {
    setGroupPayload({
      ...groupPayload,
      tags: e
    });
  };
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const [modalWindow, setModalWindow] = React.useState(false);
  const onCancelCreateGroup = () => {
    setGroupPayload({
      name: '',
      description: '',
      tags: [],
      owner: 'Admin',
      project_name: ''
    });
    setIsEditGroup(false);
    // setIsActiveProjectTab(isActiveProjectTab);
    setEditRulesList([]);
    setAddrulePayload({
      ...addRulePayload,
      rules: []
    });
    // setAddRuleRequestBody({
    //     ...addRuleRequestBody,
    //     rules: [],
    // });
    history.push('/suites');
  };

  return (
    <div className="create-group-form ">
      <div className="form-body">
        <div className="left">
          <div className="group-filter mr-16">
            <IconButton
              onClick={onCancelCreateGroup}
              className="btn-icon icon sm text-nc-4"
            >
              <span className="dq-icon-back_arrow  cursor-pointer"></span>
            </IconButton>
          </div>
        </div>
        <div className="form">
          <div className="mb-20">
            <TextField
              disabled={isEditGroup ? true : false}
              type="text"
              label="Suite Name"
              variant="outlined"
              className="input-field sm multiline"
              multiline
              rows={2}
              helperText={
                groupValidation?.groupName ? 'Suite name is required' : ''
              }
              name="name"
              value={groupPayload?.name}
              InputLabelProps={{
                shrink: true
              }}
              onChange={(e) => onHandleChange(e)}
            />
          </div>
          <div className="mb-20">
            <TextField
              type="text"
              label="Description"
              variant="outlined"
              name="description"
              value={groupPayload?.description}
              className="input-field sm multiline"
              multiline
              rows={2}
              InputLabelProps={{
                shrink: true
              }}
              onChange={(e) => onHandleChange(e)}
            />
          </div>
          <div className="mb-20">
            <div className="custom-tag">
              <span className="tag-label">Tags</span>
              <TagsInput
                value={groupPayload?.tags}
                onChange={onTagsChange}
                name="tags"
                placeHolder="Enter Tags"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
