FROM guillemcordoba/rsm:d3a6144

RUN apt-get update && apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt-get install -y python3

RUN apt-get install -y unzip

RUN mkdir /happ
RUN mkdir /database
RUN mkdir /app

COPY ./happ/compository.happ /happ
COPY ./app.zip /
COPY ./execute.sh /happ
RUN unzip /app.zip -d /app

VOLUME /database

CMD . /happ/execute.sh