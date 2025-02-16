import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LengthClassesShowProps extends CacheProps{
  id: string
}

const lengthClassesShowApi = ({ id }: LengthClassesShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.lengthClasses.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default lengthClassesShowApi;
