import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CountriesListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const countriesListApi = ({ page = 0, sort = 'id', perPage = 10 }: CountriesListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.countries.index'],
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

export default countriesListApi;
