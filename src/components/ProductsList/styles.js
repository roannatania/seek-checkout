import { css } from '@emotion/css'

import * as breakpoints from '../../styles/breakpoints'

export const productList = css`
  width: 100%;
  display: block;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (min-width: ${breakpoints.tablet768}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 18px;
    grid-row-gap: 24px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const productListItem = css`
  display: block;
  margin: 0;
  pdding: 0;
  height: 100%;
  width: 100%;
`