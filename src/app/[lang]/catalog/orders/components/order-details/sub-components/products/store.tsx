export type OrderProductsStore = {
  product: Array<ProductType>
  error: {
    languageId: boolean
    name: boolean
  }
}

export type ProductType = {
  languageId: string
  name: string
  sortOrder: string
  status: string
}

export const initialProductsState: OrderProductsStore = {
  product: [
    {
      languageId: '',
      name: '',
      sortOrder: '',
      status: '',
    },
  ],
  error: {
    languageId: false,
    name: false,
  },
};
