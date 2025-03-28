import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ManufacturersDeleteProps extends CacheProps{
  id: string
}

const manufacturersDeleteApi = ({ id }: ManufacturersDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.manufacturers.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default manufacturersDeleteApi;
