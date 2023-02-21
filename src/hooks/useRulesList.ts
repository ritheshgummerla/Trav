/* eslint-disable prettier/prettier */
/* eslint-disable no-debugger */
// /* eslint-disable @typescript -eslint/no-non-null-assertion */
import { useQuery } from 'react-query';
import {
  fetchRulesList,
  FETCH_RULES_LIST,
} from '../common/services/RulesServices';
interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => void;
}
interface Props {
  page: number;
  items_per_page: number;
  search: string;
  category: string;
  status: string;
  searchType: string;
}
const params: any = {};
export function useRulesList(props: Props) {
  params.page = props.page;
  params.items_per_page = props.items_per_page;
  params.search = props.search;
  params.category = props.category;
  params.status = props.status;
  params.searchType = props.searchType;
  const fetchRulesData = (): any => {
    const promise = fetchRulesList(params).then((res: any) => {
      const data = res;

      return { data };
    });
    return promise as PromiseWithCancel<any>;
  };
  const reactQuery = useQuery([FETCH_RULES_LIST, params], fetchRulesData);
  return reactQuery;
}
export default useRulesList;
