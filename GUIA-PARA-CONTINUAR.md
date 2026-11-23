# Misión Mundial — páginas completadas en estructura

Se completó el contenido inicial de las páginas Eventos, En vivo y Contacto con los componentes que ya existían en el proyecto.

## Archivos conectados
- `src/pages/eventos.astro`
- `src/pages/en-vivo.astro`
- `src/pages/contacto.astro`

Las tres páginas usan `src/layouts/Layout.astro`, por lo que conservan encabezado, pie de página, estilos y animaciones generales.

## Importante antes de publicar
Los prompts no proporcionan datos oficiales de eventos, fechas, horarios, dirección, correo, WhatsApp, redes sociales ni enlace de Facebook. Por eso esos datos se muestran como pendientes y no se inventaron.
Los formularios son únicamente una interfaz visual: no envían datos todavía. Hace falta decidir y configurar un servicio de recepción seguro antes de habilitarlos.
Las fotografías de galería y portada de algunas secciones tampoco están en el ZIP. Se dejaron espacios visuales para evitar imports rotos.

## Para probar
En la carpeta del proyecto:
1. `npm install` (si aún no están instaladas las dependencias).
2. `npm run dev` para revisar el sitio.
3. `npm run verificar` para ejecutar el control definido en `package.json`.

Revisa especialmente las tres rutas:
- `/eventos`
- `/en-vivo`
- `/contacto`
