import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface WeightClassDescriptionsStoreProps extends CacheProps{
  payload: object
}

const weightClassDescriptionsStoreApi = ({ payload }: WeightClassDescriptionsStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.weightClassDescriptions.index'],
    payload: payload,
    withToken: true,
  });
};

export default weightClassDescriptionsStoreApi;
