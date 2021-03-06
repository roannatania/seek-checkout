import { css } from '@emotion/css'

import { defaultFontStyle, size18FontStyle } from '../../../styles/typography'
import * as colors from '../../../styles/colors'

export const productTile = css`
  width: 100%;
  height: 100%;
  background: white;
  border: 1px solid ${colors.greyColor};
  padding: 30px 18px;
`

export const productTileInner = css`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const contentWrapper = css`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

export const contentTextWrapper = css`
  ${contentWrapper}
  justify-content: flex-start;
  flex: 1;
  margin-bottom: 24px;
`

const textStyle = css`
  ${defaultFontStyle}
  color: ${colors.blackColor};
  text-align: left;
  margin: 0;
  padding: 0;
`

export const productName = css`
  ${textStyle}
  ${size18FontStyle}
  color: ${colors.primaryNavyColor};
  font-weight: bold;
  margin-bottom: 12px;
`

export const productDescription = css`
  ${textStyle}
  color: ${colors.darkGreyColor};
`

export const productPrice = css`
  ${textStyle}
  color: ${colors.blackColor};
  font-weight: bold;
  margin-bottom: 20px;
`