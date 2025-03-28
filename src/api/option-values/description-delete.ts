import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OptionValuesDescriptionDeleteProps extends CacheProps{
  id: string
}

const optionValuesDescriptionDeleteApi = ({ id }: OptionValuesDescriptionDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.option-values.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default optionValuesDescriptionDeleteApi;
