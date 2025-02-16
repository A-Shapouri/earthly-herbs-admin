import { AlertActionType } from './alert-action';
import { AlertReducerTypes } from '@store/alert/alert';

export const initialState: AlertReducerTypes = {
  isShow: false,
  text: undefined,
  severity: undefined,
  isShowErrorModal: false,
  title: undefined,
  subtitle: undefined,
  primaryErrorIcon: '',
  secondaryErrorIcon: '',
  actionCallback: undefined,
  acceptCallback: undefined,
  denyCallback: undefined,
  acceptButtonTitle: '',
  denyButtonTitle: '',
  reSendCodeCallBack: undefined,
  changeNumberCallBack: undefined,
};
export const alertReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AlertActionType.SHOW_ALERT: {
      return {
        ...state,
        isShow: true,
        text: action.text,
        description: action.description || '',
        severity: action.severity || 'info',
      };
    }

    case AlertActionType.HIDE_ALERT: {
      return {
        ...state,
        isShow: false,
      };
    }

    case AlertActionType.SHOW_ERROR_MODAL: {
      return {
        ...state,
        isShowErrorModal: true,
        title: action?.data?.title || state.title,
        subtitle: action?.data?.subtitle || state.subtitle,
        acceptCallback: action?.data?.acceptCallback || state.acceptCallback,
        actionCallback: action?.data?.actionCallback || state.actionCallback,
        denyCallback: action?.data?.denyCallback || state.denyCallback,
        primaryErrorIcon: action?.data?.primaryErrorIcon || state.primaryErrorIcon,
        secondaryErrorIcon: action?.data?.secondaryErrorIcon || state.secondaryErrorIcon,
        acceptButtonTitle: action?.data?.acceptButtonTitle || state.acceptButtonTitle,
        denyButtonTitle: action?.data?.denyButtonTitle || state.denyButtonTitle,
        reSendCodeCallBack: action?.data?.reSendCodeCallBack || state.reSendCodeCallBack,
        changeNumberCallBack: action?.data?.changeNumberCallBack || state.changeNumberCallBack,
      };
    }

    case AlertActionType.HIDE_ERROR_MODAL: {
      return {
        ...initialState,
      };
    }

    default: {
      return state;
    }
  }
};

export default alertReducer;
