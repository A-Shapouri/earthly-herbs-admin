export type DiscountsStore = {
  discount: Array<DiscountType>
  error: {
    customerGroupId: boolean
    quantity: boolean
    priority: boolean
    price: boolean
    startAt: boolean
    endAt: boolean
  }
}

export type DiscountType = {
  customerGroupId: string
  quantity: string
  priority: string
  price: string
  startAt: string
  endAt: string
  sortOrder: string
  status: string
}

export const initialDiscountState: DiscountsStore = {
  discount: [
    {
      customerGroupId: '',
      quantity: '',
      priority: '',
      price: '',
      startAt: '',
      endAt: '',
      sortOrder: '',
      status: '',
    },
  ],
  error: {
    customerGroupId: false,
    quantity: false,
    priority: false,
    price: false,
    startAt: false,
    endAt: false,
  },
};
