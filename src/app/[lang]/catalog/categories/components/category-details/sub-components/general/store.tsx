export type CategoryGeneralsStore = {
  general: GeneralType
  error: {
    parentId: boolean
    name: boolean
    column: boolean
    errorFlag: boolean
  }
}

export type GeneralType = {
  name: string
  image: string
  slug: string
  column: string
  parentId: string
  top: boolean
  sortOrder: string
  status: string
}

export const initialGeneralState: CategoryGeneralsStore = {
  general:
    {
      name: '',
      image: '',
      slug: '',
      column: '',
      parentId: '',
      top: false,
      sortOrder: '',
      status: '',
    },
  error: {
    parentId: false,
    name: false,
    column: false,
    errorFlag: false,
  },
};

export const generalReducer = (state: CategoryGeneralsStore, action: any) => {
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
      let columnError = false;
      let parentIdError = false;
      let errorFlag = false;

      if (!state.general.name) {
        nameError = true;
        errorFlag = true;
      }
      if (!state.general.column) {
        columnError = true;
        errorFlag = true;
      }
      if (!state.general.parentId) {
        parentIdError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          name: nameError,
          parentId: parentIdError,
          column: columnError,
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
