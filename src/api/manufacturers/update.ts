import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ManufacturersUpdateProps extends CacheProps{
  payload: object
  id: string
}

const manufacturersUpdateApi = ({ payload, id }: ManufacturersUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.catalog.manufacturers.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default manufacturersUpdateApi;
