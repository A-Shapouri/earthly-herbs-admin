import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface TaxClassesDeleteProps extends CacheProps{
  id: string
}

const taxClassesDeleteApi = ({ id }: TaxClassesDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.taxClasses.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default taxClassesDeleteApi;
