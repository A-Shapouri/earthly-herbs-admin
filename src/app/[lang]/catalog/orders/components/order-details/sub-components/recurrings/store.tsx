export type OrderRecurringsStore = {
  recurring: Array<RecurringType>
  error: {
    languageId: boolean
    name: boolean
  }
}

export type RecurringType = {
  languageId: string
  name: string
  sortOrder: string
  status: string
}

export const initialRecurringsState: OrderRecurringsStore = {
  recurring: [
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
