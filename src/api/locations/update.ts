import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LocationsUpdateProps extends CacheProps{
  payload: object
  id: string
}

const locationsUpdateApi = ({ payload, id }: LocationsUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.locations.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default locationsUpdateApi;
