export type StockStatusDetailsStore = {
  data: {
    name: string
    languageId: string
    sortOrder: number
    status: number
  }

  error: {
    nameError: boolean
    languageIdError: boolean
    errorFlag: boolean
  }

}

export const initialState: StockStatusDetailsStore = {
  data: {
    name: '',
    languageId: '',
    sortOrder: 0,
    status: 1,
  },
  error: {
    nameError: false,
    languageIdError: false,
    errorFlag: false,
  },
};

export const reducer = (state: StockStatusDetailsStore, action: any) => {
  switch (action.type) {
    case 'SET_INITIAL': {
      return {
        data: action.data,
        error: initialState.error,
      };
    }
    case 'SET_VALUE':
      let nameError = state.error.nameError;
      let languageIdError = state.error.languageIdError;
      let errorFlag = state.error.errorFlag;
      if (action.id === 'name') {
        nameError = !action.value;
      }
      if (action.id === 'languageId') {
        languageIdError = !action.value;
      }
      return {
        data: {
          ...state.data,
          [action.id]: action.value,
        },
        error: {
          nameError: nameError,
          languageIdError: languageIdError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let nameError = false;
      let languageIdError = false;
      let errorFlag = false;

      if (!state.data.name) {
        nameError = true;
        errorFlag = true;
      }
      if (!state.data.languageId) {
        languageIdError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          nameError: nameError,
          languageIdError: languageIdError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
