export type shippingCourierDetailsStore = {
  data: {
    shippingCourierCode: string
    shippingCourierName: string
    sortOrder: number
    status: number
  }

  error: {
    shippingCourierCodeError: boolean
    shippingCourierNameError: boolean
    errorFlag: boolean
  }

}

export const initialState: shippingCourierDetailsStore = {
  data: {
    shippingCourierCode: '',
    shippingCourierName: '',
    sortOrder: 0,
    status: 1,
  },
  error: {
    shippingCourierCodeError: false,
    shippingCourierNameError: false,
    errorFlag: false,
  },
};

export const reducer = (state: shippingCourierDetailsStore, action: any) => {
  switch (action.type) {
    case 'SET_INITIAL': {
      return {
        data: action.data,
        error: initialState.error,
      };
    }
    case 'SET_VALUE':
      let shippingCourierCodeError = state.error.shippingCourierCodeError;
      let shippingCourierNameError = state.error.shippingCourierNameError;
      let errorFlag = state.error.errorFlag;
      if (action.id === 'shippingCourierCode') {
        shippingCourierCodeError = !action.value;
      }
      if (action.id === 'shippingCourierName') {
        shippingCourierNameError = !action.value;
      }
      return {
        data: {
          ...state.data,
          [action.id]: action.value,
        },
        error: {
          shippingCourierCodeError: shippingCourierCodeError,
          shippingCourierNameError: shippingCourierNameError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let shippingCourierCodeError = false;
      let shippingCourierNameError = false;
      let errorFlag = false;

      if (!state.data.shippingCourierCode) {
        shippingCourierCodeError = true;
        errorFlag = true;
      }
      if (!state.data.shippingCourierName) {
        shippingCourierNameError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          shippingCourierCodeError: shippingCourierCodeError,
          shippingCourierNameError: shippingCourierNameError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
