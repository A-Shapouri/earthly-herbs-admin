import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface RecurringsListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const recurringsListApi = ({ page = 0, sort = 'id', perPage = 10 }: RecurringsListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.recurrings.index'],
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

export default recurringsListApi;
