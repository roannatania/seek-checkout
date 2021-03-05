import { css } from '@emotion/css'

import { BUTTON_VARIANT } from '../../constants/components'
import { defaultFontStyle } from '../../styles/typography'
import * as colors from '../../styles/colors'

export const button = (variant = BUTTON_VARIANT.pink) => css`
  ${defaultFontStyle}
  font-weight: bold;
  height: 52px;
  border-radius: 0;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  width: 100%;
  position: relative;
  padding: 0 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;

  ${variant === BUTTON_VARIANT.pink ? `
    background: ${colors.primaryPinkColor};

    @media (pointer: fine) {
      &:hover,
      &:focus,
      &:active {
        background: ${colors.lightPrimaryPinkColor}
      }
    }
  ` : `
    background: ${colors.lightPrimaryBlueColor};

    @media (pointer: fine) {
      &:hover,
      &:focus,
      &:active {
        background: ${colors.primaryBlueColor};
      }
    }
  `}
`