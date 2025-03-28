import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LengthClassDescriptionsListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number

  searchText?: string
}

const lengthClassDescriptionsListApi = ({ page = 0, sort = 'id', perPage = 10, searchText }: LengthClassDescriptionsListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.lengthClassDescriptions.index'],
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

export default lengthClassDescriptionsListApi;
