import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface UploadsDeleteProps extends CacheProps{
  id: string
}

const uploadsDeleteApi = ({ id }: UploadsDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.uploads.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default uploadsDeleteApi;
