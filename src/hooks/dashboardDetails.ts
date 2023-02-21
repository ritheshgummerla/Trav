/* eslint-disable no-debugger */
// /* eslint-disable @typescript -eslint/no-non-null-assertion */
import { useQuery } from 'react-query';
import {
  fetchDashboardList,
  fetchDashboardDetails,
  FETCH_DASHBOARD_LIST,
} from '../common/services/dashboardService';
interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => void;
}
interface Props {
  page: number;
  per_page: number;
  project_id: string;
  group: string;
}
const params: any = {};

export function dashboardDeatil(props: Props) {
  params.page = props.page;
  params.per_page = props.per_page;
  params.project_id = props.project_id;
  params.group = props.group;
  const fetchRulesData = (): any => {
    const promise = fetchDashboardDetails(params).then((res: any) => {
      const data = res;
      return { data };
    });
    return promise as PromiseWithCancel<any>;
  };
  const reactQuery = useQuery([FETCH_DASHBOARD_LIST, params], fetchRulesData);
  return reactQuery;
}

export default dashboardDeatil;
