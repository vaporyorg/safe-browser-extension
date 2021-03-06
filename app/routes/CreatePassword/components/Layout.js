import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from 'components/Page'
import styles from './index.css'

class Layout extends Component {
  render() {
    const {
      password,
      error,
      updatePassword,
      properties,
    } = this.props

    return (
      <Page>
        <p className={styles.text}>Create the master password</p>
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />

        <div>
          <div className={(error && error.length) ? styles.correct : styles.wrong}>
            <p>Minimum 8 characters</p>
          </div>
          <div className={(error && error.number) ? styles.correct : styles.wrong}>
            <p>Minimum 1 number</p>
          </div>
          <div className={(error && error.letter) ? styles.correct : styles.wrong}>
            <p>Minimum 1 letter</p>
          </div>
          <div className={(error && error.row) ? styles.correct : styles.wrong}>
            <p>No more than 2 identical characters in a row</p>
          </div>
        </div>

        {this.props.continue &&
          <Link to={{
            pathname: '/confirm-password',
            state: {
              ...properties,
              password,
            }
          }}>
            <button>CONTINUE</button>
          </Link>
        }
        {!this.props.continue && <button>CONTINUE</button>}

      </Page>
    )
  }
}

export default Layout
