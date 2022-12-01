import { createWallet } from '@affinidi/wallet-node-sdk'
import { EventComponent } from '@affinidi/wallet-core-sdk'
const main = async () => {
const walletFactory = createWallet('AffinityCore' as EventComponent)
const accessApiKey = '3794c3f8d9fb9a92770d79dbd5e490bc22bb0e58e9ff42475b379e35a575d13d'
const password = 'P@55w0rd!!!'
const options = {
    env: 'prod' as 'prod' | 'staging' | 'dev',
    accessApiKey: accessApiKey
}
const sdk = await walletFactory.createWallet(options, password)
const seed = sdk.encryptedSeed 
const did = sdk.did  

console.log({seed , did})

const sdkOpen = await walletFactory.openWalletByEncryptedSeed(options, seed , password)
const didDoc = await sdkOpen.resolveDid(did)
console.log(JSON.stringify(didDoc, null, 2))
}

main().catch(console.error)

