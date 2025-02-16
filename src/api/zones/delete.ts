import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ZonesDeleteProps extends CacheProps{
  id: string
}

const zonesDeleteApi = ({ id }: ZonesDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.zones.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default zonesDeleteApi;
