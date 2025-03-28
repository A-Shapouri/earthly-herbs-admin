import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface GeoZonesListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number

  searchText?: string
}

const geoZonesListApi = ({ page = 0, sort = 'id', perPage = 10, searchText }: GeoZonesListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.geoZones.index'],
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

export default geoZonesListApi;
