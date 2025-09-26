#!/bin/bash
set -e

# Ajusta permissões do Laravel
chown -R www-data:www-data /var/www/html/laravel/storage /var/www/html/laravel/bootstrap/cache /var/www/html/laravel/database
chmod -R 775 /var/www/html/laravel/storage /var/www/html/laravel/bootstrap/cache /var/www/html/laravel/database

# Ajusta permissões do CodeIgniter
chown -R www-data:www-data /var/www/html/codeigniter/writable
chmod -R 775 /var/www/html/codeigniter/writable

# Executa o PHP-FPM
exec php-fpm
