import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StockStatusesListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number

  searchText?: string
}

const stockStatusesListApi = ({ page = 0, sort = 'id', perPage = 10, searchText }: StockStatusesListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.stockStatuses.index'],
      query: {
        page: page,
        sort: sort,
        size: perPage,
        searchText: searchText,
      },
    },
    withToken: true,
    withPagination: true,
  });
};

export default stockStatusesListApi;
