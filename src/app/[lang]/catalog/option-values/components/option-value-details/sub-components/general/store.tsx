export type OptionGeneralsStore = {
  general: GeneralType
  error: {
    optionId: boolean
    errorFlag: boolean
  }
}

export type GeneralType = {
  optionId: string
  sortOrder: string
  status: string
  image: string
}

export const initialGeneralState: OptionGeneralsStore = {
  general:
    {
      optionId: '',
      sortOrder: '',
      status: '',
      image: '',
    },
  error: {
    optionId: false,
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
      let optionIdError = false;
      let errorFlag = false;

      if (!state.general.optionId) {
        optionIdError = true;
        errorFlag = true;
      }

      const newState = {
        ...state,
        error: {
          optionId: optionIdError,
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
