export type OptionGeneralsStore = {
  general: GeneralType
  error: {
    orderId: boolean
    errorFlag: boolean
  }
}

export type GeneralType = {
  orderId: string
  sortOrder: string
  status: string
}

export const initialGeneralState: OptionGeneralsStore = {
  general:
    {
      orderId: '',
      sortOrder: '',
      status: '',
    },
  error: {
    orderId: false,
    errorFlag: false,
  },
};

export const generalReducer = (state: OptionGeneralsStore, action: any) => {
  switch (action.type) {
    case 'SET_GENERAL_VALUE': {
      return {
        ...state,
        general: {
          ...state.general,
          [action.key]: action.value,
        },
        error: {
          ...state.error,
          [action.key]: !action.value,
        },
      };
    }
    case 'CHECK_ERROR': {
      let orderIdError = false;
      let errorFlag = false;

      if (!state.general.orderId) {
        orderIdError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          orderId: orderIdError,
          errorFlag: errorFlag,
        },
      };
    }
    case 'INITIAL_ERROR': {
      return {
        ...state,
        error: initialGeneralState.error,
      };
    }
    case 'SET_INITIAL_STATE': {
      return {
        general: action.general,
        error: initialGeneralState.error,
      };
    }
    default:
      return state;
  }
};
