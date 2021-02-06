FROM ubuntu:16.04

WORKDIR /
ENV DEBIAN_FRONTEND=noninteractive
ENV PYTHONIOENCODING=utf-8
ENV LANG=C.UTF-8

# install packages
## Preperation
RUN apt-get update -y
RUN apt-get install -y apt-utils
RUN apt-get install -y python3-pip
RUN apt-get install software-properties-common -y

## others
RUN apt-get install -y git
RUN apt-get install -y wget
RUN apt-get install -y vim

## for app
RUN pip3 install flask
RUN pip3 install flask_sqlalchemy


## ---for local build---
RUN mkdir web-sp
COPY ./ /web-sp

WORKDIR /web-sp

CMD ["bash"]