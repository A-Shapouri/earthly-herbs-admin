import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface FiltersListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number

  searchText?: string
}

const filtersListApi = ({ page = 0, sort = 'id', perPage = 10, searchText }: FiltersListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.filters.index'],
      query: {
        page: page,
        sort: sort,
        size: perPage,
        searchText: searchText,
      },
    },
    withToken: true,
    withPagination: true,
  });
};

export default filtersListApi;
