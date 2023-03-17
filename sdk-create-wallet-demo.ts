import { createWallet } from '@affinidi/wallet-node-sdk'
import { EventComponent } from '@affinidi/wallet-core-sdk'
const main = async () => {
const walletFactory = createWallet(EventComponent.AffinidiCore)
const accessApiKey = '<your key use affinidi cli to generate a key>'
const password = 'P@55w0rd!!!'
const options = {
    env: 'prod' as 'prod' | 'staging' | 'dev',
    accessApiKey: accessApiKey
}
const sdk = await walletFactory.createWallet(options, password)
const seed = sdk.encryptedSeed 
const did = sdk.did  
console.log('create wallet',{seed , did})

const sdkOpen = await walletFactory.openWalletByEncryptedSeed(options, seed , password)
console.log('open wallet',{did:sdkOpen.did})
const didDoc = await sdkOpen.resolveDid(sdkOpen.did)
console.log(JSON.stringify(didDoc, null, 2))
}

main().catch(console.error)

