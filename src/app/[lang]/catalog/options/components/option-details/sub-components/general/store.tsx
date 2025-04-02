export type OptionGeneralsStore = {
  general: GeneralType
  error: {
    type: boolean
    errorFlag: boolean
  }
}

export type GeneralType = {
  type: string
  sortOrder: string
  status: string
}

export const initialGeneralState: OptionGeneralsStore = {
  general:
    {
      type: '',
      sortOrder: '',
      status: '',
    },
  error: {
    type: false,
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
      let typeError = false;
      let errorFlag = false;

      if (!state.general.type) {
        typeError = true;
        errorFlag = true;
      }

      const newState = {
        ...state,
        error: {
          type: typeError,
          errorFlag: errorFlag,
        },
      };

      // If there's a callback, call it with the new state
      if (action.callback) {
        action.callback(newState);
      }

      return newState;
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
