
# Backend Vehicles API

Este proyecto implementa una tienda de vehículos con una API desarrollada en Express. Ofrece servicios CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar un inventario de vehículos, permitiendo a los usuarios interactuar con la base de datos de vehículos a través de una interfaz RESTful.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado Docker y Docker Compose en tu sistema. Para más información sobre cómo instalar Docker, visita [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/) y para Docker Compose [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/).

## Configuración del Proyecto

Para configurar el proyecto, sigue estos pasos:

1. Clona el repositorio a tu máquina local:

```bash
git clone https://github.com/dimas4dev/storeApiVehiclesV2.git
```

2. Navega al directorio del proyecto:

```bash
cd storeapivehiclesv2
```

3. (Opcional) Para persistir los datos de la base de datos más allá del ciclo de vida de los contenedores de Docker, crea una carpeta en la raíz del proyecto llamada `postgres_data`:

```bash
mkdir postgres_data
```

## Cómo ejecutar el proyecto

Para ejecutar el proyecto, sigue estos pasos:

1. Construye y levanta los servicios definidos en tu `docker-compose.yml` con Docker Compose:

```bash
docker-compose up -d
```

Esto iniciará tu aplicación Express en el puerto 3000 y la base de datos PostgreSQL, configurando la persistencia de datos si has creado la carpeta `postgres_data`.

2. Abre tu navegador y visita [http://localhost:3000](http://localhost:3000) para acceder a la aplicación.

## Uso

Aquí puedes incluir una sección sobre cómo usar tu aplicación, incluyendo cualquier endpoint relevante o funcionalidades específicas.

## Contribuir

Para los endpoints puedes usar un cliente REST como Postman y hacer peticiones GET,POST,PUT,DELETE al [http://localhost:3000/api/v2/clients ](http://localhost:3000/api/v2/clients) 

