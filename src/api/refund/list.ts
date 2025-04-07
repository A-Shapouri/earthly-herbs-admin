import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface RefundsListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const refundsListApi = ({ page = 0, sort = 'id', perPage = 10 }: RefundsListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.refunds.index'],
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

export default refundsListApi;
