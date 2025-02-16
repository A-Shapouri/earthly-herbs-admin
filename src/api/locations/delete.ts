import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LocationsDeleteProps extends CacheProps{
  id: string
}

const locationsDeleteApi = ({ id }: LocationsDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.locations.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default locationsDeleteApi;
