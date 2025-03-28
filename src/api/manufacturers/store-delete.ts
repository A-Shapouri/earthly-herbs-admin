import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ManufacturersStoreDeleteProps extends CacheProps {
  id: string
}

const manufacturersStoreDeleteApi = ({ id }: ManufacturersStoreDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.manufacturers.store.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default manufacturersStoreDeleteApi;
