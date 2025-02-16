import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface GeoZonesUpdateProps extends CacheProps{
  payload: object
  id: string
}

const geoZonesUpdateApi = ({ payload, id }: GeoZonesUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.geoZones.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default geoZonesUpdateApi;
