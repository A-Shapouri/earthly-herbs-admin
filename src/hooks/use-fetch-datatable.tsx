import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AlertActions } from '@store/alert/alert-action';

interface DataType {
  data: Array<any>,
  pagination: {
    lastPage: number,
    perPage: number,
    currentPage: number,
    total: number,
  },
}

interface DataTableProps {
  getCallbackData: any,
}

const useFetchDatatable = ({ getCallbackData }: DataTableProps) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<DataType>({
    pagination: {
      lastPage: 0,
      perPage: 0,
      currentPage: 0,
      total: 0,
    },
    data: [],
  });
  const [loading, setIsLoading] = useState<boolean>(false);
  const [sortKey, setSortKey] = useState<string>('id');
  const [sortDirection, setSortDirection] = useState<string>('desc');

  const getData = async (props?: any) => {
    setIsLoading(true);
    try {
      const responseData = await getCallbackData({ ...props });
      setData({
        ...data,
        pagination: responseData.pagination,
        data: responseData.data,
      });
      setIsLoading(false);
    } catch (error: any) {
      dispatch(AlertActions.showAlert({
        text: error?.message || 'Api Call Failed!',
        description: 'please try again and reload the page',
        severity: 'danger',
      }));
      setIsLoading(false);
    }
  };

  const handleSort = (sort: Array<any>, props?: any) => {
    if (sort.length > 0) {
      setSortKey(sort[0].id);
      setSortDirection(sort[0].desc ? 'desc' : 'asc');
      getData({
        ...props,
        perPage: data?.pagination.perPage,
        sort: sort[0].id,
        direction: sort[0].desc ? 'desc' : 'asc',
        page: 0,
      });
    } else {
      setSortKey('id');
      setSortDirection('desc');
      getData({
        ...props,
        perPage: data?.pagination?.perPage,
        sort: sortKey,
        direction: sortDirection,
        page: 0,
      });
    }
  };

  const handleNextPage = (props?: any) => {
    console.log({ props });
    getData({
      ...props,
      perPage: data?.pagination?.perPage,
      page: data?.pagination?.currentPage + 1,
      sort: sortKey,
      direction: sortDirection,
    });
  };

  const handlePreviousPage = (props?: any) => {
    getData({
      ...props,
      perPage: data?.pagination?.perPage,
      page: data?.pagination?.currentPage - 1,
      sort: sortKey,
      direction: sortDirection,
    });
  };

  const handleGetPage = (n: number, props?: any) => {
    getData({
      ...props,
      perPage: data?.pagination?.perPage,
      page: n - 1,
      sort: sortKey,
      direction: sortDirection,
    });
  };

  const handleGetLimit = (limit: string, props?: any) => {
    console.log(limit, props, data);
    getData({
      ...props,
      perPage: limit,
      page: data.pagination.currentPage,
      sort: sortKey,
      direction: sortDirection,
    });
  };

  return {
    data: data?.data,
    lastPage: data?.pagination?.lastPage,
    perPage: data?.pagination?.perPage,
    currentPage: data?.pagination?.currentPage,
    total: data?.pagination?.total,
    loading: loading,
    getData: getData,
    handleSort: handleSort,
    handleNextPage: handleNextPage,
    handlePreviousPage: handlePreviousPage,
    handleGetPage: handleGetPage,
    handleGetLimit: handleGetLimit,
  };
};

export default useFetchDatatable;
