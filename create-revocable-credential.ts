import { createWallet } from '@affinidi/wallet-node-sdk'
import { Affinity } from '@affinidi/common'
// @ts-ignore
import platformCryptographyTools from '@affinidi/wallet-node-sdk/dist/PlatformCryptographyTools'
// @ts-ignore
const walletFactory = createWallet('AffinityCore')
const main = async () => {
const accessApiKey = '3794c3f8d9fb9a92770d79dbd5e490bc22bb0e58e9ff42475b379e35a575d13d'
const options = {
    env: 'prod' as 'dev' | 'staging' | 'prod',
    accessApiKey
}
const password = 'DemoP@ssw0rd!!'
const walletIssuer  = await walletFactory.createWallet(options, password)
const walletHolder  = await walletFactory.createWallet(options, password)

const id = `claimId:${(Math.random() + 1).toString(36).substring(2)}`
// https://ui.schema.affinidi.com/schemas/ContentLikeV1-0
const jsonSchema = 'https://schema.affinidi.com/ContentLikeV1-0.json'
const jsonContext = 'https://schema.affinidi.com/ContentLikeV1-0.jsonld'


 const unsignedVC = {
    '@context': ['https://www.w3.org/2018/credentials/v1', jsonContext],
    id,
    type: ['VerifiableCredential', 'ContentLike'],
    holder: {
      id: walletHolder.did
    },
    credentialSubject: {
      data: {
        '@type': ['VerifiableCredential', 'ContentLike'],
        url: 'https://www.youtube.com/watch?v=owbkzvLhblk',
        date: new Date().toISOString(),
        like: true,
        score: 10
      },
    },
    credentialSchema: {
      id:  jsonSchema,
      type: 'JsonSchemaValidator2018',
    },
    issuanceDate: new Date().toISOString(),
    expirationDate: '2065-09-10T00:00:00.000Z',
  }

const rvc = await walletIssuer.buildRevocationListStatus(unsignedVC)
const signedRevocableVC = await walletIssuer.signUnsignedCredential(rvc)


const verifier = new Affinity({
 registryUrl: `https://affinity-registry.${options.env}.affinity-project.org`,
 apiKey: accessApiKey
}, platformCryptographyTools)

console.log(signedRevocableVC)
const vr = await verifier.validateCredential(signedRevocableVC)
console.log(vr)

await walletIssuer.revokeCredential(id , ' dont like any more ')
const vrRevoked = await verifier.validateCredential(signedRevocableVC)
console.log(vrRevoked)
}
main().catch(console.error)

