import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CategoriesShowProps extends CacheProps{
  id: string
}

const categoriesShowApi = ({ id }: CategoriesShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.categories.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default categoriesShowApi;
