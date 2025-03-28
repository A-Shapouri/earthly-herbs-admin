import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface AttributesShowProps extends CacheProps{
  id: string
}

const attributesShowApi = ({ id }: AttributesShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.attributes.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default attributesShowApi;
