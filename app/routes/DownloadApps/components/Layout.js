import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from 'components/Page'
import ClearFix from 'components/ClearFix'
import googlePlayBadge from '../assets/google-play-badge.png'
import appStoreBadge from '../assets/app-store-badge.png'
import styles from './index.css'

class Layout extends Component {
  render() {
    const {
      androidAppLink,
      iOSAppLink,
      handleOpenApp,
    } = this.props

    return (
      <Page>
        <div className={styles.title}>
          Download Gnosis Safe mobile app
        </div>

        <div className={styles.downloadApps}>
          <div className={styles.downloadApp}>
            <div>Android</div>
            <div id='qr-android'></div>

            <img
              className={styles.appLink}
              src={googlePlayBadge}
              onClick={handleOpenApp(androidAppLink)}
            />
          </div>

          <div className={styles.downloadApp}>
            <div>iOS</div>
            <div id='qr-ios'></div>

            <img
              className={styles.appLink}
              src={appStoreBadge}
              onClick={handleOpenApp(iOSAppLink)}
            />
          </div>

          <ClearFix />
        </div>
        <Link to={{
          pathname: '/create-password',
          state: {
            dest: '/pairing'
          }
        }}>
          <button>CONTINUE</button>
        </Link>
      </Page>
    )
  }
}

export default Layout
