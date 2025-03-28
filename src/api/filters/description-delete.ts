import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface FilterDescriptionDeleteProps extends CacheProps{
  id: string
}

const filterDescriptionDeleteApi = ({ id }: FilterDescriptionDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.filter-description.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default filterDescriptionDeleteApi;
