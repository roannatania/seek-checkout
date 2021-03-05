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
  display: grid;
  grid-template-columns: 1fr 50px;
  grid-column-gap: 12px;
  width: 100%;
  margin: 0 0 10px;
  padding: 0 0 10px;
  border-bottom: 1px solid ${colors.lightGreyColor};

  &:first-of-type {
    padding-top: 10px;
  }

  &:last-of-type {
    margin: 0;
    padding: 0;
    border: 0;
  }

  @media (min-width: ${breakpoints.laptop}) {
    margin-bottom: 6px;
    padding-bottom: 6px;

    &:first-of-type {
      padding-top: 6px;
    }
  }
`

export const cartItemNameWrapper = css`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

export const quantityWrapper = css`
  width: 100%;
  ${cartItemNameWrapper}
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
  margin: 0 0 2px;
  color: ${colors.darkGreyColor};
`

export const cartItemQuantity = css`
  ${defaultFontStyle}
  color: ${colors.blackColor};
  display: block;
  text-align: center;
  width: 100%;
`

export const totalPurchaseWrapper = css`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-column-gap: 12px;

  @media (min-width: ${breakpoints.laptop}) {
    margin-top: 48px;
  }
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