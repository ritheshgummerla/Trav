import { useQuery } from 'react-query';
import {
  fetchProjectsList,
  FETCH_PROJECTS_LIST,
} from '../common/services/projectServices';
interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => void;
}
interface Props {
  page: number;
  per_page: number;
  search: string;
}
const params: any = {};
export function projectsList(props: Props) {
  params.page = props.page;
  params.per_page = props.per_page;
  params.search = props.search;
  const fetchProjectsData = (): any => {
    const promise = fetchProjectsList(params).then((res: any) => {
      const data = res;
      return { data };
    });
    return promise as PromiseWithCancel<any>;
  };
  const reactQuery = useQuery([FETCH_PROJECTS_LIST, params], fetchProjectsData);
  return reactQuery;
}
export default projectsList;
