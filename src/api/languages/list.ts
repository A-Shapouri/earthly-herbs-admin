import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LanguagesListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number

  searchText?: string
}

const languagesListApi = ({ page = 0, sort = 'id', perPage = 10, searchText }: LanguagesListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.languages.index'],
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

export default languagesListApi;
