export const initialState = {
  data: {
    name: '',
    unit: '',
    vipClient: null,
    status: null,
    createdAtFrom: null,
    createdAtTo: null,
  },
  popper: false,
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_INITIAL':
      return {
        ...state,
        data: initialState.data,
      };
    case 'SET_VALUE':
      return {
        ...state,
        data: {
          ...state.data,
          [action.id]: action.value,
        },
      };
    case 'SET_POPPER':
      return {
        ...state,
        popper: action.data,
      };
    default:
      return state;
  }
};
