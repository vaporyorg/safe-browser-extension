import React, { Component } from 'react'

import styles from 'assets/css/global.css'

class Layout extends Component {
  render() {
    const {
      qrPairingRef,
      password,
      toggleQr,
      message,
    } = this.props

    return (
      <div className={styles.innerOverlay}>
        <button
          className={styles.buttonExit}
          onClick={toggleQr}
        ></button>
        <div className={styles.innerOverlayContent}>
          <span className={styles.QR}>
            <p>BROWSER EXTENSION</p>
            <div ref={qrPairingRef}></div>
            <div className={styles.message}>
              {message && <div>{message}</div>}
            </div>
          </span>
        </div>
      </div>
    )
  }
}

export default Layout