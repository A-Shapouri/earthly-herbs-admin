'use client';
import React, { useLayoutEffect, useState } from 'react';

import DataTable from '@modules/data-table';
import Text from '@elements/text';
import Button from '@elements/button';
import Div from '@elements/div';
import Breadcrumbs from '@elements/breadcrumbs';

import settingsListApi, { SettingsListProps } from '@api/settings/list';
import settingsDeleteApi, { SettingsDeleteProps } from '@api/settings/delete';

import { AddIcon, SearchIcon } from '@icons';
import useModal from '@hooks/use-modal';
import useFetchDatatable from '@hooks/use-fetch-datatable';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';

import { header, columns } from './setting-columns';
import Filter from './components/filter';
import ConfirmationDialog from '@modules/confirmation-dialog';
import useUpdate from '@hooks/use-update';

const Settings = () => {
  const { isShow, showModal, closeModal } = useModal();
  const { isShow: isDeleteShow, showModal: showDeleteModal, closeModal: closeDeleteModal } = useModal();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const {
    data,
    loading,
    getData,
    perPage,
    total,
    currentPage,
    lastPage,
  } = useFetchDatatable({
    getCallbackData: (props: SettingsListProps) => settingsListApi({ ...props }),
  });
  const {
    setData,
    loading: deleteLoading,
  } = useUpdate({
    getCallbackData: (props: SettingsDeleteProps) => settingsDeleteApi({ ...props }),
    apiMessageText: 'Delete Succeeded',
    apiMessageDescription: 'The setting has been Deleted Successfully.',
  });

  useLayoutEffect(() => {
    getData();
  }, []);

  const handleUpdate = (value?: string, info?: string | object) => {
    if (value === 'deleteRecord' && typeof info === 'string') {
      showDeleteModal();
      setDeleteId(info);
    }
  };

  const handleDeletePermission = () => {
    closeDeleteModal();
    setData({ id: deleteId }).then(() => {
      getData();
      setDeleteId(null);
    });
  };

  const handleCancelDelete = () => {
    setDeleteId(null);
    closeDeleteModal();
  };

  return (
    <Div className={'flex-col justify-center w-full gap-4 md:gap-8'}>
      <Div className={'flex-col sm:flex-row w-full justify-between gap-4'}>
        <Breadcrumbs
          breadcrumbsData={[
            {
              label: 'Settings',
            },
          ]}
        />
        <Text type={'bold'} typography={['xl', 'xl']} align={'start'}>Settings</Text>
      </Div>
      <Div className={'self-end gap-x-4 justify-end w-full md:w-auto'}>
        <Button
          href={getParseRoute({ pathname: routes['route.localisations.settings.create'], locale: 'en' })}
          className={'w-32'}
          rounded={'small'}
          size={'small'}
          color={'slate'}
          startAdornment={<AddIcon />}>
          Create
        </Button>
        <Button
          onClick={showModal}
          className={'w-32'}
          rounded={'small'}
          size={'small'}
          variant={'outlined'}
          color={'indigo'}
          startAdornment={<SearchIcon />}>
          Search
        </Button>
      </Div>
      <DataTable
        updateData={(value, info) => handleUpdate(value, info)}
        isLoading={loading || deleteLoading}
        header={header}
        column={columns}
        data={data || []}
        currentPage={currentPage + 1}
        getCurrentPage={() => {}}
        lastPage={lastPage + 1}
        nextPage={() => {}}
        perPage={perPage || 10}
        previousPage={() => {}}
        total={total || 50}
        mobileColumns={['code', 'serialized', 'operations']}
      />
      <Filter
        isShow={isShow}
        closeModal={closeModal}
        loading={loading}
        getSearchResult={() => { }}
      />
      <ConfirmationDialog
        onClose={closeDeleteModal}
        open={isDeleteShow}
        alertText={'Are you sure you want to delete this record?'}
        submitHandler={handleDeletePermission}
        cancelHandler={handleCancelDelete}
      />
    </Div>
  );
};

export default Settings;
