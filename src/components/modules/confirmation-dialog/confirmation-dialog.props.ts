export interface ConfirmationDialogProps {
  open: boolean

  onClose: any

  alertText: string

  submitText?: string

  cancelText?: string

  cancelHandler?: () => void

  submitHandler?: () => void

  loading?: boolean
}
