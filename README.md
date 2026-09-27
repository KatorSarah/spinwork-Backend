# Spinwork Backend

Backend inicial para la aplicación Spinwork, pensado como base para un sistema de gestión de usuarios y proyectos con un eje principal de asignación de tareas mediante una ruleta.

## Descripción

Este proyecto configura una API REST con Node.js y Express, siguiendo una estructura modular básica para facilitar el crecimiento del backend. Por ahora incluye la base del servidor, middlewares generales y una ruta de verificación del servicio.

## Tecnologías

- Node.js
- Express
- dotenv
- cors
- helmet
- morgan
- nodemon

## Estructura del proyecto

```text
spinwork-backend/
├── .env
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   └── routes/
└── node_modules/
```

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

1. Clona el repositorio.
2. Entra a la carpeta del proyecto.
3. Instala las dependencias:

```bash
npm install
```

## Variables de entorno

El proyecto usa un archivo `.env` con las variables de configuración. Puedes copiar el ejemplo:

```bash
copy .env.example .env
```

Contenido de ejemplo:

```env
PORT=3000
DB_HOST=localhost
DB_NAME=spinwork
DB_USER=postgres
DB_PASS=cambiar_esta_contraseña
```

> No se deben incluir credenciales reales en el repositorio. La contraseña de ejemplo es solo demostrativa.

## Arranque del proyecto

### Modo desarrollo

```bash
npm run dev
```

Esto usa `nodemon` para reiniciar el servidor automáticamente al detectar cambios.

### Modo producción

```bash
npm start
```

## Verificación del servidor

Una vez levantado, la API estará disponible en:

```text
http://localhost:3000
```

La ruta de salud es:

```text
GET /api/health
```

Ejemplo de respuesta:

```json
{
  "status": "ok",
  "message": "Spinwork backend funcionando correctamente",
  "timestamp": "2026-09-27T23:16:19.420Z"
}
```

## Prueba rápida

Desde la terminal puedes comprobarlo con:

```bash
curl http://localhost:3000/api/health
```

También puedes abrir directamente la URL en el navegador.

## Funcionalidades actuales

- Servidor base con Express
- Seguridad con Helmet
- Configuración CORS
- Logging con Morgan
- Parsing JSON
- Ruta `/api/health` para validar que el backend está activo

## Siguientes pasos sugeridos

- Crear rutas para usuarios
- Crear rutas para proyectos
- Definir modelos de datos
- Implementar lógica de ruleta para asignación de tareas
- Conectar con PostgreSQL

## Licencia

Este proyecto está bajo la licencia ISC.
