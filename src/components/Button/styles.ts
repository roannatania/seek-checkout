import { css } from '@emotion/css'

import { defaultFontStyle } from '../../styles/typography'
import * as colors from '../../styles/colors'

export const buttonDefault = css`
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
  background: ${colors.lightPrimaryBlueColor};

  @media (pointer: fine) {
    &:hover,
    &:focus,
    &:active {
      background: ${colors.primaryBlueColor};
    }
  }
`

export const buttonVariantPink = css`
  background: ${colors.primaryPinkColor};

  @media (pointer: fine) {
    &:hover,
    &:focus,
    &:active {
      background: ${colors.lightPrimaryPinkColor}
    }
  }
`