import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface TaxRatesListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number

  searchText?: string
}

const taxRatesListApi = ({ page = 0, sort = 'id', perPage = 10, searchText }: TaxRatesListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.taxRates.index'],
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

export default taxRatesListApi;
