import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StockStatusesUpdateProps extends CacheProps{
  payload: object
  id: string
}

const stockStatusesUpdateApi = ({ payload, id }: StockStatusesUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.stockStatuses.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default stockStatusesUpdateApi;
