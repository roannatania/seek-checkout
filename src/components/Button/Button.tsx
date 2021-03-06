import React from 'react'
import { cx } from '@emotion/css'

import { BUTTON_VARIANT } from '../../constants/components'

import * as styles from './styles'

type ButtonProps = {
  id?: string
  variant?: BUTTON_VARIANT.pink | BUTTON_VARIANT.blue
  type?: 'button' | 'submit' | 'reset'
  children: JSX.Element | string
  onClick?: (param?: any) => void
  className?: string
}

const Button = (props: ButtonProps): JSX.Element => {
  const {
    id,
    variant = BUTTON_VARIANT.blue,
    type = 'button',
    children,
    onClick,
    className,
    ...rest
  } = props

  return (
    <button
      id={id}
      data-testid={id}
      className={cx(styles.buttonDefault, {
        [styles.buttonVariantPink]: variant === BUTTON_VARIANT.pink
      }, className)}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button