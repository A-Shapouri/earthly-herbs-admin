import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

interface LoginWithPasswordProps extends CacheProps{
  email: string
  password: string
}

const loginWithPasswordApi = ({ email, password }: LoginWithPasswordProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.auth.login'],
    payload: {
      username: email,
      password: password,
      rememberMe: true,
    },
  });
};

export default loginWithPasswordApi;
