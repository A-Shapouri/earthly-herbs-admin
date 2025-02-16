import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface GeoZonesStoreProps extends CacheProps{
  payload: object
}

const geoZonesStoreApi = ({ payload }: GeoZonesStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.geoZones.index'],
    payload: payload,
    withToken: true,
  });
};

export default geoZonesStoreApi;
