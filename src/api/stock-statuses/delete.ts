import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StockStatusesDeleteProps extends CacheProps{
  id: string
}

const stockStatusesDeleteApi = ({ id }: StockStatusesDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.stockStatuses.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default stockStatusesDeleteApi;
