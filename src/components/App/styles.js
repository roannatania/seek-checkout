import { css, injectGlobal } from '@emotion/css'

import { defaultWrapperStyle } from '../../styles/wrapper'
import { defaultFontStyle, size24FontStyle, size36FontStyle } from '../../styles/typography'
import * as breakpoints from '../../styles/breakpoints'
import * as colors from '../../styles/colors'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: grid;
  }
`

export const appMainWrapper = css`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`

export const appBody = css`
  width: 100%;
  padding: 40px 0;
  background-color: ${colors.lightGreyColor};

  @media (min-width: ${breakpoints.tablet768}) {
    padding: 60px 0;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 80px 0;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 100px 0;
  }
`

export const appBodyInner = css`
  ${defaultWrapperStyle}
  height: 100%;
`

const middleBoxContainer = css`
  max-width: 580px;
  margin: 0 auto;
`

export const nameSelectSection = css`
  padding: 32px;
  background: ${colors.primaryNavyColor};
  ${middleBoxContainer}
`

export const cart = css`
  ${middleBoxContainer}
`

export const section = css`
  margin: 40px auto 0;

  @media (min-width: ${breakpoints.tablet768}) {
    margin: 60px auto 0;
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin: 80px auto 0;
  }

  @media (min-width: ${breakpoints.xl}) {
    margin: 100px auto 0;
  }
`

export const sectionHeader = css`
  ${size24FontStyle}
  font-weight: bold;
  padding: 0;
  margin: 0 0 24px;
  letter-spacing: 0;
  color: ${colors.blackColor};
  text-align: left;

  @media (min-width: ${breakpoints.laptop}) {
    ${size36FontStyle}
    margin-bottom: 36px;
  }
`

export const footerContent = css`
  width: 100%;
  ${defaultFontStyle}
  text-align: right;
  color: ${colors.darkGreyColor};
`