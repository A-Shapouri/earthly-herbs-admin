'use client';
import React, { useRef } from 'react';
import Chip from '@elements/chip';
import Div from '@elements/div';
import Text from '@elements/text';
import Image from 'next/image';
import { UploaderProps } from './uploader.props';
import UploadCloudIcon from '@icons-components/upload-cloud-icon';

const Uploader = ({ file, fileCallback, title, initial }: UploaderProps) => {
  const uploadFileRef = useRef(null);

  const uploadFileHandler = (e: any) => {
    const value = e.target.files[0];
    fileCallback(value);
  };

  const removeFileHandler = () => {
    fileCallback(undefined);
  };

  const handleClick = () => {
    // @ts-ignore
    uploadFileRef?.current?.click();
  };
  if (file || initial) {
    return (
      <Div onClick={handleClick} className={'flex-col w-full gap-2 bg-white h-72 md:h-48 rounded-md md:rounded-3xl items-center justify-end py-6 cursor-pointer'}>
        <input type={'file'} className={'hidden'} ref={uploadFileRef} onChange={uploadFileHandler} />
        <Div className={'w-full h-64 relative justify-center items-center'}>
          <Chip color={'danger'} onDelete={removeFileHandler} value={'delete'} onClick={removeFileHandler} className={'absolute left-0 z-[20] -top-6'} variant={'outlined'} />
          {file?.type === 'application/pdf' ? (
            <object className={'flex'} data={URL.createObjectURL(file)} type="application/pdf" width="80%" height="90%" />
          ) : (
            <Image fill={true} alt={'upload'} src={file ? URL.createObjectURL(file) : initial} className={'object-contain'} />
          )}
        </Div>
      </Div>
    );
  }

  return (
    <Div onClick={handleClick} className={'flex-col w-full text-grey-500 gap-4 items-center justify-end cursor-pointer'}>
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
