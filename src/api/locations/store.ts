import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LocationsStoreProps extends CacheProps{
  payload: object
}

const locationsStoreApi = ({ payload }: LocationsStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.locations.index'],
    payload: payload,
    withToken: true,
  });
};

export default locationsStoreApi;
