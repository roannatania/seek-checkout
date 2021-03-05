import { css } from '@emotion/css'

import { defaultWrapperStyle } from '../../styles/wrapper'
import { darkGreyColor } from '../../styles/colors'
import { size18FontStyle, size24FontStyle } from '../../styles/typography'
import * as breakpoints from '../../styles/breakpoints'

export const header = css`
  width: 100%;
  background: white;
  padding: 20px 0;
`

export const headerInner = css`
  ${defaultWrapperStyle}
`

export const headerContent = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

export const headerLogoLink = css`
  unset: all;
  display: block;
  cursor: pointer;
  text-decoration: none;
  max-width: 129px;
  margin-right: 8px;


  @media (min-width: ${breakpoints.tablet768}) {
    margin-right: 20px;
  }
`

export const headerLogo = css`
  width: 100%;
  height: auto;
  display: block;
`

export const headerText = css`
  ${size18FontStyle}
  text-align: right;
  color: ${darkGreyColor};

  @media (min-width: ${breakpoints.tablet768}) {
    ${size24FontStyle}
  }
`

