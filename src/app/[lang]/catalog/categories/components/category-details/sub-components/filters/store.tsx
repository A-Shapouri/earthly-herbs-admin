export type CategoryFiltersStore = {
  filter: Array<FilterType>
  error: {
    // categoryId: boolean
    filterId: boolean
  }
}

export type FilterType = {
  // categoryId: string
  filterId: string
}

export const initialFilterState: CategoryFiltersStore = {
  filter: [
    {
      filterId: '',
      categoryId: '',
    },
  ],
  error: {
    categoryId: false,
    filterId: false,
  },
};

export const filterReducer = (state: CategoryFiltersStore, action: any) => {
  switch (action.type) {
    case 'SET_FILTER_VALUE': {
      const filterItems = JSON.parse(JSON.stringify(state.filter));
      filterItems[action.index][action.key] = action.value;
      return {
        ...state,
        filter: filterItems,
        error: {
          ...state.error,
          [action.key]: !action.value,
        },
      };
    }
    case 'ADD_NEW_FILTER' : {
      return {
        ...state,
        filter: [...state.filter, initialFilterState.filter[0]],
      };
    }
    case 'DELETE_FILTER' : {
      const tempFilters = JSON.parse(JSON.stringify(state.filter));
      tempFilters.splice(action.key, 1);
      return {
        ...state,
        filter: tempFilters,
      };
    }
    case 'CHECK_ERROR': {
      const data = state.filter[action.index];

      // let categoryError = false;
      let filterError = false;
      let errorFlag = false;

      if (!data.filterId) {
        filterError = true;
        errorFlag = true;
      }
      // if (!data.categoryId) {
      //   categoryError = true;
      //   errorFlag = true;
      // }
      return {
        ...state,
        error: {
          // categoryId: categoryError,
          filterId: filterError,
          errorFlag: errorFlag,
        },
      };
    }
    case 'INITIAL_ERROR': {
      return {
        ...state,
        error: initialFilterState.error,
      };
    }
    default:
      return state;
  }
};
