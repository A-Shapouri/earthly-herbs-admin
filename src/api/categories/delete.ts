import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CategoriesDeleteProps extends CacheProps{
  id: string
}

const categoriesDeleteApi = ({ id }: CategoriesDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.categories.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default categoriesDeleteApi;
