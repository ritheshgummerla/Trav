import React, { createContext, useState } from 'react';

export const ProjectContext = createContext<any>({});

export const ProjectProvider = ({ children }: any) => {
  const [isGroupEdit, setIsGroupEdit] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedRules, setSelectedRules] = React.useState([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [isActiveProjectTab, setIsActiveProjectTab] = React.useState();
  const [projectlist, setProjectList] = React.useState([]);
  const [groupList, setGroupList] = React.useState([]);
  const [groupsUnderProject, setGroupsUnderProject] = React.useState([]);
  const [dismissModal, setisDismissModal] = useState(false);

  const [currentPageDetailsLastRuns, setCurrentPageDetailsLastRuns] =
    React.useState({
      page: 1,
      per_page: 10,
      group: '',
      project_id: '',
      owner: '',
      searchType: 'name',
      search: '',
    });

  const [newlyAddedGroupList, setNewlyAddedGroupList] = useState<any>([]);
  const [isEditGroup, setIsEditGroup] = useState(false);
  const [isProjectLoading, setIsProjectLoading] = useState(false);
  const [editRulesList, setEditRulesList] = React.useState([]);
  const [editRulesListCopy, setEditRulesListCopy] = React.useState([]);
  const [suitesDrawerWindow, setSuitesDrawerWindow] = React.useState(false);
  const [addProjectModal, setAddProjectModal] = React.useState(false);
  const [isEditProject, setIsEditProject] = React.useState(false);
  const [selectedGroups, setSelectedGroups] = React.useState([]);
  const [rulesData, setRulesData] = React.useState([]);
  const [lastExecutedRuns, setLastExecutedRuns] = React.useState([]);
  const [createProjectPayload, setCreateProjectPayload] = useState({
    name: '',
    description: '',
    owner: 'Admin',
    owner_email: 'Admin@anblicks.com',
    tags: [],
  });
  const [groupPayload, setGroupPayload] = useState({
    name: '',
    description: '',
    tags: [],
    owner: 'Admin',
    owner_email: 'admin@anblicks.com',
    project_name: '',
  });
  const [previousGroupPayload, setPreviousGroupPayload] = useState({
    name: '',
    description: '',
    tags: [],
    owner: 'Admin',
    owner_email: 'admin@anblicks.com',
    project_name: '',
  });
  const [addRuleRequestBody, setAddRuleRequestBody] = useState({
    project: '',
    group: '',
    rules: [],
  });
  const [addRulePayload, setAddrulePayload] = useState({
    rules: [],
  });

  return (
    <ProjectContext.Provider
      value={{
        currentPageDetailsLastRuns,
        setCurrentPageDetailsLastRuns,
        rulesData,
        setRulesData,
        groupList,
        setGroupList,
        addRuleRequestBody,
        setAddRuleRequestBody,
        dismissModal,
        setisDismissModal,
        groupPayload,
        previousGroupPayload,
        setPreviousGroupPayload,
        setGroupPayload,
        setIsGroupEdit,
        isGroupEdit,
        isActiveProjectTab,
        setIsActiveProjectTab,
        isProjectLoading,
        setIsProjectLoading,
        errorMsg,
        setErrorMsg,
        successMsg,
        setSuccessMsg,
        addRulePayload,
        setAddrulePayload,
        projectlist,
        setProjectList,
        selectedRules,
        setSelectedRules,
        isEditGroup,
        setIsEditGroup,
        editRulesList,
        setEditRulesList,
        editRulesListCopy,
        setEditRulesListCopy,
        suitesDrawerWindow,
        setSuitesDrawerWindow,
        addProjectModal,
        setAddProjectModal,
        groupsUnderProject,
        setGroupsUnderProject,
        selectedGroups,
        setSelectedGroups,
        createProjectPayload,
        setCreateProjectPayload,
        isEditProject,
        setIsEditProject,
        openDeleteModal,
        setOpenDeleteModal,
        newlyAddedGroupList,
        setNewlyAddedGroupList,
        lastExecutedRuns,
        setLastExecutedRuns,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
