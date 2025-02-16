import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface WeightClassesDeleteProps extends CacheProps{
  id: string
}

const weightClassesDeleteApi = ({ id }: WeightClassesDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.weightClasses.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default weightClassesDeleteApi;
