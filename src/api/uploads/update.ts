import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface UploadsUpdateProps extends CacheProps{
  payload: object
  id: string
}

const uploadsUpdateApi = ({ payload, id }: UploadsUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.uploads.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default uploadsUpdateApi;
