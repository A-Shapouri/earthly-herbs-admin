import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AlertActions } from '@store/alert/alert-action';

interface UpdateProps {
  getCallbackData: any,
  apiMessageText?: string
  apiMessageDescription?: string
}

const useUpdate = ({ getCallbackData, apiMessageText, apiMessageDescription }: UpdateProps) => {
  const dispatch = useDispatch();

  const [loading, setIsLoading] = useState<boolean>(false);

  const setData = async (props?: any) => {
    setIsLoading(true);
    try {
      const data = await getCallbackData({ ...props });
      setIsLoading(false);
      dispatch(AlertActions.showAlert({
        text: apiMessageText || 'Success!',
        description: apiMessageDescription || 'Data has been updated successfully',
        severity: 'success',
      }));
      return data;
    } catch (error: any) {
      dispatch(AlertActions.showAlert({
        text: 'Error',
        description: 'There has been a problem. please try again',
        severity: 'danger',
      }));
      setIsLoading(false);
      throw error;
    }
  };

  return {
    loading: loading,
    setData: setData,
  };
};

export default useUpdate;
