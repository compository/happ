#!/bin/bash

# redirects everything from localhost:1111 (reachable from the outside) to 127.0.0.1:1235
# since the conductor binds to 127.0.0.1 instead of localhost
socat tcp-l:22222,fork,reuseaddr tcp:127.0.0.1:22202 & 
socat tcp-l:22223,fork,reuseaddr tcp:127.0.0.1:22203 & 

python3 -m http.server -d /app 8888 &

### Check if a directory does not exist ###
if [ ! -d "/database/done" ] 
then
    # This is the first run: create sandbox and run
    hc sandbox create --root /database -d=sandbox network --bootstrap https://bootstrap-staging.holo.host/ quic -p=kitsune-proxy://L6dcjD-I1xg23eU1Gwgxz6Xy1jb9gJmUhcqWAJlVafk/kitsune-quic/h/52.14.147.62/p/22224/-- 
    hc sandbox call install-app-bundle /happ/compository.happ
    mkdir /database/done
    RUST_LOG=info hc sandbox -f=22202 run --ports=22203
else
    # This is the second run: reset keystore and run

    #rm -rf /database/sandbox/keystore/socket
    lair-keystore -d /database/sandbox/keystore &
    sleep 7
    RUST_LOG=info holochain -c /database/sandbox/conductor-config.yaml 
fi
