import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CategoriesStoreProps extends CacheProps{
  payload: object
}

const categoriesStoreApi = ({ payload }: CategoriesStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.catalog.categories.index'],
    payload: payload,
    withToken: true,
  });
};

export default categoriesStoreApi;
