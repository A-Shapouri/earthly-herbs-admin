export type StatisticDetailsStore = {
  data: {
    value: string
    code: string
    sortOrder: number
    status: number
  }

  error: {
    valueError: boolean
    codeError: boolean
    errorFlag: boolean
  }

}

export const initialState: StatisticDetailsStore = {
  data: {
    value: '',
    code: '',
    sortOrder: 0,
    status: 1,
  },
  error: {
    valueError: false,
    codeError: false,
    errorFlag: false,
  },
};

export const reducer = (state: StatisticDetailsStore, action: any) => {
  switch (action.type) {
    case 'SET_INITIAL': {
      return {
        data: action.data,
        error: initialState.error,
      };
    }
    case 'SET_VALUE':
      let valueError = state.error.valueError;
      let codeError = state.error.codeError;
      let errorFlag = state.error.errorFlag;
      if (action.id === 'value') {
        valueError = !action.value;
      }
      if (action.id === 'code') {
        codeError = !action.value;
      }
      return {
        data: {
          ...state.data,
          [action.id]: action.value,
        },
        error: {
          valueError: valueError,
          codeError: codeError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let valueError = false;
      let codeError = false;
      let errorFlag = false;

      if (!state.data.value) {
        valueError = true;
        errorFlag = true;
      }
      if (!state.data.code) {
        codeError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          valueError: valueError,
          codeError: codeError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
