#!/bin/bash
docker stop holder
docker rm holder

docker run -p 8001:8001  --name holder --network=bridge -it bcgovimages/aries-cloudagent:py36-1.16-0_0.6.0 start \
-l Holder \
-it http 0.0.0.0 8000 \
-ot http \
--admin 0.0.0.0 8001 \
--admin-insecure-mode \
-e http://172.17.0.3:8000/ \
--genesis-url  https://raw.githubusercontent.com/sovrin-foundation/sovrin/stable/sovrin/pool_transactions_builder_genesis \
--wallet-type indy \
--wallet-name holderwallet \
--wallet-key holderkey \
--log-level 'info'  \
--auto-provision \
--auto-accept-invites \
--auto-accept-requests \
--auto-ping-connection 