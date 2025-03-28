export type FilterGeneralsStore = {
  general: GeneralType
  error: {
    filterGroupId: boolean
    name: boolean
    errorFlag: boolean
  }
}

export type GeneralType = {
  name: string
  filterGroupId: string
  sortOrder: string
  status: string
}

export const initialGeneralState: FilterGeneralsStore = {
  general:
    {
      name: '',
      filterGroupId: '',
      sortOrder: '',
      status: '',
    },
  error: {
    filterGroupId: false,
    name: false,
    errorFlag: false,
  },
};

export const generalReducer = (state: FilterGeneralsStore, action: any) => {
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
      let filterGroupIdError = false;
      let errorFlag = false;

      if (!state.general.name) {
        nameError = true;
        errorFlag = true;
      }
      if (!state.general.filterGroupId) {
        filterGroupIdError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          name: nameError,
          filterGroupId: filterGroupIdError,
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
