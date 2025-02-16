import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface UploadsStoreProps extends CacheProps{
  payload: object
}

const uploadsStoreApi = ({ payload }: UploadsStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.uploads.index'],
    payload: payload,
    withToken: true,
  });
};

export default uploadsStoreApi;
