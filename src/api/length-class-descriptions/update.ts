import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LengthClassDescriptionsUpdateProps extends CacheProps{
  payload: object
  id: string
}

const lengthClassDescriptionsUpdateApi = ({ payload, id }: LengthClassDescriptionsUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.lengthClassDescriptions.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default lengthClassDescriptionsUpdateApi;
