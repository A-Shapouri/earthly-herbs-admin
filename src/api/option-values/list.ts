import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OptionValuesListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const optionValuesListApi = ({ page = 0, sort = 'id', perPage = 10 }: OptionValuesListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.option-values.index'],
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

export default optionValuesListApi;
