import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface WeightClassDescriptionsDeleteProps extends CacheProps{
  id: string
}

const weightClassDescriptionsDeleteApi = ({ id }: WeightClassDescriptionsDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.weightClassDescriptions.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default weightClassDescriptionsDeleteApi;
