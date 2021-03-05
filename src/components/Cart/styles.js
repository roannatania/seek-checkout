import { css } from '@emotion/css'

import { defaultFontStyle, size12FontStyle, size24FontStyle } from '../../styles/typography'
import * as colors from '../../styles/colors'
import * as breakpoints from '../../styles/breakpoints'

export const cartWrapper = css`
  width: 100%;
  background: white;
  padding: 18px 20px;
`

export const cartItemsList = css`
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const cartItems = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0 0 6px;
  padding: 0 0 6px;
  border-bottom: 1px solid ${colors.lightGreyColor};

  &:first-of-type {
    padding-top: 6px;
  }

  &:last-of-type {
    margin: 0;
    padding: 0;
    border: 0;
  }

  @media (min-width: ${breakpoints.laptop}) {
    display: grid;
    grid-template-columns: 1fr 50px;
    grid-column-gap: 12px;
  }
`

export const cartItemNameWrapper = css`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

export const quantityWrapper = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: centerr;
  width: 100%;

  @media (min-width: ${breakpoints.laptop}) {
    ${cartItemNameWrapper}
  }
`

export const cartItemName = css`
  ${defaultFontStyle}
  font-weight: bold;
  color: ${colors.primaryNavyColor};
  text-align: left;
  margin: 0;
  padding: 0;
  display: block;
  width: 100%;
`

export const quantityLabel = css`
  ${size12FontStyle}
  display: block;
  width: 100%;
  text-align: center;
  color: ${colors.darkGreyColor};
  margin: 0 0 4px;
`

export const cartItemQuantity = css`
  ${defaultFontStyle}
  color: ${colors.blackColor};
  text-align: center;
  display: block;
  width: 100%;
`

export const totalPurchaseWrapper = css`
  margin-top: 24px;
  padding-top: 24px;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-column-gap: 12px;
`

const totalSectionText = css`
  ${size24FontStyle}
  font-weight: bold;
  display: block;
  width: 100%;
`

export const totalLabel = css`
  ${totalSectionText}
  text-align: left;
  color: ${colors.primaryBlueColor}
`

export const totalAmount = css`
  ${totalSectionText}
  text-align: right;
  color: ${colors.blackColor};
`