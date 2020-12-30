FROM guillemcordoba/rsm:eeb3c6e

RUN mkdir /dna
COPY ./compository.dna.gz /dna

RUN npm i -g @holochain-open-dev/holochain-run-dna@0.2.11

RUN mkdir /database
VOLUME /database

RUN apt-get install -y socat

# redirects everything from localhost:1111 (reachable from the outside) to 127.0.0.1:1235
# since the conductor binds to 127.0.0.1 instead of localhost

CMD socat tcp-l:22222,fork,reuseaddr tcp:127.0.0.1:22202 & socat tcp-l:22223,fork,reuseaddr tcp:127.0.0.1:22203 & holochain-run-dna -r /database -u kitsune-proxy://CIW6PxKxsPPlcuvUCbMcKwUpaMSmB7kLD8xyyj4mqcw/kitsune-quic/h/proxy.holochain.org/p/5778/-- -a 22202 -p 22203 /dna/compository.dna.gz