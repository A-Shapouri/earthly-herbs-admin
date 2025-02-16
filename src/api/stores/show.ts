import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StoresShowProps extends CacheProps{
  id: string
}

const storesShowApi = ({ id }: StoresShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.stores.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default storesShowApi;
