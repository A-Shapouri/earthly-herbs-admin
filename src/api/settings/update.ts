import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface SettingsUpdateProps extends CacheProps{
  payload: object
  id: string
}

const settingsUpdateApi = ({ payload, id }: SettingsUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.settings.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default settingsUpdateApi;
