import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OptionValuesUpdateProps extends CacheProps{
  payload: object
  id: string
}

const optionValuesUpdateApi = ({ payload, id }: OptionValuesUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.catalog.option-values.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default optionValuesUpdateApi;
