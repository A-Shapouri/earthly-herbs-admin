import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface TaxClassesListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const taxClassesListApi = ({ page = 0, sort = 'id', perPage = 10 }: TaxClassesListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.taxClasses.index'],
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

export default taxClassesListApi;
