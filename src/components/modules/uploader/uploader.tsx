'use client';
import React, { useRef } from 'react';
import Chip from '@elements/chip';
import Div from '@elements/div';
import Text from '@elements/text';
import Image from 'next/image';
import { UploaderProps } from './uploader.props';
import UploadCloudIcon from '@icons-components/upload-cloud-icon';
import useUpdate from '@hooks/use-update';
import uploadFileApi, { UploadFileProps } from '@api/file/upload-file';
import deleteFileApi, { DeleteFileProps } from '@api/file/delete-file';
import LoadingIndicator from '@elements/loading-indicator';

const Uploader = ({ file, fileCallback, title, initial }: UploaderProps) => {
  const uploadFileRef = useRef(null);

  const { setData, loading } = useUpdate({
    getCallbackData: (props: UploadFileProps) => uploadFileApi({ ...props }),
    apiMessageDescription: 'File has been uploaded successfully',
  });
  const { setData: deleteData, loading: deleteLoading } = useUpdate({
    getCallbackData: (props: DeleteFileProps) => deleteFileApi({ ...props }),
    apiMessageDescription: 'File has been deleted successfully',
  });

  const uploadFileHandler = (e: any) => {
    const value = e.target.files[0];
    setData({ file: value }).then((response) => {
      fileCallback(response.fileName);
    });
  };

  const removeFileHandler = () => {
    deleteData({ fileName: file }).then(() => {
      fileCallback(undefined);
    });
  };

  const handleClick = () => {
    // @ts-ignore
    uploadFileRef?.current?.click();
  };

  if (loading || deleteLoading) {
    return (
      <Div
        className={'flex-col w-full gap-2 bg-white h-72 md:h-48 rounded-md md:rounded-3xl items-center justify-center py-6 cursor-pointer transition-all duration-300'}>
        <LoadingIndicator color={'slate'} size={'huge'} />
      </Div>
    );
  }

  if (file || initial) {
    return (
      <Div
        className={'flex-col w-full gap-2 bg-white h-72 md:h-48 rounded-md md:rounded-3xl items-center justify-end py-6 cursor-pointer transition-all duration-300'}>
        <input type={'file'} className={'hidden'} ref={uploadFileRef} onChange={uploadFileHandler} />
        <Div className={'w-full h-64 relative justify-center items-center'}>
          <Chip
            size={'small'}
            color={'danger'}
            onDelete={removeFileHandler}
            value={'delete'}
            onClick={removeFileHandler}
            className={'absolute right-0 z-[20] -top-10'}
            variant={'outlined'}
          />
          <Div onClick={handleClick} >
            {file?.type === 'application/pdf' ? (
              <object className={'flex'} data={URL.createObjectURL(file)} type="application/pdf" width="80%" height="90%" />
            ) : (
              <Image fill={true} alt={'upload'} src={`${process.env.API_BASE_URL}${process.env.API_UPLOAD_BASE_PATH}/${file}` || initial} className={'object-contain'} />
            )}
          </Div>
        </Div>
      </Div>
    );
  }

  return (
    <Div onClick={handleClick} className={'flex-col w-full text-grey-500 gap-4 items-center justify-end cursor-pointer transition-all duration-300'}>
      <input type={'file'} className={'hidden'} ref={uploadFileRef} onChange={uploadFileHandler} />
      <Div className={'h-[117px] w-[129px] relative text-control-300'}>
        <UploadCloudIcon />
      </Div>
      <Text color={'grey.700'} typography={['xs', 'xs']}>
        {title}
      </Text>
    </Div>
  );
};

export default Uploader;
