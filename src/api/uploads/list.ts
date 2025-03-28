import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface UploadsListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number

  searchText?: string
}

const uploadsListApi = ({ page = 0, sort = 'id', perPage = 10, searchText = '' }: UploadsListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.uploads.index'],
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

export default uploadsListApi;
