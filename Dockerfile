FROM guillemcordoba/rsm:d3a6144

RUN apt-get install -y python3 unzip

RUN mkdir /happ
RUN mkdir /database
RUN mkdir /app

COPY ./workdir/no-file-storage/compository.happ /happ
COPY ./app.zip /
COPY ./execute.sh /happ
RUN unzip /app.zip -d /app

VOLUME /database

CMD . /happ/execute.sh