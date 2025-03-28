import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OptionsShowProps extends CacheProps{
  id: string
}

const optionsShowApi = ({ id }: OptionsShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.options.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default optionsShowApi;
