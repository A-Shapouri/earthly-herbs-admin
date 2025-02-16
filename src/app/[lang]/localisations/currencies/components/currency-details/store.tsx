export type CurrenciesDetailsStore = {
  data: {
    title: string
    code: string
    symbolLeft: string
    symbolRight: string
    decimalPlace: string
    value: string
    sortOrder: number
    status: number
  }

  error: {
    titleError: boolean
    codeError: boolean
    symbolLeftError: boolean
    symbolRightError: boolean
    decimalPlaceError: boolean
    valueError: boolean
    errorFlag: boolean
  }

}

export const initialState: CurrenciesDetailsStore = {
  data: {
    title: '',
    code: '',
    symbolLeft: '',
    symbolRight: '',
    decimalPlace: '',
    value: '',
    sortOrder: 0,
    status: 1,
  },
  error: {
    titleError: false,
    codeError: false,
    symbolLeftError: false,
    symbolRightError: false,
    decimalPlaceError: false,
    valueError: false,
    errorFlag: false,
  },
};

export const reducer = (state: CurrenciesDetailsStore, action: any) => {
  switch (action.type) {
    case 'SET_INITIAL': {
      return {
        data: action.data,
        error: initialState.error,
      };
    }
    case 'SET_VALUE':
      let titleError = state.error.titleError;
      let codeError = state.error.codeError;
      let symbolLeftError = state.error.symbolLeftError;
      let symbolRightError = state.error.symbolRightError;
      let decimalPlaceError = state.error.decimalPlaceError;
      let valueError = state.error.valueError;
      let errorFlag = state.error.errorFlag;

      if (action.id === 'title') {
        titleError = !action.value;
      }
      if (action.id === 'code') {
        codeError = !action.value;
      }
      if (action.id === 'symbolLeft') {
        symbolLeftError = !action.value;
      }
      if (action.id === 'symbolRight') {
        symbolRightError = !action.value;
      }
      if (action.id === 'decimalPlace') {
        decimalPlaceError = !action.value;
      }
      if (action.id === 'value') {
        valueError = !action.value;
      }
      return {
        data: {
          ...state.data,
          [action.id]: action.value,
        },
        error: {
          titleError: titleError,
          codeError: codeError,
          symbolLeftError: symbolLeftError,
          symbolRightError: symbolRightError,
          decimalPlaceError: decimalPlaceError,
          valueError: valueError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let titleError = false;
      let codeError = false;
      let symbolLeftError = false;
      let symbolRightError = false;
      let decimalPlaceError = false;
      let valueError = false;
      let errorFlag = false;

      if (!state.data.title) {
        titleError = true;
        errorFlag = true;
      }
      if (!state.data.code) {
        codeError = true;
        errorFlag = true;
      }
      if (!state.data.symbolLeft) {
        symbolLeftError = true;
        errorFlag = true;
      }
      if (!state.data.symbolRight) {
        symbolRightError = true;
        errorFlag = true;
      }
      if (!state.data.decimalPlace) {
        decimalPlaceError = true;
        errorFlag = true;
      }
      if (!state.data.value) {
        valueError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          titleError: titleError,
          codeError: codeError,
          symbolLeftError: symbolLeftError,
          symbolRightError: symbolRightError,
          decimalPlaceError: decimalPlaceError,
          valueError: valueError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
