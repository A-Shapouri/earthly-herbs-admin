import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface RecurringsStoreProps extends CacheProps{
  payload: object
}

const recurringsStoreApi = ({ payload }: RecurringsStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.catalog.recurrings.index'],
    payload: payload,
    withToken: true,
  });
};

export default recurringsStoreApi;
