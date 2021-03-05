import React from 'react'
import { cx } from '@emotion/css'

import { BUTTON_VARIANT } from '../../constants/components'

import * as styles from './styles'

type ButtonProps = {
  variant?: BUTTON_VARIANT.pink | BUTTON_VARIANT.blue
  type?: 'button' | 'submit' | 'reset'
  children: JSX.Element | string
  onClick?: (param?: any) => void
  className?: string
}

const Button = (props: ButtonProps): JSX.Element => {
  const { variant = BUTTON_VARIANT.pink, type = 'button', children, onClick, className, ...rest } = props

  return (
    <button className={cx(styles.button(variant), className)} type={type} onClick={onClick} {...rest} >
      {children}
    </button>
  )
}

export default Button