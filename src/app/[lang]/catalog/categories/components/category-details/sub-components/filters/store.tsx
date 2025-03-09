export type CategoryFiltersStore = {
  filter: Array<FilterType>
  error: {
    filterId: boolean
  }
}

export type FilterType = {
  filterId: string
}

export const initialFilterState: CategoryFiltersStore = {
  filter: [
    {
      filterId: '',
    },
  ],
  error: {
    filterId: false,
  },
};
