/* eslint-disable no-debugger */
// /* eslint-disable @typescript-eslint/no-non-null-assertion */
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
}
const params: any = {};
export function dashboardList(props: Props) {
  params.page = props.page;
  params.per_page = props.per_page;
  const fetchRulesData = (): any => {
    const promise = fetchDashboardList(params).then((res: any) => {
      const data = res;
      return { data };
    });
    return promise as PromiseWithCancel<any>;
  };
  const reactQuery = useQuery([FETCH_DASHBOARD_LIST, params], fetchRulesData);
  return reactQuery;
}

export default dashboardList;
