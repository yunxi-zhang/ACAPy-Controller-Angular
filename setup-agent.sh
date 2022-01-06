#!/bin/bash

# import common.sh
source ./common.sh

#killall command doesn't work on redhat
stepInfo "Kill all existing node apps"
killall node

stepInfo "Delete the issuer folder if it exists"
if [ -d issuer ]; then
    rm -rf issuer
fi
ls -al issuer

stepInfo "Delete the holder folder if it exists"
if [ -d holder ]; then
    rm -rf holder
fi
ls -al holder

stepInfo "Delete the verifier folder if it exists"
if [ -d verifier ]; then
    rm -rf verifier
fi
ls -al verifier

stepInfo "Create the issuer app"
cp -r ./agent ./issuer
cd ./issuer
npm install
nohup ng serve -o --port 4000 &
cd ..

stepInfo "Create the holder app"
cp -r ./agent ./holder
cp ./agent-specific/holder/index.html ./holder/src/index.html
cp ./agent-specific/holder/nav.component.html ./holder/src/app/components/nav/nav.component.html 
cp ./agent-specific/holder/interceptor.service.ts ./holder/src/app/services/interceptor.service.ts
cd ./holder
npm install
nohup ng serve -o --port 4001 &
cd ..

stepInfo "Create the verifier app"
cp -r ./agent ./verifier
cp ./agent-specific/verifier/index.html ./verifier/src/index.html
cp ./agent-specific/verifier/nav.component.html ./verifier/src/app/components/nav/nav.component.html 
cp ./agent-specific/verifier/interceptor.service.ts ./verifier/src/app/services/interceptor.service.ts
cd ./verifier
npm install
nohup ng serve -o --port 4002 &