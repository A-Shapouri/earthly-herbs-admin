export type OptionsStore = {
  options: Array<OptionsType>
  error: {
    optionId: boolean
    value: boolean
    isRequired: boolean
  }
}

export type OptionsType = {
  optionId: string
  value: string
  isRequired: boolean
  sortOrder: string
  status: string
}

export const initialOptionsState: OptionsStore = {
  options: [
    {
      optionId: '',
      value: '',
      isRequired: false,
      sortOrder: '',
      status: '',
    },
  ],
  error: {
    optionId: false,
    value: false,
    isRequired: false,
  },
};
