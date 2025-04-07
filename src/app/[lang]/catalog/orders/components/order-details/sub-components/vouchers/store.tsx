export type OrderVouchersStore = {
  voucher: Array<VoucherType>
  error: {
    languageId: boolean
    name: boolean
  }
}

export type VoucherType = {
  languageId: string
  name: string
  sortOrder: string
  status: string
}

export const initialVouchersState: OrderVouchersStore = {
  voucher: [
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
