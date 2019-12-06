FROM nginx

COPY ./yarmosh.by.conf /etc/nginx/conf.d

COPY /certs/bundle.crt /certs/
COPY /certs/yarmosh_by.key /certs/

COPY ./index.html /data/www/

RUN ls /certs
