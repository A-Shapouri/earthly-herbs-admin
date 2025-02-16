import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface GeoZonesDeleteProps extends CacheProps{
  id: string
}

const geoZonesDeleteApi = ({ id }: GeoZonesDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.geoZones.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default geoZonesDeleteApi;
