export type ClientDetailsStore = {
  name: string
  last_name: string
  mobile: string
  email: string
  national_id: string
  gender: string
  dob: {
    jalaliDate: string
    gregorianDate: string
  }
  passport_number: string
  sheba_number: string
  status: string
  popper: boolean
  seo: Array<string>
  seo_value: string
}

export const initialState: ClientDetailsStore = {
  name: '',
  last_name: '',
  mobile: '',
  email: '',
  national_id: '',
  gender: '',
  dob: {
    jalaliDate: '',
    gregorianDate: '',
  },
  passport_number: '',
  sheba_number: '',
  status: '',
  popper: false,
  seo: [],
  seo_value: '',
};

export const reducer = (state: ClientDetailsStore, action: any) => {
  switch (action.type) {
    case 'SET_INITIAL':
      return action.data;
    case 'SET_VALUE':
      return {
        ...state,
        [action.id]: action.value,
      };
    case 'SET_DATE_OF_BIRTH':
      return { ...state, dob: { ...state.dob, jalaliDate: action.data.jalaliDate, gregorianDate: action.data.gregorianDate } };
    case 'SET_POPPER':
      return { ...state, popper: action.data };
    default:
      return state;
  }
};
