import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface GeoZonesListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const geoZonesListApi = ({ page = 0, sort = 'id', perPage = 10 }: GeoZonesListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.geoZones.index'],
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

export default geoZonesListApi;
