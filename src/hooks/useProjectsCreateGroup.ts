/* eslint-disable no-debugger */
// /* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useQuery } from 'react-query';
import {
  fetchprojectsCreateGroup,
  FETCH_PROJECTS_CREATE_GROUP,
} from '../common/services/projectCreategroupServices';
interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => void;
}
interface Props {
  page: number;
  per_page: number;
}
const params: any = {};
export function projectsCreateGroup(props: Props) {
  const fetchProjectsData = (): any => {
    const promise = fetchprojectsCreateGroup(params).then((res: any) => {
      const data = res;
      return { data };
    });
    return promise as PromiseWithCancel<any>;
  };
  const reactQuery = useQuery(FETCH_PROJECTS_CREATE_GROUP, fetchProjectsData);
  return reactQuery;
}
export default projectsCreateGroup;
