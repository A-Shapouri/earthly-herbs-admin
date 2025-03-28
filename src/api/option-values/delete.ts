import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OptionsDeleteProps extends CacheProps{
  id: string
}

const optionsDeleteApi = ({ id }: OptionsDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.option-values-description.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default optionsDeleteApi;
