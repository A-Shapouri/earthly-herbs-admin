import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface WeightClassesListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number

  searchText?: string
}

const weightClassesListApi = ({ page = 0, sort = 'id', perPage = 10, searchText }: WeightClassesListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.weightClasses.index'],
      query: {
        page: page,
        sort: sort,
        size: perPage,
        searchText: searchText,
      },
    },
    withToken: true,
    withPagination: true,
  });
};

export default weightClassesListApi;
