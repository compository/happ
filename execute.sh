#!/bin/bash

# redirects everything from localhost:1111 (reachable from the outside) to 127.0.0.1:1235
# since the conductor binds to 127.0.0.1 instead of localhost
socat tcp-l:22222,fork,reuseaddr tcp:127.0.0.1:22202 & 
socat tcp-l:22223,fork,reuseaddr tcp:127.0.0.1:22203 & 

sleep 2 && wds --root-dir /app --port 8888 &

### Check if a directory does not exist ###
if [ ! -d "/database/sandbox" ] 
then
    hc sandbox create --root /database -d=sandbox network --bootstrap https://bootstrap-staging.holo.host/ quic -p=kitsune-proxy://sINaxH2sL-n4HminpxHEox5flT-ve_tzMK8NtJw3Fck/kitsune-quic/h/3.141.223.68/p/5778/--
    hc sandbox call install-app-bundle /happ/compository.happ
    hc sandbox -f=22202 run ---ports=22203
else
    hc sandbox -f=22202 run
fi
