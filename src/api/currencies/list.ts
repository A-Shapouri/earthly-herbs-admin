import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CurrenciesListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const currenciesListApi = ({ page = 0, sort = 'id', perPage = 10 }: CurrenciesListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.currencies.index'],
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

export default currenciesListApi;
