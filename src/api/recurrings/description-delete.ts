import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface RecurringDescriptionDeleteProps extends CacheProps{
  id: string
}

const recurringDescriptionDeleteApi = ({ id }: RecurringDescriptionDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.recurring-descriptions.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default recurringDescriptionDeleteApi;
