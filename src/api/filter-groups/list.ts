import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface FilterGroupsListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const filterGroupsListApi = ({ page = 0, sort = 'id', perPage = 10 }: FilterGroupsListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.filter-groups.index'],
      query: {
        page: page,
        sort: sort,
        size: perPage,
      },
    },
    withToken: true,
    withPagination: true,
  });
};

export default filterGroupsListApi;
