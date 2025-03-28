import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OptionValuesStoreProps extends CacheProps{
  payload: object
}

const optionValuesStoreApi = ({ payload }: OptionValuesStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.catalog.option-values.index'],
    payload: payload,
    withToken: true,
  });
};

export default optionValuesStoreApi;
