import { css } from '@emotion/css'

import { defaultWrapperStyle } from '../../styles/wrapper'
import * as colors from '../../styles/colors'

export const footer = css`
  background: ${colors.greyColor};
  width: 100%;
`

export const footerInner = css`
  ${defaultWrapperStyle}
  padding-top: 18px !important;
  padding-bottom: 18px !important;
`