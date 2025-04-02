import { CatalogFormProps } from '@modules/catalog-form/catalog-form';
import { OptionsType } from './store';

export interface OptionsProps {
  loading: boolean;
  moduleForm: CatalogFormProps<OptionsType>;
  optionData: Array<any>;
  searchOption: (searchText: string) => void;
}
