FROM guillemcordoba/rsm:fd8049a48ac12ef3e190b48a79ffe8d8b5948caa as build

RUN cargo install --git https://github.com/compository/cli

FROM ubuntu
COPY --from=build /usr/local/cargo/bin/holochain /usr/local/bin/holochain
COPY --from=build /usr/local/cargo/bin/lair-keystore /usr/local/bin/lair-keystore
COPY --from=build /usr/local/cargo/bin/compository /usr/local/bin/compository

RUN apt-get update && apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt-get install -y nodejs

RUN npm i -g @holochain-open-dev/holochain-run-dna@0.3.1
RUN npm i -g @web/dev-server
RUN apt-get install -y socat unzip

RUN mkdir /dna
RUN mkdir /database
RUN mkdir /app
RUN mkdir /assets

COPY ./assets /assets
COPY ./compository.dna.gz /dna
COPY ./app.zip /
COPY ./execute.sh /dna
RUN unzip /app.zip -d /app

VOLUME /database

# redirects everything from localhost:1111 (reachable from the outside) to 127.0.0.1:1235
# since the conductor binds to 127.0.0.1 instead of localhost

CMD . /dna/execute.sh