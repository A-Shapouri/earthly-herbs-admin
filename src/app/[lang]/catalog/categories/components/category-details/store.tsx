export type CategoryDetailsStore = {
  parentId: string
  sortOrder: number
  top: boolean
  name: string
  image: string
  slug: string
  column: number
  status: number
  description: Array<DescriptionType>
  stores: Array<StoreType>
  filters: Array<FilterType>
}

export type DescriptionType = {
  languageId: string
  categoryId: string
  name: string
  description: string
  metaTitle: string
  metaDescription: string
  metaKeyword: string
  sortOrder: string
  status: string
}

export type FilterType = {
  categoryId: string
  filterId: string
}

export type StoreType = {
  categoryId: string
  storeId: string
}

export const initialState: CategoryDetailsStore = {
  parentId: '',
  sortOrder: 0,
  top: false,
  name: '',
  image: '',
  slug: '',
  column: 0,
  status: 0,
  description: [
    {
      languageId: '',
      categoryId: '',
      name: '',
      description: '',
      metaTitle: '',
      metaDescription: '',
      metaKeyword: '',
      sortOrder: '',
      status: '',
    },
  ],
  stores: [],
  filters: [],
};

export const reducer = (state: CategoryDetailsStore, action: any) => {
  switch (action.type) {
    case 'SET_INITIAL':
      return action.data;
    case 'SET_DESCRIPTION_VALUE': {
      const descriptionItems = JSON.parse(JSON.stringify(state.description));
      descriptionItems[action.index][action.key] = action.value;
      return {
        ...state,
        description: descriptionItems,
      };
    }
    case 'ADD_NEW_DESCRIPTION' : {
      return {
        ...state,
        description: [...state.description, initialState.description[0]],
      };
    }
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
