import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LengthClassDescriptionsShowProps extends CacheProps{
  id: string
}

const lengthClassDescriptionsShowApi = ({ id }: LengthClassDescriptionsShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.lengthClassDescriptions.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default lengthClassDescriptionsShowApi;
