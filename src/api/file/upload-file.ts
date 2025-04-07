import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface UploadFileProps extends CacheProps{
  file: any
}

const uploadFileApi = ({ file }: UploadFileProps) => {
  const formData = new FormData();
  formData.append('file', file);

  return fetchApi({
    method: 'POST',
    url: routes['api.home.upload-file'],
    payload: formData,
    withToken: true,
    uploadFile: true,
  });
};

export default uploadFileApi;
