import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StoresDeleteProps extends CacheProps{
  id: string
}

const storesDeleteApi = ({ id }: StoresDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.stores.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default storesDeleteApi;
