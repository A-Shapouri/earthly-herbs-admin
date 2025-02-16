import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StatisticsUpdateProps extends CacheProps{
  payload: object
  id: string
}

const statisticsUpdateApi = ({ payload, id }: StatisticsUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.statistics.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default statisticsUpdateApi;
