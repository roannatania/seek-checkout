import { css } from '@emotion/css'

import { defaultFontStyle } from '../../styles/typography'
import * as colors from '../../styles/colors'

export const fontStyle = css`
  ${defaultFontStyle}
  color: ${colors.blackColor};
`

export const selectInputWrapper = css`
  margin-bottom: 12px;
  padding: 0;
  position: relative;
  top: 0;
`

export const selectInputInnerWrapper = css`
  position: relative;
  top: 0;
`

export const inputLabel = (color = colors.blackColor) => css`
  ${fontStyle}
  color: ${color};
  display: block;
  margin-bottom: 12px;
  white-space: pre-wrap;
  word-break: break-word;
  font-weight: bold;
`

export const iconLabel = css`
  color: ${colors.darkGreyColor};
  position: absolute;
  top: calc(50% - 8.5px);
  right: 12px;
`

export const selectInput = css`
  display: block;
  height: 44px;
  padding: 0 38px 0 12px;
  ${fontStyle}
  color: ${colors.blackColor};
  white-space: nowrap;
  text-overflow: ellipsis;
  border: 1px solid ${colors.greyColor};
  border-radius: 2px;
  background: white;
  cursor: pointer;
  transition: all .4s;
  appearance: none;
  width: 100%;

  &:hover,
  &:focus {
    outline: 0;
    border: 1px solid ${colors.lightPrimaryBlueColor}
  }
`

export const selectInputIsFilled = css`
  border: 1px solid ${colors.lightPrimaryBlueColor};
  color: ${colors.blackColor};

  &:hover,
  &:focus {
    border-color: ${colors.lightPrimaryBlueColor};
  }
`

export const selectInputDefault = css`
  color: ${colors.darkGreyColor} !important;
`

export const dropdownOption = css`
  padding: 0;
  color: ${colors.blackColor};
`
