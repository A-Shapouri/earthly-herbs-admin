import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LengthClassDescriptionsDeleteProps extends CacheProps{
  id: string
}

const lengthClassDescriptionsDeleteApi = ({ id }: LengthClassDescriptionsDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.lengthClassDescriptions.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default lengthClassDescriptionsDeleteApi;
