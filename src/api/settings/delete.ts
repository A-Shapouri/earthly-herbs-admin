import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface SettingsDeleteProps extends CacheProps{
  id: string
}

const settingsDeleteApi = ({ id }: SettingsDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.settings.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default settingsDeleteApi;
