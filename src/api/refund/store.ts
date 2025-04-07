import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface RefundsStoreProps extends CacheProps{
  payload: object
}

const refundsStoreApi = ({ payload }: RefundsStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.catalog.refunds.index'],
    payload: payload,
    withToken: true,
  });
};

export default refundsStoreApi;
