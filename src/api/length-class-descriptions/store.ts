import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LengthClassDescriptionsStoreProps extends CacheProps{
  payload: object
}

const lengthClassDescriptionsStoreApi = ({ payload }: LengthClassDescriptionsStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.lengthClassDescriptions.index'],
    payload: payload,
    withToken: true,
  });
};

export default lengthClassDescriptionsStoreApi;
