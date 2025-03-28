export type RecurringGeneralsStore = {
  general: RecurringGeneralType
  error: {
    cycle: boolean
    duration: boolean
    frequency: boolean
    price: boolean
    trialCycle: boolean
    trialDuration: boolean
    trialFrequency: boolean
    trialPrice: boolean
    errorFlag: boolean
  }
}

export type RecurringGeneralType = {
  cycle: string
  duration: string
  frequency: string
  price: string
  trialCycle: string
  trialDuration: string
  trialFrequency: string
  trialPrice: string
  status: string
  trialStatus: string
  sortOrder: string
}

export const initialGeneralState: RecurringGeneralsStore = {
  general:
    {
      cycle: '',
      duration: '',
      frequency: '',
      price: '',
      trialCycle: '',
      trialDuration: '',
      trialFrequency: '',
      trialPrice: '',
      status: '',
      trialStatus: '',
      sortOrder: '',
    },
  error: {
    cycle: false,
    duration: false,
    frequency: false,
    price: false,
    trialCycle: false,
    trialDuration: false,
    trialFrequency: false,
    trialPrice: false,
    errorFlag: false,
  },
};

export const generalReducer = (state: RecurringGeneralsStore, action: any) => {
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
      let cycleError = false;
      let durationError = false;
      let frequencyError = false;
      let priceError = false;
      let trialCycleError = false;
      let trialDurationError = false;
      let trialFrequencyError = false;
      let trialPriceError = false;
      let errorFlag = false;

      if (!state.general.cycle) {
        cycleError = true;
        errorFlag = true;
      }
      if (!state.general.duration) {
        durationError = true;
        errorFlag = true;
      }
      if (!state.general.frequency) {
        frequencyError = true;
        errorFlag = true;
      }
      if (!state.general.trialCycle) {
        trialCycleError = true;
        errorFlag = true;
      }
      if (!state.general.trialDuration) {
        trialDurationError = true;
        errorFlag = true;
      }
      if (!state.general.trialFrequency) {
        trialFrequencyError = true;
        errorFlag = true;
      }
      return {
        ...state,
        error: {
          cycle: cycleError,
          duration: durationError,
          frequency: frequencyError,
          price: priceError,
          trialCycle: trialCycleError,
          trialDuration: trialDurationError,
          trialFrequency: trialFrequencyError,
          trialPrice: trialPriceError,
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
