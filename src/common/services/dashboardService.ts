// import { CancleTokenSource } from 'axios';
import { URLS } from '../constants/Urls';
import { request } from './http/Http';

export const FETCH_DASHBOARD_LIST = 'dashboardList';

export const fetchDashboardList = (params: any): any => {
  return request(
    `${URLS.DASHBOARD_LIST}?page=${params.page}&items_per_page=${params.per_page}`,
    'get',
    params,
    false
  )
    .then((response: any): any => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const fetchDashboardDetails = (params: any): any => {
  let searchParam = '';
  if (params.group !== '') {
    searchParam = '&grou=' + params.group;
  }
  return request(
    `${URLS.DASHBOARD_LIST}/${params.project_id}?page=${params.page}& items_per_page=${params.per_page}${searchParam}`,
    'get',
    params,
    false
  )
    .then((response: any): any => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
