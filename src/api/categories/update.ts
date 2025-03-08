import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CategoriesUpdateProps extends CacheProps{
  payload: object
  id: string
}

const categoriesUpdateApi = ({ payload, id }: CategoriesUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.catalog.categories.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default categoriesUpdateApi;
