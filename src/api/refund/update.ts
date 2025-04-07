import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface RefundsUpdateProps extends CacheProps{
  payload: object
  id: string
}

const refundsUpdateApi = ({ payload, id }: RefundsUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.catalog.refunds.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default refundsUpdateApi;
