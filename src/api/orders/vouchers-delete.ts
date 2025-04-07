import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OrderVoucherDeleteProps extends CacheProps{
  id: string
}

const orderVoucherDeleteApi = ({ id }: OrderVoucherDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.order-voucher.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default orderVoucherDeleteApi;
