import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LocationsListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const locationsListApi = ({ page = 0, sort = 'id', perPage = 10 }: LocationsListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.locations.index'],
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

export default locationsListApi;
