export type CategoryDetailsStore = {
  name: string
  description: string
  sort_order: string
  columns: string
  parent_id: string
  top: string
  meta_title: string
  meta_description: string
  meta_keywords: string
  status: string
  seo: Array<string>
  seo_value: string
  nameError: boolean
  sortOrderError: boolean
  columnsError: boolean
  paretIdError: boolean
  statusError: boolean
  errorFlag: boolean
}

export const initialState: CategoryDetailsStore = {
  name: '',
  description: '',
  sort_order: '',
  columns: '',
  parent_id: '',
  top: '',
  meta_title: '',
  meta_description: '',
  meta_keywords: '',
  status: '',
  seo: [],
  seo_value: '',
  nameError: false,
  sortOrderError: false,
  columnsError: false,
  paretIdError: false,
  statusError: false,
  errorFlag: false,
};

export const reducer = (state: CategoryDetailsStore, action: any) => {
  switch (action.type) {
    case 'SET_INITIAL':
      return action.data;
    case 'SET_VALUE':
      let nameError = state.nameError;
      let sortOrderError = state.sortOrderError;
      let columnsError = state.columnsError;
      let paretIdError = state.paretIdError;
      let statusError = state.statusError;
      let errorFlag = state.errorFlag;
      if (action.id === 'name' && action.value) {
        nameError = false;
      }
      if (action.id === 'sort_order' && action.value) {
        sortOrderError = false;
      }
      if (action.id === 'columns' && action.value) {
        columnsError = false;
      }
      if (action.id === 'parent_id' && action.value) {
        paretIdError = false;
      }
      if (action.id === 'status' && action.value) {
        statusError = false;
      }
      return {
        ...state,
        [action.id]: action.value,
        nameError: nameError,
        sortOrderError: sortOrderError,
        columnsError: columnsError,
        paretIdError: paretIdError,
        statusError: statusError,
        errorFlag: errorFlag,
      };
    case 'CHECK_ERROR': {
      let nameError = false;
      let sortOrderError = false;
      let columnsError = false;
      let paretIdError = false;
      let statusError = false;
      let errorFlag = false;

      if (!state.name) {
        nameError = true;
        errorFlag = true;
      }
      if (!state.sort_order) {
        sortOrderError = true;
        errorFlag = true;
      }
      if (!state.columns) {
        columnsError = true;
        errorFlag = true;
      }
      if (!state.parent_id) {
        paretIdError = true;
        errorFlag = true;
      }
      if (!state.status) {
        statusError = true;
        errorFlag = true;
      }
      return {
        ...state,
        nameError: nameError,
        sortOrderError: sortOrderError,
        columnsError: columnsError,
        paretIdError: paretIdError,
        statusError: statusError,
        errorFlag: errorFlag,
      };
    }
    default:
      return state;
  }
};
