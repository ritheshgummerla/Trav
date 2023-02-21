import { SYSTEM_CONSTANTS } from '.';

// const BASE_URL = 'http://adqt-v2.anblicks.com:8080';
const BASE_URL = SYSTEM_CONSTANTS.BASE_URL;
export const URLS = {
  RULES_LIST: BASE_URL ? BASE_URL + '/rules' : '/rules',
  GROUPS_LIST: BASE_URL ? BASE_URL + '/groups' : '/groups',
  PROJECTS_LIST: BASE_URL ? BASE_URL + '/projects' : '/projects',
  PROJECTS_GROUPS_LIST: BASE_URL ? BASE_URL + '/projects' : '/projects',
  EXECUTED_GROUPS_LIST: BASE_URL ? BASE_URL + '/dashboard' : '/dashboard',
  PROJECT_CREATE: BASE_URL ? BASE_URL + '/projects/create' : '/projects/create',
  ADD_SUITES_TO_PROJECT: BASE_URL
    ? BASE_URL + '/projects/addgroup'
    : '/projects/addgroup',
  PROJECT_EDIT: BASE_URL ? BASE_URL + '/projects' : '/projects',
  GROUP_CREATE: BASE_URL ? BASE_URL + '/groups/create' : '/groups/create',
  ADD_RULE_TO_GROUP: BASE_URL ? BASE_URL + '/groups' : '/groups',
  REQUEST_NEW_RULE: BASE_URL ? BASE_URL + '/request rule' : '/requestrule',
  DELETE_GROUP_UNDER_PROJECT: BASE_URL
    ? BASE_URL + '/projects/removegroup'
    : '/projects/removegroup',
  DELETE_RULE_UNDER_GROUP: BASE_URL ? BASE_URL + '/groups' : '/groups',
  PROJECT_DELETE: BASE_URL ? BASE_URL + '/projects' : '/projects',
  GROUP_DELETE_UNDER_PROJECT: BASE_URL
    ? BASE_URL + '/projects/removegroup'
    : '/projects/removegroup',
  DELETE_GROUP: BASE_URL ? BASE_URL + '/groups' : '/groups',
  PROJECTS_CREATE_GROUP: BASE_URL ? BASE_URL + '/creategroup' : '/creategroup',
  UPDATE_GROUP: BASE_URL ? BASE_URL + '/groups' : '/groups',
  UPDATE_RULE: BASE_URL ? BASE_URL + '/groups' : '/groups',
  DASHBOARD_LIST: BASE_URL ? BASE_URL + '/dashboard' : ' / api / dashboard',
};
