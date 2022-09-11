const { createWallet } = require('@affinidi/wallet-node-sdk')
const walletFactory = createWallet('AffinityCore')
const accessApiKey = '<your key>'
const options = {
    env: 'prod',
    accessApiKey,
}
const issuerWallet = await walletFactory.createWallet(options, 'P@55word!!!')
const holderWallet = await walletFactory.createWallet(options, 'P@55word!!!')

//create offer by issuer
const offeredCredentials = [
  {
    type: 'ContentLike',
    renderInfo:{},
  }]

 const callbackUrl = 'https://vp-service.com/callback'

 const credentialOfferRequestToken = await issuerWallet.generateCredentialOfferRequestToken(
  offeredCredentials,
  {
    callbackUrl,
  },
)
// create response by holder
const credentialOfferResponseToken = await holderWallet.createCredentialOfferResponseToken(
  credentialOfferRequestToken,
)
// issuer verify response
const result = await issuerWallet.verifyCredentialOfferResponseToken(
      credentialOfferResponseToken,
      credentialOfferRequestToken,
    )
// issue VC based on response
const jsonSchema = 'https://schema.affinidi.com/ContentLikeV1-0.json'
const jsonContext = 'https://schema.affinidi.com/ContentLikeV1-0.jsonld'
const id = `claimId:${(Math.random() + 1).toString(36).substring(2)}`
const unsignedVC = {
    '@context': ['https://www.w3.org/2018/credentials/v1', jsonContext],
    id,
    type: ['VerifiableCredential', 'ContentLike'],
    holder: {
      id: 'placeholder'
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
const signedCredentials = await issuerWallet.signCredentials(
      credentialOfferResponseToken,
      [unsignedVC],
    )
  