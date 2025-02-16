import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface GeoZonesShowProps extends CacheProps{
  id: string
}

const geoZonesShowApi = ({ id }: GeoZonesShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.geoZones.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default geoZonesShowApi;
