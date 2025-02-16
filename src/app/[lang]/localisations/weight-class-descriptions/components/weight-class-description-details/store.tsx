export type LanguageDetailsStore = {
  data: {
    name: string
    unit: string
    sortOrder: number
    status: number
  }

  error: {
    nameError: boolean
    unitError: boolean
    errorFlag: boolean
  }

}

export const initialState: LanguageDetailsStore = {
  data: {
    name: '',
    unit: '',
    sortOrder: 0,
    status: 1,
  },
  error: {
    unitError: false,
    nameError: false,
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
      let nameError = state.error.nameError;
      let unitError = state.error.unitError;
      let errorFlag = state.error.errorFlag;
      if (action.id === 'name') {
        nameError = !action.value;
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
          nameError: nameError,
          unitError: unitError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let nameError = false;
      let unitError = false;
      let errorFlag = false;

      if (!state.data.name) {
        nameError = true;
        errorFlag = true;
      }
      if (!state.data.unit) {
        unitError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          nameError: nameError,
          unitError: unitError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
