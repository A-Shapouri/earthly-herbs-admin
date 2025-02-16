export type LanguageDetailsStore = {
  data: {
    value: string
    sortOrder: number
    status: number
  }

  error: {
    valueError: boolean
    errorFlag: boolean
  }

}

export const initialState: LanguageDetailsStore = {
  data: {
    value: '',
    sortOrder: 0,
    status: 1,
  },
  error: {
    valueError: false,
    errorFlag: false,
  },
};

export const reducer = (state: LanguageDetailsStore, action: any) => {
  switch (action.type) {
    case 'SET_INITIAL': {
      return {
        data: action.data,
        error: initialState.error,
      };
    }
    case 'SET_VALUE':
      let valueError = state.error.valueError;
      let errorFlag = state.error.errorFlag;
      if (action.id === 'value') {
        valueError = !action.value;
      }
      return {
        data: {
          ...state.data,
          [action.id]: action.value,
        },
        error: {
          valueError: valueError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let valueError = false;
      let errorFlag = false;

      if (!state.data.value) {
        valueError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          valueError: valueError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
