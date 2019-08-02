import ReactHtmlParser from 'react-html-parser'

let chrome = window.chrome
if (!chrome && process.env.NODE_ENV === 'test') {
  chrome = {
    i18n: {
      getMessage: message => message
    }
  }
}

export const ABOUT = ReactHtmlParser(chrome.i18n.getMessage('about'))
export const ADD = ReactHtmlParser(chrome.i18n.getMessage('add'))
export const ADD_WEBSITE = ReactHtmlParser(chrome.i18n.getMessage('add_website'))
export const AGREE = ReactHtmlParser(chrome.i18n.getMessage('agree'))
export const ALLOW_NOTIFICATIONS = ReactHtmlParser(chrome.i18n.getMessage('allow_notifications'))
export const APPROVE = ReactHtmlParser(chrome.i18n.getMessage('approve'))
export const AWAITING_CONFIRMATIONS = ReactHtmlParser(chrome.i18n.getMessage('awaiting_confirmations'))
export const BACK = ReactHtmlParser(chrome.i18n.getMessage('back'))
export const BRAVE_NOT_SUPPORTED = ReactHtmlParser(chrome.i18n.getMessage('brave_not_supported'))
export const BRAVE_NOT_SUPPORTED_DESC = ReactHtmlParser(chrome.i18n.getMessage('brave_not_supported_description'))
export const CHANGE_PASSWORD = ReactHtmlParser(chrome.i18n.getMessage('change_password'))
export const CHANGE_PASSWORD_DESCRIPTION = ReactHtmlParser(chrome.i18n.getMessage('change_password_description'))
export const CHECK_INTERNET_CONNECTION = ReactHtmlParser(chrome.i18n.getMessage('check_internet_connection'))
export const CONFIRM = ReactHtmlParser(chrome.i18n.getMessage('confirm'))
export const CONFIRM_CREATE_PASSWORD_TITLE = ReactHtmlParser(chrome.i18n.getMessage('confirm_create_password_title'))
export const CONFIRM_PASSWORD = ReactHtmlParser(chrome.i18n.getMessage('confirm_password'))
export const CONFIRM_TRANSACTION = ReactHtmlParser(chrome.i18n.getMessage('confirm_transaction'))
export const CONFIRM_TRANSACTION_STATE = ReactHtmlParser(chrome.i18n.getMessage('confirm_transaction_state'))
export const CONFIRM_WITH_MOBILE = ReactHtmlParser(chrome.i18n.getMessage('confirm_with_mobile'))
export const CONFIRMATION_REQUEST = ReactHtmlParser(chrome.i18n.getMessage('confirmation_requested'))
export const CONNECT_EXTENSION_EXPLANATION = ReactHtmlParser(chrome.i18n.getMessage('connect_extension_explanation'))
export const CONNECT_NEW_SAFE = ReactHtmlParser(chrome.i18n.getMessage('connect_new_safe'))
export const CONNECTED_EXTENSION_SUCCESFULLY = ReactHtmlParser(chrome.i18n.getMessage('connected_extension_succesfully'))
export const CREATE_PASSWORD_TITLE = ReactHtmlParser(chrome.i18n.getMessage('create_password_title'))
export const DEFAULT_SAFE_NAME = ReactHtmlParser(chrome.i18n.getMessage('default_safe_name'))
export const DELETE_ALL = ReactHtmlParser(chrome.i18n.getMessage('delete_all'))
export const DOMAIN = ReactHtmlParser(chrome.i18n.getMessage('domain'))
export const DOWNLOAD_MOBILE_APP = ReactHtmlParser(chrome.i18n.getMessage('download_mobile_app'))
export const ENTER_PASSWORD = ReactHtmlParser(chrome.i18n.getMessage('enter_password'))
export const ERROR_SYNCING = ReactHtmlParser(chrome.i18n.getMessage('error_syncing'))
export const ESTIMATED_TRANSACTION_FEE = ReactHtmlParser(chrome.i18n.getMessage('estimated_transaction_fee'))
export const GET_CHROME = ReactHtmlParser(chrome.i18n.getMessage('get_chrome'))
export const GET_STARTED = ReactHtmlParser(chrome.i18n.getMessage('get_started'))
export const INTERNET_CONNECTION_ERROR = ReactHtmlParser(chrome.i18n.getMessage('internet_connection_error'))
export const INVALID_WEBSITE = ReactHtmlParser(chrome.i18n.getMessage('invalid_website'))
export const REPLACE_RECOVERY_PHRASE_DESCRIPTION = ReactHtmlParser(chrome.i18n.getMessage('layout_replace_recovery_phrase_transaction_info_description'))
export const LOCKING_MIN = ReactHtmlParser(chrome.i18n.getMessage('locking_min'))
export const LOCKING_MIN_DEFAULT = ReactHtmlParser(chrome.i18n.getMessage('locking_min_default'))
export const MANAGE_SITES_WHITELIST = ReactHtmlParser(chrome.i18n.getMessage('manage_sites_whitelist'))
export const MAX_TOTAL = ReactHtmlParser(chrome.i18n.getMessage('max_total'))
export const MESSAGE = ReactHtmlParser(chrome.i18n.getMessage('message'))
export const NAME = ReactHtmlParser(chrome.i18n.getMessage('name'))
export const NEW_PASSWORD = ReactHtmlParser(chrome.i18n.getMessage('new_password'))
export const NEW_PASSWORD_IDENTICAL_CHARS = ReactHtmlParser(chrome.i18n.getMessage('new_password_identical_chars'))
export const NEW_PASSWORD_MIN_CHAR = ReactHtmlParser(chrome.i18n.getMessage('new_password_min_chars'))
export const NEW_PASSWORD_NUMBER_AND_LETTER = ReactHtmlParser(chrome.i18n.getMessage('new_password_number_and_letter'))
export const NEXT = ReactHtmlParser(chrome.i18n.getMessage('next'))
export const NO_THANKS = ReactHtmlParser(chrome.i18n.getMessage('no_thanks'))
export const NOTIFICATIONS_PERMISSION_REQUIRED = ReactHtmlParser(chrome.i18n.getMessage('notifications_permission_required'))
export const OPTIONS_PAGE_DESCRIPTION = ReactHtmlParser(chrome.i18n.getMessage('options_page_description'))
export const OPTIONS_PAGE_HEADER = ReactHtmlParser(chrome.i18n.getMessage('options_page_header'))
export const OPTIONS_PAGE_TITLE = ReactHtmlParser(chrome.i18n.getMessage('options_page_title'))
export const PASSWORD_DOESNT_MATCH = ReactHtmlParser(chrome.i18n.getMessage('password_doesnt_match'))
export const PAYMENT_TOKEN = ReactHtmlParser(chrome.i18n.getMessage('payment_token'))
export const PRIVACY_POLICY = ReactHtmlParser(chrome.i18n.getMessage('privacy_policy'))
export const PROVIDER_NOT_SYNCRONOUS = ReactHtmlParser(chrome.i18n.getMessage('provider_not_syncronous'))
export const REJECT = ReactHtmlParser(chrome.i18n.getMessage('reject'))
export const REPLACE_RECOVERY_PRASE = ReactHtmlParser(chrome.i18n.getMessage('replace_recovery_phrase'))
export const REPLACE_RECOVERY_PRASE_EXPLANATION = ReactHtmlParser(chrome.i18n.getMessage('replace_recovery_phrase_explanation'))
export const REQUEST_CONFIRMATION = ReactHtmlParser(chrome.i18n.getMessage('request_confirmation'))
export const REQUEST_CONFIRMATION_WAIT_X_S = ReactHtmlParser(chrome.i18n.getMessage('request_confirmation_wait_x_s'))
export const RESTRICTED_SITE =  ReactHtmlParser(chrome.i18n.getMessage('restricted_site'))
export const RESYNC_WITH_MOBILE_APP = ReactHtmlParser(chrome.i18n.getMessage('resync_with_mobile_app'))
export const RETRY = ReactHtmlParser(chrome.i18n.getMessage('retry'))
export const REVIEW_SIGN_MESSAGE = ReactHtmlParser(chrome.i18n.getMessage('review_sign_message'))
export const REVIEW_TERMS = ReactHtmlParser(chrome.i18n.getMessage('review_terms'))
export const REVIEW_TRANSACTION = ReactHtmlParser(chrome.i18n.getMessage('review_transaction'))
export const SAFE_ALREADY_EXISTS = ReactHtmlParser(chrome.i18n.getMessage('safe_already_exists'))
export const SAFE_BALANCE = ReactHtmlParser(chrome.i18n.getMessage('safe_balance'))
export const SAFE_CONNECTED_DESCRIPTION = ReactHtmlParser(chrome.i18n.getMessage('safe_connected_description'))
export const SAFE_CONNECTED_TITLE = ReactHtmlParser(chrome.i18n.getMessage('safe_connected_title'))
export const SAFE_FOR_ANDROID = ReactHtmlParser(chrome.i18n.getMessage('safe_for_android'))
export const SAFE_FOR_IOS = ReactHtmlParser(chrome.i18n.getMessage('safe_for_ios'))
export const SAVE = ReactHtmlParser(chrome.i18n.getMessage('save'))
export const SAVE_NEW_PASSWORD = ReactHtmlParser(chrome.i18n.getMessage('save_new_password'))
export const SET_LOCK_TIMEOUT = ReactHtmlParser(chrome.i18n.getMessage('set_lock_timeout'))
export const SLOGAN = ReactHtmlParser(chrome.i18n.getMessage('slogan'))
export const STORE_DESCRIPTION = ReactHtmlParser(chrome.i18n.getMessage('store_description'))
export const SYNC = ReactHtmlParser(chrome.i18n.getMessage('sync'))
export const SYNCED_TOKEN = ReactHtmlParser(chrome.i18n.getMessage('synced_token'))
export const TERMS = ReactHtmlParser(chrome.i18n.getMessage('terms'))
export const TERMS_OF_SERVICE = ReactHtmlParser(chrome.i18n.getMessage('terms_of_service'))
export const TRANSACTION_REJECTED = ReactHtmlParser(chrome.i18n.getMessage('transaction_rejected'))
export const TRANSACTION_SUBMITTED = ReactHtmlParser(chrome.i18n.getMessage('transaction_submitted'))
export const UNKNOWN_TOKEN = ReactHtmlParser(chrome.i18n.getMessage('unknown_token'))
export const UNLOCK = ReactHtmlParser(chrome.i18n.getMessage('unlock'))
export const VERIFYING_CONTRACT = ReactHtmlParser(chrome.i18n.getMessage('verifying_contract'))
export const VERSION = ReactHtmlParser(chrome.i18n.getMessage('version'))
export const VIEW_MESSAGE = ReactHtmlParser(chrome.i18n.getMessage('view_message'))
export const VIEW_ON_ETHERSCAN = ReactHtmlParser(chrome.i18n.getMessage('view_on_etherscan'))
export const WEB3_INJECTION_FAILED = ReactHtmlParser(chrome.i18n.getMessage('web3_injection_failed'))
export const WEBSITE_NOT_WHITELISTED = ReactHtmlParser(chrome.i18n.getMessage('website_not_whitelisted'))
export const WEBSITE_WHITELISTED = ReactHtmlParser(chrome.i18n.getMessage('website_whitelisted'))
export const WHITELISTED_SITE = ReactHtmlParser(chrome.i18n.getMessage('whitelisted_site'))
export const YOU_ARE_SIGNING = ReactHtmlParser(chrome.i18n.getMessage('you_are_signing'))
