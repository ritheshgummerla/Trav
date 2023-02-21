/* eslint-disable */
import { URLS } from '../constants/Urls';
import { request } from './http/Http';

export const FETCH_PROJECTS_LIST = 'projectsList';
export const FETCH_PROJECTS_GROUPS_LIST = 'projectsGroupsList';
export const CREATE_PROJECT = 'createProject';

export const fetchProjectsList = async (params: any) => {
  return await request(
    `${URLS.PROJECTS_LIST}?page=${params.page}&items_per_page=${params.per_page}&search=${params.search}`,
    'get',
    params,
    false
  ).then((response: any): any => {
    if (response) {
      return response;
    }
  });
};
export const last20ExecutedRuns = async (params: any) => {
  return await request(
    `${URLS.EXECUTED_GROUPS_LIST}/${params.project_id}?page=${params.page}&items_per_page=${params.per_page}`,
    'get',
    params,
    false
  ).then((response: any): any => {
    if (response) {
      return response;
    }
  });
};
export const fetchProjectsGroupsList = async (params: any) => {
  return await request(
    `${URLS.PROJECTS_GROUPS_LIST}/${params.project_id}/groups/?page=${params.page}&items_per_page=${params.per_page}&owner=${params.owner}&${params.searchType}=${params.search}`,
    'get',
    params,
    false
  ).then((response: any): any => {
    if (response) {
      return response;
    }
  });
};
export const createProjectList = async (params: any) => {
  return await request(URLS.PROJECT_CREATE, 'post', params, true).then(
    (response) => {
      return response;
    }
  );
};
export const addSuitesToProject = async (params: any) => {
  return await request(URLS.ADD_SUITES_TO_PROJECT, 'post', params, true).then(
    (response) => {
      return response;
    }
  );
};

export const editProject = async (params: any, id: any) => {
  return await request(
    `${URLS.PROJECT_EDIT}/${id}/edit`,
    'PUT',
    params,
    true
  ).then((response) => {
    return response;
  });
};

export const deleteProject = async (params: any) => {
  return await request(
    `${URLS.PROJECT_DELETE}/${params.project_id}/delete`,
    'get',
    params,
    true
  ).then((response) => {
    return response;
  });
};

export const deleteGroupUnderProject = async (params: any) => {
  return await request(
    `${URLS.GROUP_DELETE_UNDER_PROJECT}`,
    'post',
    params,
    true
  ).then((response) => {
    return response;
  });
};
