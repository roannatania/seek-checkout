import React from 'react'
import { cx } from '@emotion/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DropdownOption } from '../../objects/formFields'

import * as styles from './styles'

type SelectFieldProps = {
  value?: string | number
  id: string
  label?: string
  labelColor?: string
  options: Array<DropdownOption>
  required?: boolean
  onChange?: (param?: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = (props: SelectFieldProps): JSX.Element => {
  const {value = '', id, label, labelColor, options = [], required, onChange, ...rest} = props

  const parsedValue = (val: string | number):string => typeof val === 'number' ? val.toString() : val

  return (
    <div className={styles.selectInputWrapper}>
      {label && <label htmlFor={id} className={styles.inputLabel(labelColor)}>{label}</label>}
      <div className={styles.selectInputInnerWrapper}>
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          className={cx(styles.selectInput, {
            [styles.selectInputIsFilled]: parsedValue(value).trim().length > 0,
            [styles.selectInputDefault]: parsedValue(value).trim().length <= 0,
          })}
          {...rest}
        >
          {options.map((opt: DropdownOption, index: number) => (
            <option disabled={parsedValue(opt.value).trim().length <= 0} className={styles.dropdownOption} key={`option-${index + 1}`} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className={styles.iconLabel}><FontAwesomeIcon icon="chevron-down" /></span>
      </div>
    </div>
  )
}

export default Select

