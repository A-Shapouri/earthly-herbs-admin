export type CategoryStoresStore = {
  store: Array<StoreType>
  error: {
    // categoryId: boolean
    storeId: boolean
  }
}

export type StoreType = {
  // categoryId: string
  storeId: string
}

export const initialStoreState: CategoryStoresStore = {
  store: [
    {
      storeId: '',
      // categoryId: '',
    },
  ],
  error: {
    // categoryId: false,
    storeId: false,
  },
};

export const storeReducer = (state: CategoryStoresStore, action: any) => {
  switch (action.type) {
    case 'SET_STORE_VALUE': {
      const storeItems = JSON.parse(JSON.stringify(state.store));
      storeItems[action.index][action.key] = action.value;
      return {
        ...state,
        store: storeItems,
        error: {
          ...state.error,
          [action.key]: !action.value,
        },
      };
    }
    case 'ADD_NEW_STORE' : {
      return {
        ...state,
        store: [...state.store, initialStoreState.store[0]],
      };
    }
    case 'DELETE_STORE' : {
      const tempStores = JSON.parse(JSON.stringify(state.store));
      tempStores.splice(action.key, 1);
      return {
        ...state,
        store: tempStores,
      };
    }
    case 'CHECK_ERROR': {
      const data = state.store[action.index];

      // let categoryError = false;
      let storeError = false;
      let errorFlag = false;

      if (!data.storeId) {
        storeError = true;
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
          storeId: storeError,
          errorFlag: errorFlag,
        },
      };
    }
    case 'INITIAL_ERROR': {
      return {
        ...state,
        error: initialStoreState.error,
      };
    }
    default:
      return state;
  }
};
