import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface WeightClassesShowProps extends CacheProps{
  id: string
}

const weightClassesShowApi = ({ id }: WeightClassesShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.weightClasses.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default weightClassesShowApi;
