import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface AttributesDeleteProps extends CacheProps{
  id: string
}

const attributesDeleteApi = ({ id }: AttributesDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.attributes.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default attributesDeleteApi;
