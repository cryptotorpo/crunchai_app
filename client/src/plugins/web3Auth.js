import { Chains, createWeb3Auth } from '@kolirt/vue-web3-auth'

const { localhost } = Chains
localhost.id = 31337

export default createWeb3Auth({
  projectId: '440135962d06f8f2501e8a4a111150a9', // generate here https://cloud.walletconnect.com/ and turn on 'Supports Sign v2'
  chains: [Chains.mainnet, localhost],
})
