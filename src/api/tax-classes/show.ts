import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface TaxClassesShowProps extends CacheProps{
  id: string
}

const taxClassesShowApi = ({ id }: TaxClassesShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.taxClasses.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default taxClassesShowApi;
