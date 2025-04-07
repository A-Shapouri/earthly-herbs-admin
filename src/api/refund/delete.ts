import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface RefundsDeleteProps extends CacheProps{
  id: string
}

const refundsDeleteApi = ({ id }: RefundsDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.refunds.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default refundsDeleteApi;
