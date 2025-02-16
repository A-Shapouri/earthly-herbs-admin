export type GeoZoneDetailsStore = {
  data: {
    name: string
    description: string
    ssl: string
    sortOrder: number
    status: number
  }

  error: {
    nameError: boolean
    descriptionError: boolean
    sslError: boolean
    errorFlag: boolean
  }

}

export const initialState: GeoZoneDetailsStore = {
  data: {
    name: '',
    description: '',
    ssl: '',
    sortOrder: 0,
    status: 1,
  },
  error: {
    nameError: false,
    descriptionError: false,
    sslError: false,
    errorFlag: false,
  },
};

export const reducer = (state: GeoZoneDetailsStore, action: any) => {
  switch (action.type) {
    case 'SET_INITIAL': {
      return {
        data: action.data,
        error: initialState.error,
      };
    }
    case 'SET_VALUE':
      let nameError = state.error.nameError;
      let descriptionError = state.error.descriptionError;
      let errorFlag = state.error.errorFlag;
      if (action.id === 'name') {
        nameError = !action.value;
      }
      if (action.id === 'description') {
        descriptionError = !action.value;
      }
      return {
        data: {
          ...state.data,
          [action.id]: action.value,
        },
        error: {
          nameError: nameError,
          descriptionError: descriptionError,
          errorFlag: errorFlag,
        },
      };
    case 'CHECK_ERROR': {
      let nameError = false;
      let descriptionError = false;
      let errorFlag = false;

      if (!state.data.name) {
        nameError = true;
        errorFlag = true;
      }
      if (!state.data.description) {
        descriptionError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          nameError: nameError,
          descriptionError: descriptionError,
          errorFlag: errorFlag,
        },
      };
    }
    default:
      return state;
  }
};
