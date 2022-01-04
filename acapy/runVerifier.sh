#!/bin/bash
docker rm verifier

docker run -p 9001:9001  --name verifier --network=bridge -it bcgovimages/aries-cloudagent:py36-1.16-1_0.7.2 start \
-l Verifier \
-it http 0.0.0.0 9000 \
-ot http \
--admin 0.0.0.0 9001 \
--admin-insecure-mode \
-e http://172.17.0.4:9000/ \
--genesis-url  https://raw.githubusercontent.com/sovrin-foundation/sovrin/stable/sovrin/pool_transactions_builder_genesis \
--wallet-type indy \
--wallet-name verifierwallet \
--wallet-key verifierkey \
--log-level 'info'  \
--auto-provision \
--auto-accept-invites \
--auto-accept-requests \
--auto-ping-connection 