import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StatisticsListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const statisticsListApi = ({ page = 0, sort = 'id', perPage = 10 }: StatisticsListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.statistics.index'],
      query: {
        page: page,
        sort: sort,
        size: perPage,
      },
    },
    withToken: true,
    withPagination: true,
  });
};

export default statisticsListApi;
