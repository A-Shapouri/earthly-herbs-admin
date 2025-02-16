import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface WeightClassDescriptionsShowProps extends CacheProps{
  id: string
}

const weightClassDescriptionsShowApi = ({ id }: WeightClassDescriptionsShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.weightClassDescriptions.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default weightClassDescriptionsShowApi;
