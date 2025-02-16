import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LengthClassesUpdateProps extends CacheProps{
  payload: object
  id: string
}

const lengthClassesUpdateApi = ({ payload, id }: LengthClassesUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.lengthClasses.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default lengthClassesUpdateApi;
