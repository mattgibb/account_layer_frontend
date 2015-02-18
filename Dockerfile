FROM ubuntu:14.04
MAINTAINER Matt Gibb <matt@lendlayer.com>

# Install Nginx.
RUN \
  apt-get install -y software-properties-common && \
  add-apt-repository -y ppa:nginx/stable && \
  apt-get update && \
  apt-get install -y nginx && \
  apt-get install -y nodejs && \
  apt-get install -y npm && \
  rm -rf /var/lib/apt/lists/* && \
  echo "\ndaemon off;" >> /etc/nginx/nginx.conf && \
  chown -R www-data:www-data /var/lib/nginx

# Define mountable directories.
VOLUME ["/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]

# Define working directory.
WORKDIR /etc/nginx

RUN mv sites-enabled/default sites-enabled/old_default
COPY ["config/sites-enabled/default", "sites-enabled/default"]

# Define default command.
CMD ["nginx"]

# Expose ports.
EXPOSE 80
EXPOSE 443
