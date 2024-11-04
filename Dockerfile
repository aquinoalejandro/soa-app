# Usa una imagen base de Node.js
FROM node:20.16.0

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json tsconfig.json ./

# Instalar dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .


# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]