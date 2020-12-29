FROM guillemcordoba/rsm:eeb3c6e

RUN mkdir /dna
COPY ./compository.dna.gz /dna

RUN npm i -g @holochain-open-dev/holochain-run-dna@0.2.10

RUN mkdir /database
VOLUME /database

CMD holochain-run-dna -r /database -u kitsune-proxy://CIW6PxKxsPPlcuvUCbMcKwUpaMSmB7kLD8xyyj4mqcw/kitsune-quic/h/proxy.holochain.org/p/5778/-- -p 8888 /dna/compository.dna.gz