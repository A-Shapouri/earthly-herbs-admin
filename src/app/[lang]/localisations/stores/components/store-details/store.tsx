export type StoreDetailsStore = {
  data: {
    name: string
    url: string
    ssl: string
    sortOrder: number
    status: number
  }

  error: {
    nameError: boolean
    urlError: boolean
    sslError: boolean
    errorFlag: boolean
  }

}

export const initialState: StoreDetailsStore = {
  data: {
    name: '',
    url: '',
    ssl: '',
    sortOrder: 0,
    status: 1,
  },
  error: {
    nameError: false,
    urlError: false,
    sslError: false,
    errorFlag: false,
  },
};

export const reducer = (state: StoreDetailsStore, action: any) => {
  switch (action.type) {
    case 'SET_INITIAL': {
      return {
        data: action.data,
        error: initialState.error,
      };
    }
    case 'SET_VALUE':
      let nameError = state.error.nameError;
      let urlError = state.error.urlError;
      let sslError = state.error.sslError;
      let errorFlag = state.error.errorFlag;
      if (action.id === 'name') {
        nameError = !action.value;
      }
      if (action.id === 'ssl') {
        sslError = !action.value;
      }
      if (action.id === 'url') {
        urlError = !action.value;
      }
      return {
        data: {
          ...state.data,
          [action.id]: action.value,
        },
        error: {
          nameError: nameError,
          sslError: sslError,
          urlError: urlError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let nameError = false;
      let sslError = false;
      let urlError = false;
      let errorFlag = false;

      if (!state.data.name) {
        nameError = true;
        errorFlag = true;
      }
      if (!state.data.ssl) {
        sslError = true;
        errorFlag = true;
      }
      if (!state.data.url) {
        urlError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          nameError: nameError,
          sslError: sslError,
          urlError: urlError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
