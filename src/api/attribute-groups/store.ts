import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface AttributeGroupsStoreProps extends CacheProps{
  payload: object
}

const attributeGroupsStoreApi = ({ payload }: AttributeGroupsStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.catalog.attribute-groups.index'],
    payload: payload,
    withToken: true,
  });
};

export default attributeGroupsStoreApi;
