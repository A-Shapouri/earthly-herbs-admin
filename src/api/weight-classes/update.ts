import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface WeightClassesUpdateProps extends CacheProps{
  payload: object
  id: string
}

const weightClassesUpdateApi = ({ payload, id }: WeightClassesUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.weightClasses.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default weightClassesUpdateApi;
