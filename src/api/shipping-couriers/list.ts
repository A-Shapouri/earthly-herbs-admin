import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ShippingCouriersListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const shippingCouriersListApi = ({ page = 0, sort = 'id', perPage = 10 }: ShippingCouriersListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.shippingCouriers.index'],
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

export default shippingCouriersListApi;
