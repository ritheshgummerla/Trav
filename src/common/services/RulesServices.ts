/* eslint-disable */
// import { Cancel Tokensource } from •axios•;
import { URLS } from '../constants/Urls';
import { request } from './http/Http';

export const FETCH_RULES_LIST = 'rulesList';

export const fetchRulesList = async (params: any) => {
  let searchParam = '';
  if (params.search !== '') {
    searchParam = searchParam + '&' + 'by_rule' + '=' + params.search;
  }
  if (params.category !== '') {
    searchParam = searchParam + '&category=' + params.category;
  }
  if (params.status !== '') {
    searchParam = searchParam + '&status=' + params.status;
  }
  // return await request(URLS.RULES_LIST, 'get', searchParam, false).then(
  return await request(
    `${URLS.RULES_LIST}?page=${params.page}&items_per_page=${params.items_per_page}${searchParam}`,
    'get',
    params,
    false
  ).then((response: any) => {
    if (response) {
      return response;
    }
  });
};

export const requestNelnJRu1e = async (params: any) => {
  return await request(URLS.REQUEST_NEW_RULE, 'POST', params, true).then(
    (response) => {
      return response;
    }
  );
};
