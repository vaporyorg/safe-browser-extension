const ProviderEngine = require('web3-provider-engine')
const RpcSubprovider = require('web3-provider-engine/subproviders/rpc.js')
const Web3 = require('web3')

const GnosisProvider = require('../app/utils/GnosisProvider')
const config = require('../config.js')
const {
  EV_SCRIPT_READY,
  EV_UPDATE_WEB3
} = require('./utils/messages')

//window.addEventListener('load', function () {
//  console.log("Web page loaded")
//})

if (typeof window.web3 !== 'undefined') {
  throw new Error('web3 already exists.')
}

var engine = new ProviderEngine()
const gnosisProvider = new GnosisProvider()
engine.addProvider(gnosisProvider)
engine.addProvider(new RpcSubprovider({
  rpcUrl: config.networks[config.currentNetwork].url,
}))

engine.start()

var web3 = new Web3(engine)
global.web3 = web3

document.addEventListener(EV_UPDATE_WEB3, function (data) {
  gnosisProvider.updateCurrentSafe(data.detail)
})

const scriptReadyEvent = new CustomEvent(EV_SCRIPT_READY)
document.dispatchEvent(scriptReadyEvent)
