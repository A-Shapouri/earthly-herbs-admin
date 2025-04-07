import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface RefundsShowProps extends CacheProps{
  id: string
}

const refundsShowApi = ({ id }: RefundsShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.refunds.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default refundsShowApi;
