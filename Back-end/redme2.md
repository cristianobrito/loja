version: "3.8"

services:
  app:
    build: ./Back-end
    container_name: loja-backend-app
    restart: unless-stopped
    env_file:
      - ./Back-end/.env
    ports:
      - "3000:3000"
    volumes:
      - ./Back-end:/app            # mapeia backend
      - ./Front-end:/app-frontend  # mapeia frontend
      - /app/node_modules
    depends_on:
      - db

  db:
    image: mysql:8.0
    container_name: loja-mysql
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
    volumes:
      - db_data:/var/lib/mysql
      - ./Back-end/src/init.sql:/docker-entrypoint-initdb.d/init.sql:ro
    ports:
      - "3306:3306"

  adminer:
    image: adminer
    container_name: loja-adminer
    restart: unless-stopped
    ports:
      - "8080:8080"

volumes:
  db_data:
=============================================================================
