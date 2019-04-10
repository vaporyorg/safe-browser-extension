import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { VIEW_MESSAGE_URL } from 'routes/routes'
import {
  REVIEW_SIGN_MESSAGE,
  YOU_ARE_SIGNING,
  NAME,
  URL,
  VERIFYING_CONTRACT,
  VIEW_MESSAGE
} from '../../../../../config/messages'
import HeaderPopup from 'components/Popup/HeaderPopup'
import AccountData from 'components/Popup/AccountData'
import SendSignMessage from 'routes/popup/SignMessage/components/SendSignMessage/containers/SendSignMessage'
import styles from 'assets/css/global.css'

class Layout extends Component {
  prevent = (e) => {
    e.preventDefault()
  }

  render() {
    const {
      signMessages,
      balance,
      lockedAccount,
      loadedData,
      reviewedSignature,
      address,
      safeAlias,
      ethAccount,
      removeSignMessage,
      showSignMessage,
      handleSignMessage
    } = this.props

    const signedMessage = JSON.parse(signMessages.message[1])

    return (
      <React.Fragment>
        <HeaderPopup
          title={REVIEW_SIGN_MESSAGE}
          numElements={1}
          elementNumber={0}
        />
        <form onSubmit={this.prevent} className={styles.PageContent}>
          <AccountData
            address={address}
            alias={safeAlias}
            balance={balance}
            symbol={'ETH'}
          />
          <div className={styles.youAreSigning}>{YOU_ARE_SIGNING}:</div>
          {signedMessage && 
            <React.Fragment>
              <div className={styles.signMessageSummary}>
                <span>
                  <p><b>{NAME}</b></p>
                  <span>{signedMessage.domain.name}</span>
                </span>
                <span>
                  <p><b>{URL}</b></p>
                  <span></span>
                </span>
                <span>
                  <p><b>{VERIFYING_CONTRACT}</b></p>
                  <span>{signedMessage.domain.verifyingContract}</span>
                </span>
              </div>
              <div className={styles.viewMessage}>
                <Link to={VIEW_MESSAGE_URL}>{VIEW_MESSAGE}</Link>
              </div>
            </React.Fragment>
          }
          {signMessages && (signMessages.message[2] === 'sendSignMessage') &&
            <SendSignMessage
              ethAccount={ethAccount}
              showSignMessage={showSignMessage}
              handleSignMessage={handleSignMessage}
              removeSignMessage={removeSignMessage}
              lockedAccount={lockedAccount}
              loadedData={loadedData}
              reviewedSignature={reviewedSignature}
            />
          }
        </form>
      </React.Fragment>
    )
  }
}

export default Layout
