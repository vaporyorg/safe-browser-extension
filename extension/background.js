import { createStore } from 'redux'
import { wrapStore } from 'react-chrome-redux'

import rootReducer from 'reducers'
import { loadStorage, saveStorage } from './utils/storage'
import { normalizeUrl } from 'utils/helpers'
import { lockAccount } from 'actions/account'
import {
  addTransaction,
  removeTransaction,
  removeAllTransactions,
} from 'actions/transactions'
import {
  MSG_SHOW_POPUP,
  MSG_UPDATE_CURRENT_SAFE,
  MSG_ALLOW_INJECTION,
  MSG_RESP_ALLOW_INJECTION,
  MSG_LOCK_ACCOUNT_TIMER,
  MSG_LOCK_ACCOUNT,
  MSG_CONFIGURE_ACCOUNT_LOCKING,
} from './utils/messages'

const persistedState = loadStorage()

const store = createStore(
  rootReducer,
  persistedState,
)

let storeCurrentSafeAddress
store.subscribe(() => {
  updateCurrentSafe()
  saveStorage(
    store.getState()
  )
})

wrapStore(store, { portName: 'SAFE_BROWSER_EXTENSION' })

const updateCurrentSafe = () => {
  let storePreviousSafeAddress = storeCurrentSafeAddress
  storeCurrentSafeAddress = store.getState().safes.currentSafe

  if (storeCurrentSafeAddress !== storePreviousSafeAddress) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        msg: MSG_UPDATE_CURRENT_SAFE,
        newSafeAddress: storeCurrentSafeAddress
      })
    })
  }
}

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    switch (request.msg) {

      case MSG_ALLOW_INJECTION:
        allowInjection(request, sendResponse)
        break

      case MSG_SHOW_POPUP:
        showPopup(request)
        break

      case MSG_LOCK_ACCOUNT_TIMER:
        lockAccountTimer()
        break

      case MSG_LOCK_ACCOUNT:
        lockAccountNow()
        break

      case MSG_CONFIGURE_ACCOUNT_LOCKING:
        lockAccountTimer()
        break

      default:

    }
  }
)

const allowInjection = (request, sendResponse) => {
  const allowInjection = isWhiteListedDapp(normalizeUrl(request.url))
  const currentSafe = allowInjection
    ? store.getState().safes.currentSafe
    : undefined

  sendResponse({
    msg: MSG_RESP_ALLOW_INJECTION,
    answer: allowInjection,
    currentSafe,
  })
}

const isWhiteListedDapp = (dApp) => {
  var safeStorage = localStorage.getItem('safe')

  if (safeStorage !== null) {
    var whitelistedDapps = JSON.parse(safeStorage).whitelistedDapps

    if (whitelistedDapps !== undefined) {
      if (whitelistedDapps.indexOf(dApp) > -1)
        return true
    }
  }
  return false
}

const showPopup = (request) => {
  chrome.windows.create({
    url: '/popup.html',
    type: 'popup',
    height: 500,
    width: 400
  }, (window) => {
    store.dispatch(addTransaction(request.tx, window.id))
  })
}

let lockingTimer = null
const lockAccountTimer = () => {
  if (lockingTimer !== null) {
    clearTimeout(lockingTimer)
  }

  const waitMinutes = store.getState().account.autoLockInterval

  lockingTimer = setTimeout(() => {
    store.dispatch(lockAccount())
  }, waitMinutes * 60000)
}

const lockAccountNow = () => {
  if (lockingTimer !== null) {
    clearTimeout(lockingTimer)
  }
  store.dispatch(lockAccount())
}

chrome.windows.onRemoved.addListener((windowId) => {
  store.dispatch(removeTransaction(windowId))
})

store.dispatch(lockAccount())
store.dispatch(removeAllTransactions())
