## SDK notebooks 
It is all about [Affinidi SDK](https://github.com/affinityproject/affinidi-core-sdk)
Majority of this notebooks and presentation is just a material for my youtube videos 
[SDK playlist](https://www.youtube.com/watch?v=Pk5Rnd5ixCI&list=PL1e3Vu_V-AU9yKjCWIPWDZylRVZvw5kPW)

I am a big fun of [literate programming](https://en.wikipedia.org/wiki/Literate_programming) thats why i use a jupyter lab notebooks.
I still playing with proper instruments so some of notebooks with  [tslab](https://github.com/yunabe/tslab)
Pls follow a pre-install instructions for every notebook. if you do not see any it is mean we run a tslab one 

## Pre-install

### tslab env 

the simplest way is to use a docker.

```bash
docker run -p 8888:8888 -v <repo-folder>:/opt/app/data jdelemar/jupyterlab
```
**CAUTION** Image take 1.05 GB

### Packages 
Pls run to install all shared notebook dependencies 
```
npm install
```
### Affinidi API-key
I mention few times in a video that you need api key to run a samples. It is not recommended to share your api key on public.
So for all code samples or notebooks you should provide you own key.
You could get one for prod env using a Affinidi VS code extension or using [affinidi cli](https://github.com/affinidi/affinidi-cli)

### Notes 
together with notebook i try to share a code samples so if you want you could go to code directly

### Guide to hands one notebooks 
| Title  Video | Notebook | Note |
|--------------|----------|------|
|[Affinidi SDK : Whats happen when we create a wallet]( https://www.youtube.com/watch?v=Pk5Rnd5ixCI&list=PL1e3Vu_V-AU9yKjCWIPWDZylRVZvw5kPW&index=1)| [demo-sdk-create-wallet](.sdk-book/demo-sdk-create-wallet.ipynb)| Get started and create wallet|
|[Issue, Verify , Revoke VCs on Edge. How to keep control on issued Vcs](https://www.youtube.com/watch?v=91oIel04pvE&list=PL1e3Vu_V-AU9yKjCWIPWDZylRVZvw5kPW&index=2)|[reate-revocable-vc](./create-revocable-vc.ipynb)| core VCs operations . [standalone ts app](./create-revocable-credential.ts)|
|[Affinidi SDK: Howto offer VC to holder. Exchange protocols](https://www.youtube.com/watch?v=6PsQOLE6D8k&list=PL1e3Vu_V-AU9yKjCWIPWDZylRVZvw5kPW&index=3)|[offer VC](./request-for-offer.ipynb)| Exchange protocols Offer a VC [standalone app](./offer-vc.ts)|
|[AffinidiSDK: Share VCs with a Verifier via VP. handson session](https://www.youtube.com/watch?v=wPgcwOM0zyE&list=PL1e3Vu_V-AU9yKjCWIPWDZylRVZvw5kPW&index=4)| [share-vp](./share-vp.ipynb)| All about VP. See more theoretical video - [Verifiable presentation is an answer.](https://www.youtube.com/watch?v=s42fvj_qf4k)|
|[AffinidiSDK: VC Vault - encrypted user controlled VC storage](https://www.youtube.com/watch?v=JEcq75Fv6aI&list=PL1e3Vu_V-AU9yKjCWIPWDZylRVZvw5kPW&index=5)| [credential-storage](./credential-storage.ipynb)| VC storage |
|[Affinidi SDK: cross-device edge Wallets](https://www.youtube.com/watch?v=aiv87p7vv4I&list=PL1e3Vu_V-AU9yKjCWIPWDZylRVZvw5kPW&index=6)|[user-managment](./user-managment.ipynb)|Go deep to full custodial case and user management|  
|[Affinidi SDK & Presentation Exchange deep dive](https://www.youtube.com/watch?v=LLbST4zC0kU)|[PEX](./pex-vp.ipynb)|

### Useful Theory Videos 
- [Verifiable Credentials for Data Unlocking. core of web5](https://www.youtube.com/watch?v=owbkzvLhblk)
- [Verifiable presentation is an answer.](https://www.youtube.com/watch?v=s42fvj_qf4k)
- [Affinidi SDK: connect all dots. How different SSI entities connected to each other](https://www.youtube.com/watch?v=eH-1eNoFWzI&list=PL1e3Vu_V-AU9yKjCWIPWDZylRVZvw5kPW&index=7)

- [Gets back to a future - protocols vs apps . How protocols empower SSI](https://www.youtube.com/watch?v=OdFV2ZKbTTA&list=PL1e3Vu_V-AU9yKjCWIPWDZylRVZvw5kPW&index=8) - why protocols is critical for SSI
- [SSI wallets , agents , hubs](https://www.youtube.com/watch?v=l0JRGWAdybU&list=PL1e3Vu_V-AU9yKjCWIPWDZylRVZvw5kPW&index=9)
- [Web3 login web3 ID vs Web5 DIDAuth ( DID authentication)](https://www.youtube.com/watch?v=NwN_4ksbuE4&list=PL1e3Vu_V-AU9yKjCWIPWDZylRVZvw5kPW&index=10)

## More about SSI 
- [About SSI list](https://www.youtube.com/playlist?list=PL1e3Vu_V-AU_juJXmZzFDVvOrbapC3dpz)

## Book 
docker run  -it -v /Users/volodymyrpavlyshyn/Documents/work/personal/sdk-notebooks:/opt/app/book --entrypoint sh  jbook3
