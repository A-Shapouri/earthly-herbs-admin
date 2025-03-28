import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ProductsUpdateProps extends CacheProps{
  payload: object
  id: string
}

const productsUpdateApi = ({ payload, id }: ProductsUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.catalog.products.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default productsUpdateApi;
