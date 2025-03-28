import React, { useState } from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import FormControlLabel from '@elements/form-control-label';
import Checkbox from '@elements/checkbox';
import MainSection from '@layouts/main-section';
import Select from '@elements/select';
import { ProductGeneralsStore } from './store';
import SubSection from '@layouts/sub-section';
import AutoComplete from '@modules/auto-complete';
import Uploader from '@modules/uploader';

const General = ({
  state,
  dispatch,
  locationData,
  loading,
  searchLocation,
  stockStatusData,
  searchStockStatus,
  manufacturerData,
  searchManufacturer,
  taxClassData,
  searchTaxClass,
  lengthClassData,
  searchLengthClass,
  weightClassData,
  searchWeightClass,
}:
  {
    state: ProductGeneralsStore,
    dispatch: any,
    locationData: Array<any>,
    loading: boolean,
    searchLocation: any,
    stockStatusData: Array<any>,
    searchStockStatus: any,
    manufacturerData: Array<any>,
    searchManufacturer: any,
    taxClassData: Array<any>,
    searchTaxClass: any,
    lengthClassData: Array<any>,
    searchLengthClass: any,
    weightClassData: Array<any>,
    searchWeightClass: any,
  }) => {
  const [image, setImage] = useState<string | null>(null);

  const handleChangeValue = ({ key, value }: { key: string, value: string | boolean }) => {
    dispatch({
      type: 'SET_GENERAL_VALUE',
      key: key,
      value: value,
    });
  };

  return (
    <Div className={'w-full gap-6 grid md:grid-cols-3 grid-cols-1 mt-4 grid-flow-dense'}>
      <MainSection priority={2} title='General Info' className='md:row-span-1 md:col-span-2'>
        <TextField
          size='small'
          value={state.general.model}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'model', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Product Model'}
        />
        <TextField
          size='small'
          value={state.general.sku}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'sku', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Product SKU'}
        />
        <TextField
          size='small'
          value={state.general.ean}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'ean', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Product EAN'}
        />
        <TextField
          size='small'
          value={state.general.upc}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'upc', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Product UPC'}
        />
        <TextField
          size='small'
          value={state.general.jan}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'jan', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Product JAN'}
        />
        <TextField
          size='small'
          value={state.general.isbn}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'isbn', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Product ISBN'}
        />
        <TextField
          size='small'
          value={state.general.mpn}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'mpn', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Product MPN'}
        />
        <FormControlLabel className='md:col-span-3' label={'Shipping'}>
          <Checkbox
            onChange={() => handleChangeValue({ key: 'shipping', value: !state.general.shipping })}
            color={'slate'}
            checked={state.general.shipping}
          />
        </FormControlLabel>
      </MainSection>
      <MainSection priority={2} title='General Info' className='md:row-span-1 md:col-span-2'>
        <TextField
          size='small'
          value={state.general.quantity}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'quantity', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Product Quantity'}
        />
        <TextField
          size='small'
          value={state.general.price}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'price', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Product Price'}
        />
        <TextField
          size='small'
          value={state.general.points}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'points', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Product Points'}
        />
        <TextField
          size='small'
          value={state.general.weight}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'weight', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Product Weight'}
        />
        <TextField
          size='small'
          value={state.general.length}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'length', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Product Length'}
        />
        <TextField
          size='small'
          value={state.general.width}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'width', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Product Width'}
        />
        <TextField
          size='small'
          value={state.general.height}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'height', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Product Height'}
        />
        <TextField
          size='small'
          value={state.general.minimum}
          rounded='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ key: 'minimum', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Product Minimum'}
        />
        <TextField
          size='small'
          value={state.general.viewed}
          rounded='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ key: 'viewed', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Product Viewed'}
        />
        <FormControlLabel className='md:col-span-3' label={'Subtract'}>
          <Checkbox
            onChange={() => handleChangeValue({ key: 'subtract', value: !state.general.subtract })}
            color={'slate'}
            checked={state.general.subtract}
          />
        </FormControlLabel>
      </MainSection>
      <SubSection priority={1} title='Image' className=' md:col-span-1'>
        <Uploader
          file={image}
          title={'Click to Upload Image'}
          fileCallback={(file) => setImage(file)}
        />
      </SubSection>
      <MainSection priority={3} title='Secondary Info' className='md:row-span-1 md:col-span-2'>
        <TextField
          size='small'
          value={state.general.minimum}
          rounded='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ key: 'minimum', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Product Minimum'}
        />
        <TextField
          size='small'
          value={state.general.viewed}
          rounded='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ key: 'viewed', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Product Viewed'}
        />
        <TextField
          size='small'
          value={state.general.sortOrder}
          rounded='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ key: 'sortOrder', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Product Sort Order'}
        />
        <Select
          rounded='small'
          value={state?.general?.status?.toString()}
          size='small'
          className='w-full md:col-span-3'
          label={'Product Status'}
          optionsList={[{ id: '1', title: 'Active' }, { id: '0', title: 'In Active' }]}
          onChange={(newValue) => handleChangeValue({ key: 'status', value: newValue })}
          id={'id'}
          text={'title'} />
      </MainSection>
      <SubSection priority={1} title='Info' className='md:col-span-1 md:h-fit'>
        <AutoComplete
          getSearchData={(searchText) => searchLocation(searchText)}
          searchValue={state.general.location ? locationData?.find((value) => value?.id === state?.general.location) || '' : ''}
          className={'w-full md:col-span-2 z-50'}
          data={locationData}
          loading={loading}
          handleSelect={(value: any) => handleChangeValue({ key: 'location', value: value.id })}
          label={'Location'}
          error={state.error.location}
          helperText={state.error.location ? 'Location is required' : undefined}
          keyValue={'name'}
          id={'id'}
        />
        <AutoComplete
          getSearchData={(searchText) => searchStockStatus(searchText)}
          searchValue={state.general.stockStatusId ? stockStatusData?.find((value) => value?.id === state?.general.stockStatusId) || '' : ''}
          className={'w-full md:col-span-2 z-40'}
          data={stockStatusData}
          loading={loading}
          handleSelect={(value: any) => handleChangeValue({ key: 'stockStatusId', value: value.id })}
          label={'Stock Status'}
          error={state.error.stockStatusId}
          helperText={state.error.stockStatusId ? 'Stock Status is required' : undefined}
          keyValue={'name'}
          id={'id'}
        />
        <AutoComplete
          getSearchData={(searchText) => searchManufacturer(searchText)}
          searchValue={state.general.manufacturerId ? manufacturerData?.find((value) => value?.id === state?.general.manufacturerId) || '' : ''}
          className={'w-full md:col-span-2 z-30'}
          data={manufacturerData}
          loading={loading}
          handleSelect={(value: any) => handleChangeValue({ key: 'manufacturerId', value: value.id })}
          label={'Manufacturer'}
          error={state.error.manufacturerId}
          helperText={state.error.manufacturerId ? 'Manufacturer is required' : undefined}
          keyValue={'name'}
          id={'id'}
        />
        <AutoComplete
          getSearchData={(searchText) => searchTaxClass(searchText)}
          searchValue={state.general.taxClassId ? taxClassData?.find((value) => value?.id === state?.general.taxClassId) || '' : ''}
          className={'w-full md:col-span-2 z-20'}
          data={taxClassData}
          loading={loading}
          handleSelect={(value: any) => handleChangeValue({ key: 'taxClassId', value: value.id })}
          label={'Tax Class'}
          error={state.error.taxClassId}
          helperText={state.error.taxClassId ? 'Tax Class is required' : undefined}
          keyValue={'name'}
          id={'id'}
        />
        <AutoComplete
          getSearchData={(searchText) => searchLengthClass(searchText)}
          searchValue={state.general.lengthClassId ? taxClassData?.find((value) => value?.id === state?.general.lengthClassId) || '' : ''}
          className={'w-full md:col-span-2 z-[15]'}
          data={lengthClassData}
          loading={loading}
          handleSelect={(value: any) => handleChangeValue({ key: 'lengthClassId', value: value.id })}
          label={'Length Class'}
          error={state.error.lengthClassId}
          helperText={state.error.lengthClassId ? 'Length Class is required' : undefined}
          keyValue={'name'}
          id={'id'}
        />
        <AutoComplete
          getSearchData={(searchText) => searchWeightClass(searchText)}
          searchValue={state.general.weightClassId ? taxClassData?.find((value) => value?.id === state?.general.weightClassId) || '' : ''}
          className={'w-full md:col-span-2'}
          data={weightClassData}
          loading={loading}
          handleSelect={(value: any) => handleChangeValue({ key: 'weightClassId', value: value.id })}
          label={'Weight Class'}
          error={state.error.weightClassId}
          helperText={state.error.weightClassId ? 'Weight Class is required' : undefined}
          keyValue={'name'}
          id={'id'}
        />
      </SubSection>
    </Div>
  );
};

export default General;
