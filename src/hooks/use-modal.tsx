import { useState } from 'react';

const useModal = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const closeModal = () => {
    setIsShow(false);
  };

  const showModal = () => {
    setIsShow(true);
  };
  return {
    isShow,
    closeModal,
    showModal,
  };
};

export default useModal;
