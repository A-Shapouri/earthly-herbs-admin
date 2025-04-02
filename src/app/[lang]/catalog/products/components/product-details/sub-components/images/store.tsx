export type ImagesStore = {
  image: Array<ImageType>
  error: {
    image: boolean
  }
}

export type ImageType = {
  image: string
  sortOrder: string
  status: string
}

export const initialImagesState: ImagesStore = {
  image: [
    {
      image: '',
      sortOrder: '',
      status: '',
    },
  ],
  error: {
    image: false,
  },
};
