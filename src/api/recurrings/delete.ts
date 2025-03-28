import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface RecurringsDeleteProps extends CacheProps{
  id: string
}

const recurringsDeleteApi = ({ id }: RecurringsDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.recurrings.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default recurringsDeleteApi;
