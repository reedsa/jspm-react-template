FROM ubuntu:14.04

RUN apt-get update && apt-get install -y nginx

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

RUN rm /etc/nginx/sites-enabled/default

ADD ./build /var/www/app

ADD nginx/app.conf /etc/nginx/sites-available/
RUN ln -s /etc/nginx/sites-available/app.conf /etc/nginx/sites-enabled/app.conf

EXPOSE 80

CMD service nginx start