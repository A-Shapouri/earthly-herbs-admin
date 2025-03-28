import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ProductsStoreProps extends CacheProps{
  payload: object
}

const productsStoreApi = ({ payload }: ProductsStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.catalog.products.index'],
    payload: payload,
    withToken: true,
  });
};

export default productsStoreApi;
