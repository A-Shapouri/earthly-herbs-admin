import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface AttributeGroupsListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const attributeGroupsListApi = ({ page = 0, sort = 'id', perPage = 10 }: AttributeGroupsListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.attribute-groups.index'],
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

export default attributeGroupsListApi;
