import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ManufacturersListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const manufacturersListApi = ({ page = 0, sort = 'id', perPage = 10 }: ManufacturersListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.manufacturers.index'],
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

export default manufacturersListApi;
