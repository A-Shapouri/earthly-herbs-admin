import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface RecurringsUpdateProps extends CacheProps{
  payload: object
  id: string
}

const recurringsUpdateApi = ({ payload, id }: RecurringsUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.catalog.recurrings.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default recurringsUpdateApi;
