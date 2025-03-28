import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OptionValuesShowProps extends CacheProps{
  id: string
}

const optionValuesShowApi = ({ id }: OptionValuesShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.option-values.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default optionValuesShowApi;
