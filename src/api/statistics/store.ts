import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StatisticsStoreProps extends CacheProps{
  payload: object
}

const statisticsStoreApi = ({ payload }: StatisticsStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.statistics.index'],
    payload: payload,
    withToken: true,
  });
};

export default statisticsStoreApi;
