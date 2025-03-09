export type CategoryStoresStore = {
  store: Array<StoreType>
  error: {
    storeId: boolean
  }
}

export type StoreType = {
  storeId: string
}

export const initialStoreState: CategoryStoresStore = {
  store: [
    {
      storeId: '',
    },
  ],
  error: {
    storeId: false,
  },
};
