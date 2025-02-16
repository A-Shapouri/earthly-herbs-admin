import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StoresListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const storesListApi = ({ page = 0, sort = 'id', perPage = 10 }: StoresListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.stores.index'],
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

export default storesListApi;
