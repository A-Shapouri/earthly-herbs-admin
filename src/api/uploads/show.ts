import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface UploadsShowProps extends CacheProps{
  id: string
}

const uploadsShowApi = ({ id }: UploadsShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.uploads.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default uploadsShowApi;
