import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from 'components/Page'
import styles from './index.css'

class Layout extends Component {
  render() {
    return (
      <Page account logOut padding='noPadding'>
        <Link to='/whitelist'>
          <div className={styles.option}>Manage whitelist</div>
        </Link>
        <Link to='/safes'>
          <div className={styles.option}>Manage Safes</div>
        </Link>
        <Link to='/locking'>
          <div className={styles.option}>Locking options </div>
        </Link>
        <Link to='#'>
          <div className={styles.option}>Change master password</div>
        </Link>
      </Page>
    )
  }
}

export default Layout
