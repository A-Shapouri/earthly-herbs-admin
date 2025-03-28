export type CategoryDescriptionsStore = {
  description: Array<DescriptionType>
  error: {
    languageId: boolean
    name: boolean
  }
}

export type DescriptionType = {
  languageId: string
  name: string
  sortOrder: string
  status: string
}

export const initialDescriptionState: CategoryDescriptionsStore = {
  description: [
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
