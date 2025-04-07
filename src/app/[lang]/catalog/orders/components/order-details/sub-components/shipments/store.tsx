export type OrderShipmentsStore = {
  shipment: Array<ShipmentType>
  error: {
    languageId: boolean
    name: boolean
  }
}

export type ShipmentType = {
  languageId: string
  name: string
  sortOrder: string
  status: string
}

export const initialShipmentsState: OrderShipmentsStore = {
  shipment: [
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
