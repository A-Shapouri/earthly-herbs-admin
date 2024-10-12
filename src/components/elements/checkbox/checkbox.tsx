import React from 'react'
import { CheckboxProps } from './checkbox.props'
import { COLORS, SIZES } from './checkbox.style'
import classNames from "@utils/helpers/class-names";

export const Checkbox = ({ color = 'primary', className, onChange, checked, disabled = false, size = 'tiny', ...rest }: CheckboxProps) => {

  return (
    <input
      onChange={onChange}
      checked={checked}
      disabled={disabled}
      className={classNames(
        'rounded-2xl cursor-pointer',
        COLORS[color],
        SIZES[size],
        className,
      )}
      type={'checkbox'}
      {...rest}
    />
  )
}

export default Checkbox
