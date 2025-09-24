FROM php:8.4.12-fpm-alpine3.21

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

RUN docker-php-ext-install \
    gd \
    pdo \
    pdo_mysql \
    intl 

# Agora remova as dependências de build
RUN apk del gcc g++ make

# Instale nodejs e npm separadamente (não serão removidos)
RUN apk add --no-cache nodejs npm

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer