import React, { useState } from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import Divider from '@elements/divider';
import AutoComplete from '@elements/auto-complete';
import MultiSelect from '@elements/multi-select';
import MainSection from '../main-section';
import SubSection from '../sub-section';

const Links = () => {
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState([]);
  const [downloads, setDownloads] = useState([]);
  const [products, setProducts] = useState([]);

  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {

  };

  const handleCategories = (newValue) => {
    setCategories(newValue);
  };

  const handleFilters = (newValue) => {
    setFilters(newValue);
  };

  const handleDownloads = (newValue) => {
    setDownloads(newValue);
  };

  const handleProducts = (newValue) => {
    setProducts(newValue);
  };
  return (
    <Div className={'w-full gap-6 grid md:grid-cols-6 grid-cols-1 mt-4'}>
      <MainSection title='Primary Info' className='col-span-4'>
        <AutoComplete
          className='md:col-span-3'
          searchList={['-- None --', 'Apple', 'Canon', 'HTC', 'Hewlett-Packard', 'Palm']}
          label='Manufacturer'
          emptyLabel='No Result'
        />
        <MultiSelect
          className='md:col-span-5'
          color='slate'
          size='small'
          rounded='small'
          label='Categories'
          onChange={handleCategories}
          optionsList={[{ id: 1, name: 'Category_1' }, { id: 2, name: 'Category_2' }, { id: 3, name: 'Category_3' }, { id: 4, name: 'Category_4' }]}
          id={'id'}
          text={'name'}
          value={categories}
        />
        <MultiSelect
          className='md:col-span-5'
          color='slate'
          size='small'
          rounded='small'
          label='Filters'
          onChange={handleFilters}
          optionsList={[{ id: 1, name: 'Filter_1' }, { id: 2, name: 'Filter_2' }, { id: 3, name: 'Filter_3' }, { id: 4, name: 'Filter_4' }]}
          id={'id'}
          text={'name'}
          value={filters}
        />
        <MultiSelect
          className='md:col-span-5'
          color='slate'
          size='small'
          rounded='small'
          label='Downloads'
          onChange={handleDownloads}
          optionsList={[{ id: 1, name: 'Download_1' }, { id: 2, name: 'Download_2' }, { id: 3, name: 'Download_3' }, { id: 4, name: 'Download_4' }]}
          id={'id'}
          text={'name'}
          value={downloads}
        />
        <MultiSelect
          className='md:col-span-5'
          color='slate'
          size='small'
          rounded='small'
          label='Related Products'
          onChange={handleProducts}
          optionsList={[{ id: 1, name: 'Product_1' }, { id: 2, name: 'Product_2' }, { id: 3, name: 'Product_3' }, { id: 4, name: 'Product_4' }]}
          id={'id'}
          text={'name'}
          value={products}
        />
      </MainSection>

    </Div>
  );
};

export default Links;
