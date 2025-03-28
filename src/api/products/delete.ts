import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ProductsDeleteProps extends CacheProps{
  id: string
}

const productsDeleteApi = ({ id }: ProductsDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.products.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default productsDeleteApi;
