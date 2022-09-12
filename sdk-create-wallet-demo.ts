import { createWallet } from '@affinidi/wallet-node-sdk'
import fetch from 'node-fetch' 

const main = async () => {
const walletFactory = createWallet('AffinityCore')
const accessApiKey = '<your key>'
const password = 'P@55w0rd!!!'
const options = {
    env: 'prod',
    accessApiKey: accessApiKey
}
const sdk = await walletFactory.createWallet(options, password)
const seed = sdk.encryptedSeed 
const did = sdk.did  

const sdkOpen = await createWallet('test').openWalletByEncryptedSeed(options, seed , password)

const resolveDid = async () => {

const resolverUrl = `https://affinity-registry.${options.env}.affinity-project.org/api/v1/did/resolve-did`
const response = await fetch(resolverUrl, {
    method: 'post',
    body: JSON.stringify({did: did}),
    headers: {
        'Content-Type': 'application/json',
        'Api-Key': options.accessApiKey
             }
});
didDoc = await response.json()     
  
}
resolveDid().catch(console.error)
}

main().catch(console.error)

