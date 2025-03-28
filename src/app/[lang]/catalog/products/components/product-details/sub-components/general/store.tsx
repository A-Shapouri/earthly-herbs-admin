export type ProductGeneralsStore = {
  general: GeneralType
  error: {
    model: boolean
    sku: boolean
    ean: boolean
    upc: boolean
    jan: boolean
    isbn: boolean
    mpn: boolean
    minimum: boolean
    price: boolean
    points: boolean
    quantity: boolean
    weight: boolean
    length: boolean
    width: boolean
    height: boolean
    viewed: boolean
    location: boolean
    sortOrder: boolean
    stockStatusId: boolean
    manufacturerId: boolean
    taxClassId: boolean
    weightClassId: boolean
    lengthClassId: boolean
    errorFlag: boolean
  }
}

export type GeneralType = {
  model: string
  sku: string
  ean: string
  upc: string
  jan: string
  isbn: string
  mpn: string
  minimum: string
  price: string
  points: string
  quantity: string
  weight: string
  length: string
  width: string
  height: string
  viewed: string
  location: string
  stockStatusId: string
  manufacturerId: string
  taxClassId: string
  sortOrder: string
  status: string
  shipping: boolean
  weightClassId: string
  lengthClassId: string
  subtract: boolean
}

export const initialGeneralState: ProductGeneralsStore = {
  general:
    {
      model: '',
      sku: '',
      ean: '',
      upc: '',
      jan: '',
      isbn: '',
      mpn: '',
      minimum: '',
      price: '',
      points: '',
      quantity: '',
      sortOrder: '',
      status: '',
      weight: '',
      length: '',
      width: '',
      height: '',
      viewed: '',
      stockStatusId: '',
      manufacturerId: '',
      taxClassId: '',
      location: '',
      weightClassId: '',
      lengthClassId: '',
      shipping: false,
      subtract: false,
    },
  error: {
    model: false,
    sku: false,
    ean: false,
    upc: false,
    jan: false,
    isbn: false,
    mpn: false,
    minimum: false,
    price: false,
    points: false,
    quantity: false,
    sortOrder: false,
    errorFlag: false,
    weight: false,
    length: false,
    width: false,
    height: false,
    viewed: false,
    stockStatusId: false,
    manufacturerId: false,
    taxClassId: false,
    location: false,
    weightClassId: false,
    lengthClassId: false,
  },
};

export const generalReducer = (state: ProductGeneralsStore, action: any) => {
  switch (action.type) {
    case 'SET_GENERAL_VALUE': {
      return {
        ...state,
        general: {
          ...state.general,
          [action.key]: action.value,
        },
        error: {
          ...state.error,
          [action.key]: !action.value,
        },
      };
    }
    case 'CHECK_ERROR': {
      let modelError = false;
      let skuError = false;
      let eanError = false;
      let upcError = false;
      let janError = false;
      let isbnError = false;
      let mpnError = false;
      let minimumError = false;
      let priceError = false;
      let pointsError = false;
      let quantityError = false;
      let errorFlag = false;
      let weightError = false;
      let lengthError = false;
      let widthError = false;
      let heightError = false;
      let viewedError = false;
      let locationError = false;
      let stockStatusIdError = false;
      let manufacturerIdError = false;
      let taxClassIdError = false;
      let lengthClassIdError = false;
      let weightClassIdError = false;

      if (!state.general.model) {
        modelError = true;
        errorFlag = true;
      }
      if (!state.general.sku) {
        skuError = true;
        errorFlag = true;
      }
      if (!state.general.ean) {
        eanError = true;
        errorFlag = true;
      }
      if (!state.general.upc) {
        upcError = true;
        errorFlag = true;
      }
      if (!state.general.jan) {
        janError = true;
        errorFlag = true;
      }
      if (!state.general.isbn) {
        isbnError = true;
        errorFlag = true;
      }
      if (!state.general.mpn) {
        mpnError = true;
        errorFlag = true;
      }
      if (!state.general.minimum) {
        minimumError = true;
        errorFlag = true;
      }
      if (!state.general.price) {
        priceError = true;
        errorFlag = true;
      }
      if (!state.general.points) {
        pointsError = true;
        errorFlag = true;
      }
      if (!state.general.quantity) {
        quantityError = true;
        errorFlag = true;
      }
      if (!state.general.weight) {
        weightError = true;
        errorFlag = true;
      }
      if (!state.general.length) {
        lengthError = true;
        errorFlag = true;
      }
      if (!state.general.width) {
        widthError = true;
        errorFlag = true;
      }
      if (!state.general.height) {
        heightError = true;
        errorFlag = true;
      }
      if (!state.general.viewed) {
        viewedError = true;
        errorFlag = true;
      }
      if (!state.general.location) {
        locationError = true;
        errorFlag = true;
      }
      if (!state.general.stockStatusId) {
        stockStatusIdError = true;
        errorFlag = true;
      }
      if (!state.general.manufacturerId) {
        manufacturerIdError = true;
        errorFlag = true;
      }
      if (!state.general.taxClassId) {
        taxClassIdError = true;
        errorFlag = true;
      }
      if (!state.general.weightClassId) {
        weightClassIdError = true;
        errorFlag = true;
      }
      if (!state.general.lengthClassId) {
        lengthClassIdError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          model: modelError,
          sku: skuError,
          ean: eanError,
          upc: upcError,
          jan: janError,
          isbn: isbnError,
          mpn: mpnError,
          minimum: minimumError,
          price: priceError,
          points: pointsError,
          quantity: quantityError,
          weight: weightError,
          length: lengthError,
          width: widthError,
          height: heightError,
          viewed: viewedError,
          location: locationError,
          stockStatusId: stockStatusIdError,
          manufacturerId: manufacturerIdError,
          taxClassId: taxClassIdError,
          lengthClassId: lengthClassIdError,
          weightClassId: weightClassIdError,
          errorFlag: errorFlag,
        },
      };
    }
    case 'INITIAL_ERROR': {
      return {
        ...state,
        error: initialGeneralState.error,
      };
    }
    case 'SET_INITIAL_STATE': {
      return {
        general: action.general,
        error: initialGeneralState.error,
      };
    }
    default:
      return state;
  }
};
