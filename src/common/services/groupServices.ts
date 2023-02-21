// import { CancelTokenSource } from los
// import { CancleTokenSource } from 'axios';
/* eslint-disable */
import { URLS } from '../constants/Urls';
import { request } from './http/Http';

export const FETCH_GROUPS_LIST = 'groups List';

export const fetchGroupsList = (params: any): any => {
  return request(
    `${URLS.GROUPS_LIST}?page=${params.page}&items_per_page=${params.per_page}&${params.searchType}=${params.search}&owner=${params.owner}`,
    'get',
    params,
    false
  ).then((response: any): any => {
    if (response) {
      return response;
    }
  });
};
export const createGroupInProject = async (params: any) => {
  return await request(URLS.GROUP_CREATE, 'POST', params, true).then(
    (response) => {
      return response;
    }
  );
};
export const onUpdateRuleAPI = async (params: any) => {
  return await request(
    `${URLS.UPDATE_RULE}/${params.groupId}/editrule`,
    'POST',
    params.rules,
    false
  ).then((response) => {
    return response;
  });
};
export const onUpdateGroupAPI = async (params: any) => {
  return await request(
    `${URLS.UPDATE_GROUP}/${params.id}/edit`,
    'PUT',
    params,
    false
  ).then((response) => {
    return response;
  });
};
export const addRuleToGroup = async (params: any) => {
  const rules = {
    rules: params.rules
  };
  return await request(
    `${URLS.ADD_RULE_TO_GROUP}/${params.groupId}/addrules`,
    'POST',
    rules,
    true
  ).then((response) => {
    return response;
  });
};
export const deleteGroupUnderProject = async (params: any) => {
  return await request(
    `${URLS.DELETE_GROUP_UNDER_PROJECT}`,
    'post',
    params,
    true
  ).then((response) => {
    return response;
  });
};
export const deleteGroup = async (params: any) => {
  return await request(
    `${URLS.DELETE_GROUP}/${params.groupId}/delete`,
    'get',
    params,
    true
  ).then((response) => {
    return response;
  });
};
export const deleteRuleUnderGroup = async (params: any) => {
  return await request(
    `${URLS.DELETE_RULE_UNDER_GROUP}/${params.group_id}/deleterule/${params.rule_id}`,
    'get',
    params,
    true
  ).then((response) => {
    return response;
  });
};
