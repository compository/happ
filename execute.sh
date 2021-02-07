#!/bin/bash
socat tcp-l:22222,fork,reuseaddr tcp:127.0.0.1:22202 & 
socat tcp-l:22223,fork,reuseaddr tcp:127.0.0.1:22203 & 
holochain-run-dna -r /database -u kitsune-proxy://CIW6PxKxsPPlcuvUCbMcKwUpaMSmB7kLD8xyyj4mqcw/kitsune-quic/h/proxy.holochain.org/p/5778/-- -a 22202 -p 22203 /dna/compository.dna.gz & 
sleep 5 && wds --root-dir /app --port 8888 &
sleep 5 && compository -c uhC0klH1NAzmRGd-AKfJ6bw_yWlBxyJITwrzMqZOJ3dSKv4beYKW- -i test-app -u ws://localhost:22223 -w /assets/calendar_events.dna.workdir/ &&
compository -c uhC0klH1NAzmRGd-AKfJ6bw_yWlBxyJITwrzMqZOJ3dSKv4beYKW- -i test-app -u ws://localhost:22223 -w /assets/file_storage.dna.workdir/ &&
compository -c uhC0klH1NAzmRGd-AKfJ6bw_yWlBxyJITwrzMqZOJ3dSKv4beYKW- -i test-app -u ws://localhost:22223 -w /assets/profiles.dna.workdir/ &&
compository -c uhC0klH1NAzmRGd-AKfJ6bw_yWlBxyJITwrzMqZOJ3dSKv4beYKW- -i test-app -u ws://localhost:22223 -w /assets/transactor.dna.workdir/ &&
compository -c uhC0klH1NAzmRGd-AKfJ6bw_yWlBxyJITwrzMqZOJ3dSKv4beYKW- -i test-app -u ws://localhost:22223 -w /assets/blocky.dna.workdir/ 