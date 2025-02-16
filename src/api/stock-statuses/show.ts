import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StockStatusesShowProps extends CacheProps{
  id: string
}

const stockStatusesShowApi = ({ id }: StockStatusesShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.stockStatuses.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default stockStatusesShowApi;
