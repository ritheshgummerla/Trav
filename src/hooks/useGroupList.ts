/* eslint-disable no-debugger */ // /* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useQuery } from 'react-query';
import {
  fetchGroupsList,
  FETCH_GROUPS_LIST,
} from '../common/services/groupServices';
interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => void;
}
interface Props {
  page: number;
  per_page: number;
  searchType: string;
  search: string;
  owner: string;
}
const params: any = {};
export function useGroupList(props: Props) {
  params.page = props.page;
  params.per_page = props.per_page;
  params.searchType = props.searchType;
  params.search = props.search;
  params.owner = props.owner;
  const fetchGroupsData = (): any => {
    const promise = fetchGroupsList(params).then((res: any) => {
      const data = res;
      return { data };
    });
    return promise as PromiseWithCancel<any>;
  };
  const reactQuery = useQuery([FETCH_GROUPS_LIST, params], fetchGroupsData);
  return reactQuery;
}
export default useGroupList;
