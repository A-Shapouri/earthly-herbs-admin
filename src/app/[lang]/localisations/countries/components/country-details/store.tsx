export type LanguageDetailsStore = {
  data: {
    name: string
    isoCode3: string
    isoCode2: string
    addressFormat: string
    postcodeRequired: boolean
    sortOrder: number
    status: number
  }

  error: {
    nameError: boolean
    isoCode3Error: boolean
    isoCode2Error: boolean
    addressFormatError: boolean
    errorFlag: boolean
  }

}

export const initialState: LanguageDetailsStore = {
  data: {
    name: '',
    isoCode3: '',
    isoCode2: '',
    addressFormat: '',
    postcodeRequired: false,
    sortOrder: 0,
    status: 1,
  },
  error: {
    nameError: false,
    isoCode3Error: false,
    isoCode2Error: false,
    addressFormatError: false,
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
      let isoCode3Error = state.error.isoCode3Error;
      let isoCode2Error = state.error.isoCode2Error;
      let addressFormatError = state.error.addressFormatError;
      let errorFlag = state.error.errorFlag;
      if (action.id === 'name') {
        nameError = !action.value;
      }
      if (action.id === 'isoCode3') {
        isoCode3Error = !action.value;
      }
      if (action.id === 'isoCode2') {
        isoCode2Error = !action.value;
      }
      if (action.id === 'addressFormat') {
        addressFormatError = !action.value;
      }
      return {
        data: {
          ...state.data,
          [action.id]: action.value,
        },
        error: {
          nameError: nameError,
          isoCode3Error: isoCode3Error,
          isoCode2Error: isoCode2Error,
          addressFormatError: addressFormatError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let nameError = false;
      let isoCode3Error = false;
      let isoCode2Error = false;
      let addressFormatError = false;
      let errorFlag = false;

      if (!state.data.name) {
        nameError = true;
        errorFlag = true;
      }
      if (!state.data.isoCode3) {
        isoCode3Error = true;
        errorFlag = true;
      }
      if (!state.data.isoCode2) {
        isoCode2Error = true;
        errorFlag = true;
      }
      if (!state.data.addressFormat) {
        addressFormatError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          nameError: nameError,
          isoCode3Error: isoCode3Error,
          isoCode2Error: isoCode2Error,
          addressFormatError: addressFormatError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
