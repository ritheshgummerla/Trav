// impoot CancelTokenSource from "axios';
import { URLS } from '../constants/Urls';
import { request } from './http/Http';

export const FETCH_PROJECTS_CREATE_GROUP = 'projectsCreateGroup';

export const fetchprojectsCreateGroup = (params: any): any => {
  return request(URLS.PROJECTS_CREATE_GROUP, 'get', params, false).then(
    (response: any): any => {
      if (response) {
        return response;
      }
    }
  );
};
