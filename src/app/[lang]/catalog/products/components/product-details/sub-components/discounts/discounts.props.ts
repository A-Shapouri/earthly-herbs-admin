import { CatalogFormProps } from '@modules/catalog-form/catalog-form';
import { DiscountType } from './store';

export interface DiscountsProps {
  loading: boolean;
  moduleForm: CatalogFormProps<DiscountType>;
  customerGroupData: Array<any>;
  searchCustomerGroup: (searchText: string) => void;
}
