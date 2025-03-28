import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OptionDescriptionDeleteProps extends CacheProps{
  id: string
}

const optionDescriptionDeleteApi = ({ id }: OptionDescriptionDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.option-description.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default optionDescriptionDeleteApi;
