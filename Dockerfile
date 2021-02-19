FROM python:3.7

RUN apt-get update -y
RUN apt-get install -y vim

RUN mkdir web-sp
COPY ./ /web-sp

WORKDIR /web-sp

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["bash"]