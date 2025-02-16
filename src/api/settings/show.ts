import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface SettingsShowProps extends CacheProps{
  id: string
}

const settingsShowApi = ({ id }: SettingsShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.settings.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default settingsShowApi;
