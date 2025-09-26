# FROM php:8.4.12-fpm-alpine3.21

# RUN apk update && apk add --no-cache \
#     libpng-dev \
#     libjpeg-turbo-dev \
#     freetype-dev \
#     libzip-dev \
#     git \
#     unzip \
#     icu-dev \
#     libxml2-dev \
#     openssl-dev \
#     bash \
#     gcc g++ make

# RUN docker-php-ext-install \
#     gd \
#     pdo \
#     pdo_mysql \
#     intl 

# # Agora remova as dependências de build
# RUN apk del gcc g++ make

# # Instale nodejs e npm separadamente (não serão removidos)
# RUN apk add --no-cache nodejs npm

# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


# FROM php:8.4.12-fpm-alpine3.21

# # Instala dependências
# RUN apk update && apk add --no-cache \
#     libpng-dev \
#     libjpeg-turbo-dev \
#     freetype-dev \
#     libzip-dev \
#     git \
#     unzip \
#     icu-dev \
#     libxml2-dev \
#     openssl-dev \
#     bash \
#     gcc g++ make

# # Extensões PHP necessárias
# RUN docker-php-ext-install \
#     gd \
#     pdo \
#     pdo_mysql \
#     intl 

# # Remove dependências de build
# RUN apk del gcc g++ make

# # Instala Node.js e npm (mantidos no container)
# RUN apk add --no-cache nodejs npm

# # Instala Composer
# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# # Ajusta permissões para o CodeIgniter poder escrever em writable/
# RUN mkdir -p /var/www/html/codeigniter/writable \
#  && chown -R www-data:www-data /var/www/html/codeigniter/writable \
#  && chmod -R 775 /var/www/html/codeigniter/writable

#  RUN chown -R www-data:www-data /var/www/html \
#  && find /var/www/html -type d -exec chmod 755 {} \; \
#  && find /var/www/html -type f -exec chmod 644 {} \;

# # Habilita log de erros do PHP em /var/log/php_errors.log
# RUN mkdir -p /var/log \
#  && touch /var/log/php_errors.log \
#  && chown www-data:www-data /var/log/php_errors.log \
#  && echo "log_errors = On" >> /usr/local/etc/php/conf.d/docker-php-error.ini \
#  && echo "error_log = /var/log/php_errors.log" >> /usr/local/etc/php/conf.d/docker-php-error.ini


# FROM php:8.4.12-fpm-alpine3.21

# # Instala dependências
# RUN apk update && apk add --no-cache \
#     libpng-dev \
#     libjpeg-turbo-dev \
#     freetype-dev \
#     libzip-dev \
#     git \
#     unzip \
#     icu-dev \
#     libxml2-dev \
#     openssl-dev \
#     bash \
#     gcc g++ make

# # Extensões PHP necessárias
# RUN docker-php-ext-install \
#     gd \
#     pdo \
#     pdo_mysql \
#     intl

# # Remove dependências de build
# RUN apk del gcc g++ make

# # Node.js e npm
# RUN apk add --no-cache nodejs npm

# # Composer
# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# # Ajusta permissões para writable do CodeIgniter
# RUN mkdir -p /var/www/html/codeigniter/writable \
#     && chown -R www-data:www-data /var/www/html/codeigniter/writable \
#     && chmod -R 775 /var/www/html/codeigniter/writable

# # Log de erros PHP
# RUN mkdir -p /var/log \
#     && touch /var/log/php_errors.log \
#     && chown www-data:www-data /var/log/php_errors.log \
#     && echo "log_errors = On" >> /usr/local/etc/php/conf.d/docker-php-error.ini \
#     && echo "error_log = /var/log/php_errors.log" >> /usr/local/etc/php/conf.d/docker-php-error.ini


# FROM php:8.4.12-fpm-alpine3.21

# # Instala dependências
# RUN apk update && apk add --no-cache \
#     libpng-dev libjpeg-turbo-dev freetype-dev libzip-dev git unzip icu-dev libxml2-dev openssl-dev bash gcc g++ make

# # Extensões PHP
# RUN docker-php-ext-install gd pdo pdo_mysql intl

# # Remove dependências de build
# RUN apk del gcc g++ make

# # Node.js e npm
# RUN apk add --no-cache nodejs npm

# # Composer
# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# RUN chown -R www-data:www-data /var/www/html 

# RUN chmod -R 777 /var/www/html


# # Diretórios para CodeIgniter e logs
# RUN mkdir -p /var/www/html/codeigniter/writable /var/log \
#  && touch /var/log/php_errors.log \
#  && echo "log_errors = On" >> /usr/local/etc/php/conf.d/docker-php-error.ini \
#  && echo "error_log = /var/log/php_errors.log" >> /usr/local/etc/php/conf.d/docker-php-error.ini


# FROM php:8.4.12-fpm-alpine3.21

# WORKDIR /var/www/html

# # Copia o código para dentro do container
# COPY ./volume_app/laravel ./laravel
# COPY ./volume_app/codeigniter ./codeigniter

# # Permissões
# RUN chown -R www-data:www-data /var/www/html \
#     && find /var/www/html -type d -exec chmod 755 {} \; \
#     && find /var/www/html -type f -exec chmod 644 {} \; \
#     && chmod -R 775 /var/www/html/laravel/storage /var/www/html/laravel/bootstrap/cache /var/www/html/codeigniter/writable

# # Dependências
# RUN apk update && apk add --no-cache libpng-dev libjpeg-turbo-dev freetype-dev libzip-dev git unzip icu-dev libxml2-dev openssl-dev bash gcc g++ make \
#     && docker-php-ext-install gd pdo pdo_mysql intl \
#     && apk del gcc g++ make \
#     && apk add --no-cache nodejs npm \
#     && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


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
RUN docker-php-ext-install gd pdo pdo_mysql intl

# Remove dependências de build
RUN apk del gcc g++ make

# Node.js e npm
RUN apk add --no-cache nodejs npm

# Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Cria pasta para writable do CodeIgniter
RUN mkdir -p /var/www/html/codeigniter/writable \
    && chown -R www-data:www-data /var/www/html/codeigniter/writable \
    && chmod -R 775 /var/www/html/codeigniter/writable

# Habilita log de erros PHP
RUN mkdir -p /var/log \
    && touch /var/log/php_errors.log \
    && chown www-data:www-data /var/log/php_errors.log \
    && echo "log_errors = On" >> /usr/local/etc/php/conf.d/docker-php-error.ini \
    && echo "error_log = /var/log/php_errors.log" >> /usr/local/etc/php/conf.d/docker-php-error.ini
