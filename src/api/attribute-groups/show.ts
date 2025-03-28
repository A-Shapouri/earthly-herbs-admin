import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface AttributeGroupsShowProps extends CacheProps{
  id: string
}

const attributeGroupsShowApi = ({ id }: AttributeGroupsShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.attribute-groups.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default attributeGroupsShowApi;
