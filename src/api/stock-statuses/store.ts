import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StockStatusesStoreProps extends CacheProps{
  payload: object
}

const stockStatusesStoreApi = ({ payload }: StockStatusesStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.stockStatuses.index'],
    payload: payload,
    withToken: true,
  });
};

export default stockStatusesStoreApi;
