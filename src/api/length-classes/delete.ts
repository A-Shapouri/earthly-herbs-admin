import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LengthClassesDeleteProps extends CacheProps{
  id: string
}

const lengthClassesDeleteApi = ({ id }: LengthClassesDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.lengthClasses.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default lengthClassesDeleteApi;
