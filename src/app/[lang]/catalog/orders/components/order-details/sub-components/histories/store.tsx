export type OrderHistoriesStore = {
  history: Array<HistoryType>
  error: {
    languageId: boolean
    name: boolean
  }
}

export type HistoryType = {
  languageId: string
  name: string
  sortOrder: string
  status: string
}

export const initialHistoriesState: OrderHistoriesStore = {
  history: [
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
