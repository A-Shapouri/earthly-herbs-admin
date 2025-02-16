import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StatisticsShowProps extends CacheProps{
  id: string
}

const statisticsShowApi = ({ id }: StatisticsShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.statistics.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default statisticsShowApi;
