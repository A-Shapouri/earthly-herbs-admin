import { CatalogFormProps } from '@modules/catalog-form/catalog-form';
import { ImageType } from './store';

export interface ImagesProps {
  loading: boolean;
  moduleForm: CatalogFormProps<ImageType>;
}
