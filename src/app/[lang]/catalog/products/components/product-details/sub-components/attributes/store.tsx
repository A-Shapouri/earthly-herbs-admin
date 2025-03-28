export type CategoryAttributesStore = {
  attribute: Array<AttributeType>
  error: {
    attributeId: boolean
    languageId: boolean
    text: boolean
  }
}

export type AttributeType = {
  attributeId: string
  languageId: string
  text: string
  sortOrder: string
  status: string
}

export const initialAttributestate: CategoryAttributesStore = {
  attribute: [
    {
      attributeId: '',
      languageId: '',
      text: '',
      sortOrder: '',
      status: '',
    },
  ],
  error: {
    attributeId: false,
    languageId: false,
    text: false,
  },
};
