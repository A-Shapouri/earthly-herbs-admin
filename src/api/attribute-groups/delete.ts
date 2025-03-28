import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface AttributeGroupsDeleteProps extends CacheProps{
  id: string
}

const attributeGroupsDeleteApi = ({ id }: AttributeGroupsDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.attribute-groups.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default attributeGroupsDeleteApi;
