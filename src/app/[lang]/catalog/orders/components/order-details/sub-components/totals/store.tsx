export type OrderTotalsStore = {
  total: Array<TotalType>
  error: {
    languageId: boolean
    name: boolean
  }
}

export type TotalType = {
  languageId: string
  name: string
  sortOrder: string
  status: string
}

export const initialTotalsState: OrderTotalsStore = {
  total: [
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
