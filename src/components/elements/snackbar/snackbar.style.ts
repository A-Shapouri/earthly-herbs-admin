import {AnchorOriginProps} from './snackbar.props'

const VERTICAL = {
  top: 'top-6',
  bottom: 'bottom-6'
}

const HORIZONTAL = {
  right: 'right-6',
  left: 'left-6'
}

export const ANCHOR_ORIGIN = ({vertical, horizontal}: AnchorOriginProps) => {
  return `${VERTICAL[vertical]} ${HORIZONTAL[horizontal]}`
};