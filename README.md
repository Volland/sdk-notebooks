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
