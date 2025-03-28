import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OptionsUpdateProps extends CacheProps{
  payload: object
  id: string
}

const optionsUpdateApi = ({ payload, id }: OptionsUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.catalog.options.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default optionsUpdateApi;
