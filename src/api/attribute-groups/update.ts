import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface AttributeGroupsUpdateProps extends CacheProps{
  payload: object
  id: string
}

const attributeGroupsUpdateApi = ({ payload, id }: AttributeGroupsUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.catalog.attribute-groups.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default attributeGroupsUpdateApi;
