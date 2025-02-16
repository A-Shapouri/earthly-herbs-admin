export type TaxRateDetailsStore = {
  data: {
    name: string
    rate: string
    type: string
    sortOrder: number
    status: number
  }

  error: {
    nameError: boolean
    rateError: boolean
    typeError: boolean
    errorFlag: boolean
  }

}

export const initialState: TaxRateDetailsStore = {
  data: {
    name: '',
    rate: '',
    type: '',
    sortOrder: 0,
    status: 1,
  },
  error: {
    nameError: false,
    rateError: false,
    typeError: false,
    errorFlag: false,
  },
};

export const reducer = (state: TaxRateDetailsStore, action: any) => {
  switch (action.type) {
    case 'SET_INITIAL': {
      return {
        data: action.data,
        error: initialState.error,
      };
    }
    case 'SET_VALUE':
      let nameError = state.error.nameError;
      let rateError = state.error.rateError;
      let typeError = state.error.typeError;
      let errorFlag = state.error.errorFlag;
      if (action.id === 'name') {
        nameError = !action.value;
      }
      if (action.id === 'rate') {
        rateError = !action.value;
      }
      if (action.id === 'type') {
        typeError = !action.value;
      }
      return {
        data: {
          ...state.data,
          [action.id]: action.value,
        },
        error: {
          nameError: nameError,
          rateError: rateError,
          typeError: typeError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let nameError = false;
      let rateError = false;
      let typeError = false;
      let errorFlag = false;

      if (!state.data.name) {
        nameError = true;
        errorFlag = true;
      }
      if (!state.data.rate) {
        rateError = true;
        errorFlag = true;
      }
      if (!state.data.type) {
        typeError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          nameError: nameError,
          rateError: rateError,
          typeError: typeError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
