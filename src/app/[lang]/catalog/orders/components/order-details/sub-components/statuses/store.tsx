export type OrderStatusesStore = {
  status: Array<StatusType>
  error: {
    languageId: boolean
    name: boolean
  }
}

export type StatusType = {
  languageId: string
  name: string
  sortOrder: string
  status: string
}

export const initialStatusesState: OrderStatusesStore = {
  status: [
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
