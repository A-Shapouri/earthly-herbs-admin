import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface AttributeDescriptionDeleteProps extends CacheProps{
  id: string
}

const attributeDescriptionDeleteApi = ({ id }: AttributeDescriptionDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.attribute-description.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default attributeDescriptionDeleteApi;
