import React from 'react'

import logo from '../../images/seek-logo.svg'
import * as styles from './styles'

type HeaderProps = {
  name?: string
}

const Header = (props: HeaderProps): JSX.Element => {
  const { name = '' } = props

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerContent}>
          <a href="/" className={styles.headerLogoLink}><img src={logo} alt="SEEK" className={styles.headerLogo} /></a>
          <div data-testid="header-text" className={styles.headerText}>
            Welcome
            {name && `, ${name}`}
            !
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
