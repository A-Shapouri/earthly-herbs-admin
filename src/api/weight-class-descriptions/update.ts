import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface WeightClassDescriptionsUpdateProps extends CacheProps{
  payload: object
  id: string
}

const weightClassDescriptionsUpdateApi = ({ payload, id }: WeightClassDescriptionsUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.weightClassDescriptions.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default weightClassDescriptionsUpdateApi;
