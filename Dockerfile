# Imagen con Node.js
FROM node:20-alpine

WORKDIR /app

# Copiar dependencias primero (mejor uso de caché)
COPY package.json package-lock.json* ./

# Instalar dependencias (Docker tiene npm, no tu PC)
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Puerto que usa Vite
EXPOSE 5173

# Servidor de desarrollo; --host 0.0.0.0 para acceder desde fuera del contenedor
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
