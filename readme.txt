# o dockerfile

FROM php:8.4.12-fpm-alpine3.21

# Instala dependências
RUN apk update && apk add --no-cache \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    libzip-dev \
    git \
    unzip \
    icu-dev \
    libxml2-dev \
    openssl-dev \
    bash \
    gcc g++ make

# Extensões PHP necessárias
RUN docker-php-ext-install \
    gd \
    pdo \
    pdo_mysql \
    intl 

# Remove dependências de build
RUN apk del gcc g++ make

# Instala Node.js e npm (mantidos no container)
RUN apk add --no-cache nodejs npm

# Instala Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Ajusta permissões para o CodeIgniter poder escrever em writable/
RUN mkdir -p /var/www/html/codeigniter/writable \
 && chown -R www-data:www-data /var/www/html/codeigniter/writable \
 && chmod -R 775 /var/www/html/codeigniter/writable

# Habilita log de erros do PHP em /var/log/php_errors.log
RUN mkdir -p /var/log \
 && touch /var/log/php_errors.log \
 && chown www-data:www-data /var/log/php_errors.log \
 && echo "log_errors = On" >> /usr/local/etc/php/conf.d/docker-php-error.ini \
 && echo "error_log = /var/log/php_errors.log" >> /usr/local/etc/php/conf.d/docker-php-error.ini


=============================================================================================================
# services:
#   php:
#     build: 
#       context: ./images/php
#     container_name: ct_php
#     volumes:
#       - ./volume_app:/var/www/html
#   nginx:
#     image: nginx:latest
#     container_name: ct_nginx
#     volumes:
#       - ./images/nginx/default.conf:/etc/nginx/conf.d/default.conf
#       - ./volume_app:/var/www/html
#     ports:
#       - "8080:80"
#       # - "8081:81"   # CodeIgniter

version: "3.9"

services:
  php:
    build:
      context: ./images/php
    container_name: ct_php
    volumes:
      - app_data:/var/www/html
    networks:
      - app_network

  nginx:
    image: nginx:latest
    container_name: ct_nginx
    depends_on:
      - php
    volumes:
      - ./images/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro
      - app_data:/var/www/html
    ports:
      - "8080:80"
    networks:
      - app_network

volumes:
  app_data:

networks:
  app_network:
=============================================================================================================

