#!/bin/bash
docker stop tails-server
docker rm tails-server

docker run \
--name tails-server \
--network=bridge \
-p 9000:9000 \
-d yunxizhang/indy-tails-server:latest tails-server \
--host 0.0.0.0 \
--port 9000 \
--storage-path /tmp/tail-files \
--log-level INFO