import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface TaxClassesUpdateProps extends CacheProps{
  payload: object
  id: string
}

const taxClassesUpdateApi = ({ payload, id }: TaxClassesUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.taxClasses.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default taxClassesUpdateApi;
