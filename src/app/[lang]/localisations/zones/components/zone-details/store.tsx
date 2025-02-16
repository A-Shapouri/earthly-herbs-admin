export type ZoneDetailsStore = {
  data: {
    name: string
    code: string
    country: string
    geoZone: string
    sortOrder: number
    status: number
  }

  error: {
    nameError: boolean
    codeError: boolean
    errorFlag: boolean
  }

}

export const initialState: ZoneDetailsStore = {
  data: {
    name: '',
    code: '',
    country: '',
    geoZone: '',
    sortOrder: 0,
    status: 1,
  },
  error: {
    nameError: false,
    codeError: false,
    errorFlag: false,
  },
};

export const reducer = (state: ZoneDetailsStore, action: any) => {
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
      let errorFlag = state.error.errorFlag;
      if (action.id === 'name') {
        nameError = !action.value;
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
          nameError: nameError,
          codeError: codeError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let nameError = false;
      let codeError = false;
      let errorFlag = false;

      if (!state.data.name) {
        nameError = true;
        errorFlag = true;
      }
      if (!state.data.code) {
        codeError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          nameError: nameError,
          codeError: codeError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
