import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OptionsListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const optionsListApi = ({ page = 0, sort = 'id', perPage = 10 }: OptionsListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.options.index'],
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

export default optionsListApi;
