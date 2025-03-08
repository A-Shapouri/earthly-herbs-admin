import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface FiltersListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const filtersListApi = ({ page = 0, sort = 'id', perPage = 10 }: FiltersListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.filters.index'],
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

export default filtersListApi;
