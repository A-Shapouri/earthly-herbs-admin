export type OrderOptionsStore = {
  option: Array<OptionType>
  error: {
    languageId: boolean
    name: boolean
  }
}

export type OptionType = {
  languageId: string
  name: string
  sortOrder: string
  status: string
}

export const initialOptionsState: OrderOptionsStore = {
  option: [
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
