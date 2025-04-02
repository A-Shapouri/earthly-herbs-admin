export type AttributeGeneralsStore = {
  general: GeneralType
  error: {
    name: boolean
    errorFlag: boolean
  }
}

export type GeneralType = {
  name: string
  sortOrder: string
  status: string
}

export const initialGeneralState: AttributeGeneralsStore = {
  general:
    {
      name: '',
      sortOrder: '',
      status: '',
    },
  error: {
    name: false,
    errorFlag: false,
  },
};

export const generalReducer = (state: AttributeGeneralsStore, action: any) => {
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
      let nameError = false;
      let errorFlag = false;

      if (!state.general.name) {
        nameError = true;
        errorFlag = true;
      }

      const newState = {
        ...state,
        error: {
          name: nameError,
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
