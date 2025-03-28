import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CountriesListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number

  searchText?: string
}

const countriesListApi = ({ page = 0, sort = 'id', perPage = 10, searchText }: CountriesListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.countries.index'],
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

export default countriesListApi;
