/* eslint-disable */
import React, { useContext, useState } from 'react';
import useViewport from '../../../hooks/useViewport';
import { ProjectContext } from '../../../context/project/ProjectContext';
import TextField from '@material-ui/core/TextField';
import { TagsInput } from 'react-tag-input-component';
interface GroupSideProps {
  groupValidation: any;
  setGroupValidation: any;
}
const Form: React.FC<GroupSideProps> = ({
  groupValidation,
}: GroupSideProps) => {
  const { groupPayload, setGroupPayload, isActiveProjectTab } =
    useContext(ProjectContext);
  const [selected, setSelected] = useState([]);
  const onHandleChange = (e: any) => {
    setGroupPayload({
      ...groupPayload,
      [e.target.name]: e.target.value,
      project_name: isActiveProjectTab.name,
    });
  };

  const onTagsChange = (e: any) => {
    setGroupPayload({
      ...groupPayload,
      tags: e,
    });
  };
  const { windowWidth } = useViewport();
  React.useEffect(() => {
    document.body.classList.remove('full-page');
    document.body.classList.remove('branding-drawer-open');
  }, []);
  const [modalWindow, setModalWindow] = React.useState(false);

  return (
    <div className="create-group-form">
      <div className="mb-20">
        <TextField
          type="text"
          label="Group Name"
          variant="outlined"
          className="input-field sm"
          helperText={groupValidation.groupName ? 'Group name is required' : ''}
          name="name"
          value={groupPayload.name}
          InputLabelProps={{
            shrink: true,
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
          value={groupPayload.description}
          className="input-field sm multiline"
          multiline
          rows={10}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => onHandleChange(e)}
        />
      </div>
      <div className="mb-20">
        <div className="custom-tag">
          <TagsInput
            value={groupPayload.tags}
            onChange={onTagsChange}
            name="tags"
            placeHolder="Enter Tags"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
