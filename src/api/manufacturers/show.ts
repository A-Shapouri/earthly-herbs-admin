import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ManufacturersShowProps extends CacheProps{
  id: string
}

const manufacturersShowApi = ({ id }: ManufacturersShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.manufacturers.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default manufacturersShowApi;
