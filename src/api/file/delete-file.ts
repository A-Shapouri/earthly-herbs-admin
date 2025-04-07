import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface DeleteFileProps extends CacheProps{
  fileName: any
}

const deleteFileApi = ({ fileName }: DeleteFileProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.home.delete-file'],
      query: {
        fileName: fileName,
      },
    },
    withToken: true,
  });
};

export default deleteFileApi;
