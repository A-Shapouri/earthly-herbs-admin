import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ZonesUpdateProps extends CacheProps{
  payload: object
  id: string
}

const zonesUpdateApi = ({ payload, id }: ZonesUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.zones.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default zonesUpdateApi;
