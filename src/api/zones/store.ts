import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ZonesStoreProps extends CacheProps{
  payload: object
}

const zonesStoreApi = ({ payload }: ZonesStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.zones.index'],
    payload: payload,
    withToken: true,
  });
};

export default zonesStoreApi;
