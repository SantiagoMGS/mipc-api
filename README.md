<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Sistema de Gestión de Órdenes de Servicio

Sistema de gestión de órdenes de servicio para empresas del sector tecnológico, desarrollado con NestJS, Prisma y PostgreSQL.

## Descripción

Este proyecto es una API REST construida con [NestJS](https://github.com/nestjs/nest) que permite gestionar órdenes de servicio para empresas tecnológicas. Incluye funcionalidades para crear, actualizar, consultar y administrar órdenes de trabajo, clientes, técnicos y servicios.

## Tecnologías

- **Backend**: NestJS (Node.js + TypeScript)
- **Base de Datos**: PostgreSQL
- **ORM**: Prisma
- **Contenedores**: Docker & Docker Compose
- **Documentación**: Swagger

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 22 o superior)
- [Yarn](https://yarnpkg.com/) como manejador de paquetes
- [Docker](https://www.docker.com/) y Docker Compose

## Configuración del Proyecto

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd app
```

### 2. Instalar dependencias

```bash
yarn install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Variables de Base de Datos
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=service_orders_db

# URL de conexión a la base de datos para Prisma
DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}?schema=public"

# Puerto de la aplicación
PORT=3000
```

### 4. Levantar la base de datos

```bash
# Levantar el contenedor de PostgreSQL
docker-compose up -d
```

### 5. Configurar la base de datos

```bash
# Generar el cliente de Prisma
yarn prisma generate

# Ejecutar las migraciones
yarn prisma migrate dev

# Ejecutar el seed para datos iniciales
yarn prisma db seed
```

## Ejecutar la Aplicación

### Modo Desarrollo

```bash
# Iniciar en modo desarrollo con hot-reload
yarn start:dev
```

### Modo Producción

```bash
# Compilar el proyecto
yarn build

# Ejecutar en modo producción
yarn start:prod
```

### Modo Debug

```bash
# Iniciar en modo debug
yarn start:debug
```

## Scripts Disponibles

```bash
# Desarrollo
yarn start:dev          # Ejecutar en modo desarrollo
yarn start:debug        # Ejecutar en modo debug

# Producción
yarn build              # Compilar el proyecto
yarn start:prod         # Ejecutar en modo producción

# Base de Datos
yarn prisma generate    # Generar cliente de Prisma
yarn prisma migrate dev # Ejecutar migraciones
yarn prisma db seed     # Ejecutar seed
yarn prisma studio      # Abrir Prisma Studio

# Testing
yarn test               # Ejecutar tests unitarios
yarn test:e2e           # Ejecutar tests e2e
yarn test:cov           # Ejecutar tests con cobertura
yarn test:watch         # Ejecutar tests en modo watch

# Calidad de Código
yarn lint               # Ejecutar linter
yarn format             # Formatear código
```

## Documentación de la API

Una vez que la aplicación esté ejecutándose, puedes acceder a la documentación interactiva de la API en:

- **Swagger UI**: `http://localhost:3000/api`

## Estructura del Proyecto

```
src/
├── domain/              # Capa de Dominio (Clean Architecture)
│   ├── user/           # Entidades y reglas de negocio de usuarios
│   ├── role/           # Entidades y reglas de negocio de roles
│   └── exceptions/     # Excepciones del dominio
├── application/         # Capa de Aplicación (Casos de Uso)
│   └── usecases/       # Casos de uso del negocio
│       ├── user/       # Casos de uso de usuarios
│       └── role/       # Casos de uso de roles
├── infrastructure/      # Capa de Infraestructura
│   ├── config/         # Configuraciones (Swagger, etc.)
│   └── persistence/    # Persistencia de datos
│       └── prisma/     # Implementación con Prisma
├── presentation/        # Capa de Presentación (Controladores)
│   └── user/           # Controladores de usuarios
├── app.controller.ts    # Controlador principal de la aplicación
├── app.module.ts        # Módulo principal de NestJS
└── main.ts             # Punto de entrada de la aplicación

prisma/
├── migrations/          # Migraciones de base de datos
├── seed/               # Datos de prueba
├── models/             # Modelos de Prisma
├── schema.prisma       # Esquema de la base de datos
└── seed.ts             # Script de seed
```

## Comandos Útiles de Docker

```bash
# Ver logs del contenedor de base de datos
docker-compose logs api_dev_database

# Reiniciar el contenedor
docker-compose restart api_dev_database

# Detener todos los contenedores
docker-compose down

# Eliminar volúmenes (¡cuidado! esto borra los datos)
docker-compose down -v
```

## Solución de Problemas

### Error de conexión a la base de datos

1. Verifica que Docker esté ejecutándose
2. Confirma que el contenedor de PostgreSQL esté activo: `docker-compose ps`
3. Revisa las variables de entorno en el archivo `.env`

### Error en las migraciones

```bash
# Resetear la base de datos (¡cuidado! esto borra todos los datos)
yarn prisma migrate reset

# Aplicar migraciones manualmente
yarn prisma db push
```

### Puerto ocupado

Si el puerto 3000 está ocupado, cambia la variable `PORT` en el archivo `.env`.
