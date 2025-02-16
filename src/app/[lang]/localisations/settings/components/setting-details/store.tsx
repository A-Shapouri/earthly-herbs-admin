export type SettingDetailsStore = {
  data: {
    code: string
    key: string
    value: string
    serialized: boolean
    store: object | null
    sortOrder: number
    status: number
  }

  error: {
    codeError: boolean
    keyError: boolean
    valueError: boolean
    errorFlag: boolean
  }

}

export const initialState: SettingDetailsStore = {
  data: {
    code: '',
    key: '',
    value: '',
    serialized: false,
    store: null,
    sortOrder: 0,
    status: 1,
  },
  error: {
    codeError: false,
    keyError: false,
    valueError: false,
    errorFlag: false,
  },
};

export const reducer = (state: SettingDetailsStore, action: any) => {
  switch (action.type) {
    case 'SET_INITIAL': {
      return {
        data: action.data,
        error: initialState.error,
      };
    }
    case 'SET_VALUE':
      let codeError = state.error.codeError;
      let keyError = state.error.keyError;
      let valueError = state.error.valueError;
      let errorFlag = state.error.errorFlag;
      if (action.id === 'code') {
        codeError = !action.value;
      }
      if (action.id === 'key') {
        keyError = !action.value;
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
          codeError: codeError,
          keyError: keyError,
          valueError: valueError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let codeError = false;
      let keyError = false;
      let valueError = false;
      let errorFlag = false;

      if (!state.data.code) {
        codeError = true;
        errorFlag = true;
      }
      if (!state.data.key) {
        keyError = true;
        errorFlag = true;
      }
      if (!state.data.value) {
        valueError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          codeError: codeError,
          keyError: keyError,
          valueError: valueError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
