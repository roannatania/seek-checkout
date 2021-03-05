import React from 'react'

import * as styles from './styles'

type FooterProps = {
  children: JSX.Element | string
}

const Footer = (props: FooterProps): JSX.Element => {
  const { children } = props

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {children}
      </div>
    </footer>
  )
}

export default Footer