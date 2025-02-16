import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface SettingsListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const settingsListApi = ({ page = 0, sort = 'id', perPage = 10 }: SettingsListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.settings.index'],
      query: {
        page: page,
        sort: sort,
        size: perPage,
      },
    },
    withToken: true,
    withPagination: true,
  });
};

export default settingsListApi;
