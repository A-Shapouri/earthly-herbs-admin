export type CategoryDescriptionsStore = {
  description: Array<DescriptionType>
  error: {
    languageId: boolean
    name: boolean
    description: boolean
  }
}

export type DescriptionType = {
  languageId: string
  name: string
  description: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
  sortOrder: string
  status: string
}

export const initialDescriptionState: CategoryDescriptionsStore = {
  description: [
    {
      languageId: '',
      name: '',
      description: '',
      metaTitle: '',
      metaDescription: '',
      metaKeywords: '',
      sortOrder: '',
      status: '',
    },
  ],
  error: {
    languageId: false,
    name: false,
    description: false,
  },
};
