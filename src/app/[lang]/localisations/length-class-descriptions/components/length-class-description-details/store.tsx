export type LanguageDetailsStore = {
  data: {
    title: string
    unit: string
    sortOrder: number
    status: number
  }

  error: {
    titleError: boolean
    unitError: boolean
    errorFlag: boolean
  }

}

export const initialState: LanguageDetailsStore = {
  data: {
    title: '',
    unit: '',
    sortOrder: 0,
    status: 1,
  },
  error: {
    unitError: false,
    titleError: false,
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
      let titleError = state.error.titleError;
      let unitError = state.error.unitError;
      let errorFlag = state.error.errorFlag;
      if (action.id === 'title') {
        titleError = !action.value;
      }
      if (action.id === 'unit') {
        unitError = !action.value;
      }
      return {
        data: {
          ...state.data,
          [action.id]: action.value,
        },
        error: {
          titleError: titleError,
          unitError: unitError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let titleError = false;
      let unitError = false;
      let errorFlag = false;

      if (!state.data.title) {
        titleError = true;
        errorFlag = true;
      }
      if (!state.data.unit) {
        unitError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          titleError: titleError,
          unitError: unitError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
