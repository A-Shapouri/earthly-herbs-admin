import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface AttributesUpdateProps extends CacheProps{
  payload: object
  id: string
}

const attributesUpdateApi = ({ payload, id }: AttributesUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.catalog.attributes.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default attributesUpdateApi;
