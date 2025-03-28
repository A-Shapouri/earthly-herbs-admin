import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ZonesListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number

  searchText?: string
}

const zonesListApi = ({ page = 0, sort = 'id', perPage = 10, searchText }: ZonesListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.zones.index'],
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

export default zonesListApi;
