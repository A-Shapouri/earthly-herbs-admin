import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface WeightClassDescriptionsListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const weightClassDescriptionsListApi = ({ page = 0, sort = 'id', perPage = 10 }: WeightClassDescriptionsListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.weightClassDescriptions.index'],
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

export default weightClassDescriptionsListApi;
