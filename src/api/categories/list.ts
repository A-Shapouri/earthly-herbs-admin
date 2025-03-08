import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CategoriesListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const categoriesListApi = ({ page = 0, sort = 'id', perPage = 10 }: CategoriesListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.categories.index'],
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

export default categoriesListApi;
