export type CategoryDescriptionsStore = {
  description: Array<DescriptionType>
  error: {
    languageId: boolean
    // categoryId: boolean
    name: boolean
    description: boolean
    errorFlag: boolean
  }
}

export type DescriptionType = {
  languageId: string
  // categoryId: string
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
      // categoryId: '',
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
    // categoryId: false,
    description: false,
    errorFlag: false,
  },
};

export const descriptionReducer = (state: CategoryDescriptionsStore, action: any) => {
  switch (action.type) {
    case 'SET_DESCRIPTION_VALUE': {
      const descriptionItems = JSON.parse(JSON.stringify(state.description));
      descriptionItems[action.index][action.key] = action.value;
      return {
        ...state,
        description: descriptionItems,
        error: {
          ...state.error,
          [action.key]: !action.value,
        },
      };
    }
    case 'ADD_NEW_DESCRIPTION' : {
      return {
        ...state,
        description: [...state.description, initialDescriptionState.description[0]],
      };
    }
    case 'DELETE_DESCRIPTION' : {
      const tempDescriptions = JSON.parse(JSON.stringify(state.description));
      tempDescriptions.splice(action.key, 1);
      return {
        ...state,
        description: tempDescriptions,
      };
    }
    case 'CHECK_ERROR': {
      const data = state.description[action.index];

      let nameError = false;
      // let categoryError = false;
      let languageError = false;
      let descriptionError = false;
      let errorFlag = false;

      if (!data.name) {
        nameError = true;
        errorFlag = true;
      }
      if (!data.description) {
        descriptionError = true;
        errorFlag = true;
      }
      if (!data.languageId) {
        languageError = true;
        errorFlag = true;
      }
      // if (!data.categoryId) {
      //   categoryError = true;
      //   errorFlag = true;
      // }
      return {
        ...state,
        error: {
          name: nameError,
          // categoryId: categoryError,
          languageId: languageError,
          description: descriptionError,
          errorFlag: errorFlag,
        },
      };
    }
    case 'INITIAL_ERROR': {
      return {
        ...state,
        error: initialDescriptionState.error,
      };
    }
    default:
      return state;
  }
};
