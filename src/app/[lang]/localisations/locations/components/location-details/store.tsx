export type LanguageDetailsStore = {
  data: {
    name: string
    fax: string
    geocode: string
    telephone: string
    address: string
    image: string
    open: string
    comment: string
    sortOrder: number
    status: number
  }
  error: {
    nameError: boolean
    addressError: boolean
    telephoneError: boolean
    faxError: boolean
    geocodeError: boolean
    openError: boolean
    commentError: boolean
    errorFlag: boolean
  }

}

export const initialState: LanguageDetailsStore = {
  data: {
    name: '',
    fax: '',
    geocode: '',
    telephone: '',
    address: '',
    image: '',
    open: '',
    comment: '',
    sortOrder: 0,
    status: 1,
  },
  error: {
    nameError: false,
    addressError: false,
    telephoneError: false,
    faxError: false,
    geocodeError: false,
    openError: false,
    commentError: false,
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
      let addressError = state.error.addressError;
      let telephoneError = state.error.telephoneError;
      let faxError = state.error.faxError;
      let geocodeError = state.error.geocodeError;
      let openError = state.error.openError;
      let commentError = state.error.commentError;
      let errorFlag = state.error.errorFlag;

      if (action.id === 'name') {
        nameError = !action.value;
      }
      if (action.id === 'code') {
        addressError = !action.value;
      }
      if (action.id === 'locale') {
        telephoneError = !action.value;
      }
      if (action.id === 'image') {
        faxError = !action.value;
      }
      if (action.id === 'directory') {
        geocodeError = !action.value;
      }
      if (action.id === 'open') {
        openError = !action.value;
      }
      if (action.id === 'comment') {
        commentError = !action.value;
      }
      return {
        data: {
          ...state.data,
          [action.id]: action.value,
        },
        error: {
          nameError: nameError,
          addressError: addressError,
          telephoneError: telephoneError,
          faxError: faxError,
          geocodeError: geocodeError,
          openError: openError,
          commentError: commentError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let nameError = false;
      let addressError = false;
      let telephoneError = false;
      let faxError = false;
      let geocodeError = false;
      let openError = false;
      let commentError = false;
      let errorFlag = false;

      if (!state.data.name) {
        nameError = true;
        errorFlag = true;
      }
      if (!state.data.address) {
        addressError = true;
        errorFlag = true;
      }
      if (!state.data.telephone) {
        telephoneError = true;
        errorFlag = true;
      }
      if (!state.data.fax) {
        faxError = true;
        errorFlag = true;
      }
      if (!state.data.geocode) {
        geocodeError = true;
        errorFlag = true;
      }
      if (!state.data.open) {
        openError = true;
        errorFlag = true;
      }
      if (!state.data.comment) {
        commentError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          nameError: nameError,
          addressError: addressError,
          telephoneError: telephoneError,
          faxError: faxError,
          geocodeError: geocodeError,
          openError: openError,
          commentError: commentError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
