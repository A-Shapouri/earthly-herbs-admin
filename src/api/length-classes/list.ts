import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LengthClassesListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const lengthClassesListApi = ({ page = 0, sort = 'id', perPage = 10 }: LengthClassesListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.lengthClasses.index'],
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

export default lengthClassesListApi;
