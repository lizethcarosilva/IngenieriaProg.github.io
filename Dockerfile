# Usamos una imagen ligera con Nginx para servir archivos estáticos
FROM nginx:alpine

# Copiamos los archivos de la app a la carpeta de Nginx
COPY . /usr/share/nginx/html

# Si usas React/Vue/Angular, reemplaza el COPY por esto:
# COPY dist /usr/share/nginx/html
