# SOA: Arquitectura Orientada a Servicios
## Nuestra App: BurgerCritic 
 BurgerCritic, permite a los usuarios opinar sobre comidas y decidir dónde comer la mejor comida basándose en el feedback de otros usuarios. Utiliza SOA para integrar diversos servicios que facilitan la recopilación y presentación de opiniones de manera eficiente y escalable.

## Areas:
En una aplicación como BurgerCritic, tenemos servicios independientes para diferentes tareas:
- Autenticación de usuarios 
- Gestión de opiniones
- Recomendaciones de hamburgueserías.

# Tecnologías Utilizadas
## Frontend:
- React:
 Biblioteca de JavaScript para construir interfaces de usuario.
- Vite:
  Herramienta de construcción rápida para proyectos de frontend.
- Nginx:
  Servidor web y proxy inverso para servir la aplicación frontend.

## Backend:
- TypeScript:
Lenguaje de programación que extiende JavaScript con tipos estáticos.
- Express:
Framework de Node.js para construir aplicaciones web y APIs.
- Docker:
Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.
- PostgreSQL:
Sistema de gestión de bases de datos relacional.
--
# Arquitectura del Proyecto
## 1. Frontend
El frontend está construido con React y Vite, y se sirve utilizando Nginx. La estructura del frontend incluye componentes para mostrar opiniones, gestionar usuarios y productos (hamburguesas).
## 2. Backend
El backend está dividido en tres servicios principales, cada uno ejecutándose en su propio servidor:
Servicio de Usuarios:
Gestiona la autenticación y autorización de usuarios.
Maneja el registro, inicio de sesión y perfiles de usuario.
Servicio de Opiniones:
Gestiona las opiniones de los usuarios sobre las hamburguesas.
Permite crear, leer, actualizar y eliminar opiniones.
Servicio de Productos (Hamburguesas):
Gestiona la información sobre las hamburguesas disponibles en los restaurantes.
Permite crear, leer, actualizar y eliminar productos.
# Modelado:
## 1. Modelo de Clientes
- id: INTEGER, auto-increment, primary key
- name: STRING, no nulo
- email: STRING, no nulo, único
- username: STRING, no nulo
- password: STRING, no nulo

## 2. Modelo de Productos
- id: INTEGER, auto-increment, primary key
- nombre: STRING, no nulo
- categoria: STRING, no nulo
- precio: FLOAT, no nulo
- descripcion: TEXT, opcional

## 3. Modelo de Opiniones
- id: INTEGER, auto-increment, primary key
- author: STRING, no nulo
- producto_id: INTEGER, no nulo, referencia a productos
- comentario: TEXT, no nulo
- calificación: INTEGER, no nulo, validación entre 1 y 5

