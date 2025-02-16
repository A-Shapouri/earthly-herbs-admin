export type UploadDetailsStore = {
  data: {
    name: string
    code: string
    filename: string
    sortOrder: number
    status: number
  }

  error: {
    nameError: boolean
    codeError: boolean
    filenameError: boolean
    errorFlag: boolean
  }

}

export const initialState: UploadDetailsStore = {
  data: {
    name: '',
    code: '',
    filename: '',
    sortOrder: 0,
    status: 1,
  },
  error: {
    nameError: false,
    codeError: false,
    filenameError: false,
    errorFlag: false,
  },
};

export const reducer = (state: UploadDetailsStore, action: any) => {
  switch (action.type) {
    case 'SET_INITIAL': {
      return {
        data: action.data,
        error: initialState.error,
      };
    }
    case 'SET_VALUE':
      let nameError = state.error.nameError;
      let codeError = state.error.codeError;
      let filenameError = state.error.filenameError;
      let errorFlag = state.error.errorFlag;
      if (action.id === 'name') {
        nameError = !action.value;
      }
      if (action.id === 'code') {
        codeError = !action.value;
      }
      if (action.id === 'filename') {
        filenameError = !action.value;
      }
      return {
        data: {
          ...state.data,
          [action.id]: action.value,
        },
        error: {
          nameError: nameError,
          codeError: codeError,
          filenameError: filenameError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let nameError = false;
      let codeError = false;
      let filenameError = false;
      let errorFlag = false;

      if (!state.data.name) {
        nameError = true;
        errorFlag = true;
      }
      if (!state.data.code) {
        codeError = true;
        errorFlag = true;
      }
      if (!state.data.filename) {
        filenameError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          nameError: nameError,
          codeError: codeError,
          filenameError: filenameError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
