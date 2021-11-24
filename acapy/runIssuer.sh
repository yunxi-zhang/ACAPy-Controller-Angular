#!/bin/bash
docker rm issuer

docker run -p 7001:7001  --name issuer --network=bridge -it bcgovimages/aries-cloudagent:py36-1.16-0_0.6.0 start \
-l Issuer \
-it http 0.0.0.0 7000 \
-ot http \
--admin 0.0.0.0 7001 \
--admin-insecure-mode \
-e http://172.17.0.2:7000/ \
--genesis-url  https://raw.githubusercontent.com/sovrin-foundation/sovrin/stable/sovrin/pool_transactions_builder_genesis \
--seed La3QE23tejV7x9gAj63UrDft2ThQoMj0  \
--wallet-type indy \
--wallet-name issuerwallet \
--wallet-key issuerkey \
--log-level 'info'  \
--auto-provision \
--auto-accept-invites \
--auto-accept-requests \
--auto-ping-connection 