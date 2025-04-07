export type OrderGeneralsStore = {
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

export const initialGeneralState: OrderGeneralsStore = {
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

export const generalReducer = (state: OrderGeneralsStore, action: any) => {
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
      return {
        ...state,
        error: {
          name: nameError,
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
