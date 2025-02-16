import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StatisticsDeleteProps extends CacheProps{
  id: string
}

const statisticsDeleteApi = ({ id }: StatisticsDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.statistics.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default statisticsDeleteApi;
