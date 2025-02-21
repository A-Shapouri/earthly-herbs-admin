import { getFromCookie, removeFromCookie } from '@utils/cookie';
import getParseUrl from '@utils/helpers/parse-url';
import routes from '@routes';

interface ConfigProps extends CacheProps {
  method: 'GET' | 'PUT' | 'DELETE' | 'POST' | 'PATCH'
  url: string | {
    pathname: string,
    query: object | any
  }
  payload?: any
  withToken?: boolean
  params?: object
  uploadFile?: boolean
  download?: boolean
  withPagination?: boolean
}

export interface CacheProps {
  cache?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload'
  next?: { revalidate: number }
}

export async function fetchApi({ method, payload, withToken, url, cache = 'no-cache', next, uploadFile = false, download, withPagination }: ConfigProps): Promise<any> {
  const parseUrl: string = getParseUrl(url);
  const baseURL = `http://74.208.77.41:8080/api`;

  const CatchFunction = async (error: any) => {
    const errorObject = {
      code: error?.status,
      message: error?.statusText,
    };
    if (error?.status === 401 && window.location.pathname !== routes['api.auth.login']) {
      removeFromCookie('token');
      if (window.location.pathname) {
        setTimeout(() => {
          window.location.replace(`${routes['route.auth.login']}?redirect=${encodeURIComponent(window.location.pathname)}`);
        }, 1000);
      }
    }
    throw errorObject;
  };

  // set token for Authorization
  const headers = new Headers({
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  const token = getFromCookie('token');
  if (withToken) {
    headers.append('Authorization', 'Bearer ' + token);
  }

  if (!uploadFile) {
    headers.append('Content-Type', 'application/json');
  }

  const controller = new AbortController();
  const signal = controller.signal;

  switch (method) {
    case 'GET': {
      return (
        fetch(encodeURI(`${baseURL}/${parseUrl}`), {
          headers: headers,
          next: next,
          cache: cache,
          method: 'GET',
          signal,
        })
          .then(async response => {
            if (!response.ok) {
              throw response;
            }
            if (download) {
              return response.blob();
            }
            const pagination = {
              total: parseInt(response.headers.get('X-Total-Count')) || 0,
              lastPage: parseInt(response.headers.get('X-Last-Page')) || 0,
              currentPage: parseInt(response.headers.get('X-Current-Page')) || 0,
              totalPage: parseInt(response.headers.get('X-Total-Page')) || 0,
              perPage: parseInt(response.headers.get('X-Per-Page')) || 0,
            };
            if (withPagination) {
              const data = await response.json();
              return {
                data: data,
                pagination: pagination,
              };
            }
            return response.json();
          }).then((data) => {
            return data;
          }).catch((reason) => reason.name === 'TypeError' ? controller.abort() : CatchFunction(reason))
      );
    }
    case 'PUT': {
      return (
        fetch(encodeURI(`${baseURL}/${parseUrl}`), {
          headers: headers,
          body: JSON.stringify(payload),
          cache: cache,
          next: next,
          method: 'PUT',
          signal,
        })
          .then(response => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
          .catch((reason) => reason.name === 'TypeError' ? controller.abort() : CatchFunction(reason))
      );
    }
    case 'DELETE': {
      return (
        fetch(encodeURI(`${baseURL}/${parseUrl}`), {
          headers: headers,
          next: next,
          cache: cache,
          method: 'DELETE',
          signal,
        })
          .then(response => {
            if (response.status !== 204) {
              throw response;
            }
            return {
              message: 'حذف با موفقیت انجام شد.',
            };
          })
          .catch((reason) => reason.name === 'TypeError' ? controller.abort() : CatchFunction(reason))
      );
    }
    case 'POST': {
      return (
        fetch(encodeURI(`${baseURL}/${parseUrl}`), {
          headers: headers,
          body: uploadFile ? payload : JSON.stringify(payload),
          next: next,
          cache: cache,
          method: 'POST',
          signal,
        })
          .then(response => {
            if (!response.ok) {
              throw response;
            }
            if (response.status === 204) {
              return null;
            } else {
              return response.json();
            }
          })
          .catch((reason) => reason.name === 'TypeError' ? controller.abort() : CatchFunction(reason))
      );
    }
    case 'PATCH': {
      return (
        fetch(encodeURI(`${baseURL}/${parseUrl}`), {
          headers: headers,
          body: uploadFile ? payload : JSON.stringify(payload),
          next: next,
          cache: cache,
          method: 'PATCH',
          signal,
        })
          .then(response => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
          .catch((reason) => reason.name === 'TypeError' ? controller.abort() : CatchFunction(reason))
      );
    }
  }
}
