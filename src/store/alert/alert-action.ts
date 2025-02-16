const preType = 'alert';

export const AlertActionType = {
  SHOW_ALERT: `${preType}SHOW_ALERT`,
  HIDE_ALERT: `${preType}HIDE_ALERT`,
  SHOW_ERROR_MODAL: `${preType}SHOW_ERROR_MODAL`,
  HIDE_ERROR_MODAL: `${preType}HIDE_ERROR_MODAL`,
};

const showAlert = (data: { text: string, description?: string, severity: 'info' | 'success' | 'danger' | 'warning' | 'primary' | 'secondary' }) => ({
  type: AlertActionType.SHOW_ALERT,
  text: data?.text,
  description: data?.description,
  severity: data?.severity,
});
const hideAlert = () => ({ type: AlertActionType.HIDE_ALERT });
const showErrorModal = (data: {
  title?: string,
  subtitle?: string,
  primaryErrorIcon?: string
  secondaryErrorIcon?: string,
  actionCallback?: () => void,
  acceptCallback?: () => void,
  denyCallback?: () => void,
  acceptButtonTitle?: string,
  denyButtonTitle?: string,
  reSendCodeCallBack?: () => void
  changeNumberCallBack?: () => void,
}) => ({ type: AlertActionType.SHOW_ERROR_MODAL, data: data });
const hideErrorModal = () => ({ type: AlertActionType.HIDE_ERROR_MODAL });
export const AlertActions = {
  showAlert: showAlert,
  hideAlert: hideAlert,
  showErrorModal: showErrorModal,
  hideErrorModal: hideErrorModal,
};
