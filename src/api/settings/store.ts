import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface SettingsStoreProps extends CacheProps{
  payload: object
}

const settingsStoreApi = ({ payload }: SettingsStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.settings.index'],
    payload: payload,
    withToken: true,
  });
};

export default settingsStoreApi;
