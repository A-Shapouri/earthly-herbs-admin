import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StoresUpdateProps extends CacheProps{
  payload: object
  id: string
}

const storesUpdateApi = ({ payload, id }: StoresUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.stores.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default storesUpdateApi;
