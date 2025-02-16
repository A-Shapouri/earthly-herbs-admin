import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AlertActions } from '@store/alert/alert-action';

interface DataTableProps {
  getCallbackData: any,
}

const useFetch = ({ getCallbackData }: DataTableProps) => {
  const dispatch = useDispatch();

  const [data, setData] = useState<any | null>(null);
  const [loading, setIsLoading] = useState<boolean>(false);

  const getData = async (props?: any) => {
    setIsLoading(true);
    try {
      const data = await getCallbackData({ ...props });
      setData(data);
      setIsLoading(false);
      return data;
    } catch (error: any) {
      dispatch(AlertActions.showAlert({ text: error?.message, severity: 'danger' }));
      setIsLoading(false);
    }
  };

  return {
    data: data,
    loading: loading,
    getData: getData,
  };
};

export default useFetch;
