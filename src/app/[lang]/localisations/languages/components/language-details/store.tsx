export type LanguageDetailsStore = {
  data: {
    name: string
    code: string
    locale: string
    image: string
    directory: string
    sortOrder: number
    status: number
  }

  error: {
    nameError: boolean
    codeError: boolean
    localeError: boolean
    imageError: boolean
    directoryError: boolean
    errorFlag: boolean
  }

}

export const initialState: LanguageDetailsStore = {
  data: {
    name: '',
    code: '',
    locale: '',
    image: 'image',
    directory: '',
    sortOrder: 0,
    status: 1,
  },
  error: {
    nameError: false,
    codeError: false,
    localeError: false,
    imageError: false,
    directoryError: false,
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
      let codeError = state.error.codeError;
      let localeError = state.error.localeError;
      let imageError = state.error.imageError;
      let directoryError = state.error.directoryError;
      let errorFlag = state.error.errorFlag;
      if (action.id === 'name') {
        nameError = !action.value;
      }
      if (action.id === 'code') {
        codeError = !action.value;
      }
      if (action.id === 'locale') {
        localeError = !action.value;
      }
      if (action.id === 'image') {
        imageError = !action.value;
      }
      if (action.id === 'directory') {
        directoryError = !action.value;
      }
      return {
        data: {
          ...state.data,
          [action.id]: action.value,
        },
        error: {
          nameError: nameError,
          codeError: codeError,
          localeError: localeError,
          imageError: imageError,
          directoryError: directoryError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let nameError = false;
      let codeError = false;
      let localeError = false;
      let imageError = false;
      let directoryError = false;
      let errorFlag = false;

      if (!state.data.name) {
        nameError = true;
        errorFlag = true;
      }
      if (!state.data.code) {
        codeError = true;
        errorFlag = true;
      }
      if (!state.data.locale) {
        localeError = true;
        errorFlag = true;
      }
      if (!state.data.image) {
        imageError = true;
        errorFlag = true;
      }
      if (!state.data.directory) {
        directoryError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          nameError: nameError,
          codeError: codeError,
          localeError: localeError,
          imageError: imageError,
          directoryError: directoryError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
