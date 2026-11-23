Archivo: prompts.md
# Prompts

## Prompt 01 · Identidad · Configuración visual base

**Tarea:** Configurar la paleta de colores, tipografías locales, esquinas redondeadas, borde, sombra y ancho máximo del contenedor según la identidad definida.
**Datos:** brief, secciones 3 (Paleta de color), 4 (Tipografías), 5 (Forma) y 6 (Animación).
**Pega estos archivos (versión actual, con su ruta):**
- `src/styles/global.css`
- `src/components/ui/Contenedor.astro`
- `src/datos/sitio.ts`
**Devuélveme completos:**
- `src/styles/global.css` (REEMPLAZA)
- `src/components/ui/Contenedor.astro` (REEMPLAZA)
- `src/datos/sitio.ts` (REEMPLAZA)
**Borrar:** nada
**Terminado cuando:**
- Los tokens de Tailwind y variables CSS reflejan exactamente los 7 colores hex (#F8FAFC, #FFFFFF, #172B4D, #64748B, #DCE5EF, #087FC4, #FFFFFF).
- Las fuentes Montserrat (600, 700) y Open Sans (400, 600) están configuradas con `@font-face` apuntando a `pack/fuentes/`.
- El contenedor utiliza `max-w-7xl`, esquinas `16px`, bordes `1px`, sombra suave `0 4px 12px rgb(0 0 0 / 0.12)` y transiciones suaves.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 02 · Marco · Navegación, pie de página y páginas base

**Tarea:** Configurar la información global de la marca, el encabezado fijo con menú desplegable, el logotipo institucional, el pie de página y crear las páginas vacías del sitio.
**Datos:** brief, secciones 1 (Marca), 7 (Logo y menú), 8 (Mapa del sitio) y 10 (Contacto y pie de página).
**Pega estos archivos (versión actual, con su ruta):**
- `src/datos/sitio.ts`
- `src/pages/index.astro`
- `src/components/Encabezado.astro`
**Devuélveme completos:**
- `src/datos/sitio.ts` (REEMPLAZA)
- `src/pages/index.astro` (REEMPLAZA)
- `src/components/Encabezado.astro` (REEMPLAZA)
- `src/pages/conocenos.astro` (NUEVO)
- `src/pages/visitanos.astro` (NUEVO)
- `src/pages/celulas.astro` (NUEVO)
- `src/pages/eventos.astro` (NUEVO)
- `src/pages/en-vivo.astro` (NUEVO)
- `src/pages/contacto.astro` (NUEVO)
**Borrar:**
- `src/components/inicio/Portada.astro`
- `src/components/inicio/Comprobacion.astro`
- `src/components/inicio/Pasos.astro`
**Terminado cuando:**
- El menú de navegación muestra las 7 páginas en orden: Inicio, Conócenos, Visítanos, Células, Eventos, En vivo, Contacto.
- El logotipo muestra `pack/logos/logo-mision-mundial.png` con su texto alternativo y el encabezado queda fijo arriba al hacer scroll.
- En celular el menú se muestra desplegable y en computadora como barra horizontal.
- El pie de página contiene los textos oficiales, enlaces de navegación y derechos reservados.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 03 · Inicio · Bienvenida

**Tarea:** Crear la sección de bienvenida de la página de Inicio con título H1, mensaje de bienvenida, imagen destacada y botón a Visítanos.
**Datos:** brief, sección 9, Página Inicio, Sección Bienvenida.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/Bienvenida.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: imagen, título H1, texto y botón apilados verticalmente al centro / computadora: bloque centrado con imagen arriba, título H1, texto y botón centrado debajo.
**Referencia:** ninguna
**Terminado cuando:**
- Contiene el `<h1>` con el texto exacto «Misión Mundial: Un abrazo sin límites.».
- Muestra la imagen `pack/imagenes/inicio-bienvenida.jpg` con su texto alternativo oficial.
- El botón «Planifica tu visita» redirige a `/visitanos`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 04 · Inicio · ¿Quiénes somos?

**Tarea:** Crear la sección ¿Quiénes somos? de la página de Inicio con título, descripción institucional, imagen y botón a Conócenos.
**Datos:** brief, sección 9, Página Inicio, Sección ¿Quiénes somos?.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/QuienesSomos.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título, texto, imagen y botón apilados verticalmente / computadora: contenido centrado con texto y botón, acompañado de imagen.
**Referencia:** ninguna
**Terminado cuando:**
- Incluye el título «Una familia unida por la fe.» y el texto descriptivo exacto.
- Muestra la imagen `pack/imagenes/inicio-comunidad.jpg`.
- El botón «Conoce nuestra historia» enlaza a `/conocenos`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 05 · Inicio · Conéctate con nosotros

**Tarea:** Crear la sección de tarjetas interactivas «Conéctate con nosotros» en Inicio con tres tarjetas de acción rápida.
**Datos:** brief, sección 9, Página Inicio, Sección Conéctate con nosotros.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/Conectate.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título, texto y tres tarjetas apiladas verticalmente, cada una con icono, texto y botón / computadora: título y texto centrados arriba; tres tarjetas interactivas dispuestas horizontalmente en tres columnas con icono, texto y botón.
**Referencia:** 1a (tarjetas interactivas con iconos y enlaces de acción tomadas de Life.Church).
**Terminado cuando:**
- Muestra las tres tarjetas interactivas: «Pide oración», «Únete a una célula» y «Soy nuevo» con sus respectivos textos.
- Los botones enlazan correctamente a `/contacto#peticiones-oracion`, `/celulas` y `/visitanos`.
- Las tarjetas utilizan esquinas de 16 px, borde de 1 px y fondo de superficie `#FFFFFF`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 06 · Inicio · Próximos eventos

**Tarea:** Crear la sección de eventos destacados en la página de Inicio con imagen, texto y botón hacia Eventos.
**Datos:** brief, sección 9, Página Inicio, Sección Próximos eventos.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/ProximosEventos.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: icono de calendario, título, texto y tarjetas de eventos con imagen apiladas / computadora: encabezado con icono centrado, título, texto y bloque destacado de eventos con imagen y botón centrado.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra el título «Vive momentos especiales con nosotros.» y la imagen `pack/imagenes/inicio-eventos.jpg`.
- El botón «Ver todos los eventos» redirige a `/eventos`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 07 · Inicio · Invitación a visitar la iglesia

**Tarea:** Crear la sección de invitación final en la página de Inicio invitando a los usuarios a asistir a la congregación.
**Datos:** brief, sección 9, Página Inicio, Sección Invitación a visitar la iglesia.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
**Devuélveme completos:**
- `src/components/inicio/InvitacionVisita.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: tarjeta con título, texto y botón apilados / computadora: contenedor destacado con título, texto y botón centrados con fondo diferenciado.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra el título «¡Te esperamos con los brazos abiertos!», el texto y la imagen `pack/imagenes/inicio-templo.jpg`.
- El botón «Cómo llegar» enlaza a `/visitanos`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 08 · Conócenos · Presentación

**Tarea:** Crear la sección de cabecera y presentación de la página Conócenos con título H1 e imagen de la congregación.
**Datos:** brief, sección 9, Página Conócenos, Sección Presentación.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/conocenos.astro`
**Devuélveme completos:**
- `src/components/conocenos/Presentacion.astro` (NUEVO)
- `src/pages/conocenos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: imagen, título y texto apilados verticalmente / computadora: banner centrado con imagen arriba, título y texto explicativo centrado.
**Referencia:** ninguna
**Terminado cuando:**
- Contiene el `<h1>` con el texto «Conoce nuestra familia.».
- Muestra la imagen `pack/imagenes/conocenos-congregacion.jpg` con su texto descriptivo.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 09 · Conócenos · Nuestra historia

**Tarea:** Crear la sección histórica de la congregación en Conócenos con texto descriptivo e imagen histórica.
**Datos:** brief, sección 9, Página Conócenos, Sección Nuestra historia.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/conocenos.astro`
**Devuélveme completos:**
- `src/components/conocenos/Historia.astro` (NUEVO)
- `src/pages/conocenos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título, texto e imagen apilados en columna / computadora: dos columnas (50/50), texto a la izquierda e imagen a la derecha.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra el título «Nuestra historia.» y los dos párrafos de texto exactos del plan.
- Carga la imagen `pack/imagenes/conocenos-historia.jpg`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 10 · Conócenos · Misión, visión y valores

**Tarea:** Crear la sección institucional con los pilares de identidad: Misión, Visión y Valores.
**Datos:** brief, sección 9, Página Conócenos, Sección Misión, visión y valores.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/conocenos.astro`
**Devuélveme completos:**
- `src/components/conocenos/Identidad.astro` (NUEVO)
- `src/pages/conocenos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: 3 bloques apilados verticalmente con iconos y descripciones / computadora: 3 columnas horizontales con icono arriba, título del pilar y descripción debajo.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra los bloques de Misión, Visión y Valores con sus iconos y redacciones exactas.
- Aplica esquinas de 16 px y fondo de superficie `#FFFFFF`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 11 · Conócenos · Nuestras creencias

**Tarea:** Crear la sección de fundamentos doctrinales y fe en Conócenos con texto e imagen bíblica.
**Datos:** brief, sección 9, Página Conócenos, Sección Nuestras creencias.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/conocenos.astro`
**Devuélveme completos:**
- `src/components/conocenos/Creencias.astro` (NUEVO)
- `src/pages/conocenos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título, texto e imagen apilados / computadora: bloque centrado con título, texto y elemento visual destacado.
**Referencia:** ninguna
**Terminado cuando:**
- Incluye el título «Nuestra fe.» y el texto sobre las Sagradas Escrituras y fe en Jesucristo.
- Carga la imagen `pack/imagenes/conocenos-fe.jpg`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 12 · Conócenos · Pastores y liderazgo

**Tarea:** Crear la sección de presentación del equipo pastoral y liderazgo espiritual.
**Datos:** brief, sección 9, Página Conócenos, Sección Pastores y liderazgo.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/conocenos.astro`
**Devuélveme completos:**
- `src/components/conocenos/Pastores.astro` (NUEVO)
- `src/pages/conocenos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título, texto y tarjetas de pastores apiladas verticalmente con foto e información / computadora: título y texto centrados arriba, seguidos de 3 tarjetas en fila horizontal con fotografía, nombre y cargo.
**Referencia:** ninguna
**Terminado cuando:**
- Presenta el título «Personas que nos guían.» y la estructura de tarjetas de liderazgo.
- Muestra la imagen `pack/imagenes/conocenos-pastores.jpg`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 13 · Conócenos · Nuestros ministerios

**Tarea:** Crear la sección de ministerios (Niños, Jóvenes, Adultos y familias) con botón de invitación.
**Datos:** brief, sección 9, Página Conócenos, Sección Nuestros ministerios.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/conocenos.astro`
**Devuélveme completos:**
- `src/components/conocenos/Ministerios.astro` (NUEVO)
- `src/pages/conocenos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: tarjeta destacada con título, texto y botón apilados / computadora: tarjeta horizontal completa con título, texto y botón alineados al centro.
**Referencia:** ninguna
**Terminado cuando:**
- Presenta las divisiones para Niños, Jóvenes, y Adultos y familias con sus descripciones.
- Muestra la imagen `pack/imagenes/conocenos-ministerios.jpg`.
- El botón «Planifica tu visita» redirige a `/visitanos`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 14 · Visítanos · Bienvenida

**Tarea:** Crear la sección de bienvenida de la página Visítanos con título H1 y botón de salto a la ubicación.
**Datos:** brief, sección 9, Página Visítanos, Sección Bienvenida.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/visitanos.astro`
**Devuélveme completos:**
- `src/components/visitanos/Bienvenida.astro` (NUEVO)
- `src/pages/visitanos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: icono/imagen, título, texto y botón apilados / computadora: banner centrado con icono/imagen arriba, título, texto y botón centrado.
**Referencia:** ninguna
**Terminado cuando:**
- Contiene el `<h1>` con el texto «¡Queremos conocerte!».
- Carga la imagen `pack/imagenes/visitanos-bienvenida.jpg`.
- El botón «Cómo llegar» salta fluidamente a `#ubicacion`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 15 · Visítanos · Horarios y Ubicación

**Tarea:** Crear la sección con el mapa embebido de Google Maps, dirección física y horarios de reuniones.
**Datos:** brief, sección 9, Página Visítanos, Sección Horarios y Ubicación.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/visitanos.astro`
**Devuélveme completos:**
- `src/components/visitanos/Ubicacion.astro` (NUEVO)
- `src/pages/visitanos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título, mapa embebido, información de horarios y ubicación apilada con botones / computadora: dos columnas, recuadro de mapa interactivo a la izquierda, bloque con dirección, horarios y botones a la derecha.
**Referencia:** ninguna
**Terminado cuando:**
- El bloque contiene el `id="ubicacion"`.
- Presenta el mapa embebido y la información de dirección y horarios.
- Los botones enlazan a Google Maps y a `/eventos`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 16 · Visítanos · Tu primera visita

**Tarea:** Crear la sección explicativa sobre qué esperar durante una primera visita a la congregación.
**Datos:** brief, sección 9, Página Visítanos, Sección Tu primera visita.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/visitanos.astro`
**Devuélveme completos:**
- `src/components/visitanos/PrimeraVisita.astro` (NUEVO)
- `src/pages/visitanos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título, texto y tres elementos apilados en columna vertical con iconos / computadora: título centrado arriba, 3 columnas con icono, subtítulo y texto descriptivo.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra los 3 puntos: «Una bienvenida cálida», «Un mensaje de fe» y «Una gran familia».
- Muestra la imagen `pack/imagenes/visitanos-comunidad.jpg`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 17 · Visítanos · Preguntas frecuentes

**Tarea:** Crear la sección de preguntas frecuentes con respuestas claras para nuevos asistentes.
**Datos:** brief, sección 9, Página Visítanos, Sección Preguntas frecuentes.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/visitanos.astro`
**Devuélveme completos:**
- `src/components/visitanos/PreguntasFrecuentes.astro` (NUEVO)
- `src/pages/visitanos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: lista vertical de preguntas y respuestas / computadora: contenedor centrado con acordeón/bloques desplegables apilados de preguntas y respuestas.
**Referencia:** ninguna
**Terminado cuando:**
- Incluye las tres preguntas frecuentes con sus respuestas oficiales del plan.
- Los bloques cuentan con buen espaciado y contraste legible.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 18 · Visítanos · Contacto / Ayuda para llegar

**Tarea:** Crear el bloque de llamada a la acción con enlace directo a WhatsApp para asistencia de llegada.
**Datos:** brief, sección 9, Página Visítanos, Sección Contacto / Ayuda para llegar.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/visitanos.astro`
**Devuélveme completos:**
- `src/components/visitanos/ContactoAyuda.astro` (NUEVO)
- `src/pages/visitanos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: caja destacada con título, texto y botón / computadora: bloque centrado destacado con título, texto y botón prominente.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra el título «¿Necesitas ayuda para llegar?».
- El botón «Escríbenos por WhatsApp» abre el enlace correspondiente.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 19 · Células · Bienvenida

**Tarea:** Crear la sección de bienvenida de la página Células con título H1 e imagen grupal.
**Datos:** brief, sección 9, Página Células, Sección Bienvenida.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/celulas.astro`
**Devuélveme completos:**
- `src/components/celulas/Bienvenida.astro` (NUEVO)
- `src/pages/celulas.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: imagen, título, texto y botón apilados / computadora: banner centrado con imagen arriba, título, texto y botón centrado.
**Referencia:** ninguna
**Terminado cuando:**
- Contiene el `<h1>` con el texto «Crezcamos juntos en la fe.».
- Muestra la imagen `pack/imagenes/celulas-portada.jpg`.
- El botón «Encuentra tu célula» enlaza a `#grupos`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 20 · Células · ¿Qué son las células?

**Tarea:** Crear la sección conceptual que explica qué es una célula y cómo funciona.
**Datos:** brief, sección 9, Página Células, Sección ¿Qué son las células?.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/celulas.astro`
**Devuélveme completos:**
- `src/components/celulas/QueSon.astro` (NUEVO)
- `src/pages/celulas.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título, texto e imagen apilados verticalmente / computadora: dos columnas, texto a la izquierda e imagen a la derecha (50/50).
**Referencia:** ninguna
**Terminado cuando:**
- Muestra el título «Una comunidad donde puedes crecer.» y la definición de célula.
- Muestra la imagen `pack/imagenes/celulas-reunion.jpg`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 21 · Células · Beneficios de participar

**Tarea:** Crear la sección con las razones y beneficios de integrarse a un grupo de célula.
**Datos:** brief, sección 9, Página Células, Sección Beneficios de participar.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/celulas.astro`
**Devuélveme completos:**
- `src/components/celulas/Beneficios.astro` (NUEVO)
- `src/pages/celulas.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título y 3 elementos apilados con iconos / computadora: título centrado y 3 columnas horizontales con icono, título y texto.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra los 3 puntos: «Crece en tu fe», «Construye amistades» y «Encuentra apoyo».
- Cada punto cuenta con su icono correspondiente y texto completo.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 22 · Células · Grupos disponibles

**Tarea:** Crear las tarjetas de grupos según edades (Adolescentes, Jóvenes, Adultos y familias).
**Datos:** brief, sección 9, Página Células, Sección Grupos disponibles.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/celulas.astro`
**Devuélveme completos:**
- `src/components/celulas/Grupos.astro` (NUEVO)
- `src/pages/celulas.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: tarjetas apiladas con imagen, título, descripción y botón / computadora: 3 tarjetas en 3 columnas horizontales con imagen superior, texto y botón al pie de cada tarjeta.
**Referencia:** ninguna
**Terminado cuando:**
- Contiene el `id="grupos"`.
- Carga las tres imágenes: `pack/imagenes/celulas-adolescentes.jpg`, `pack/imagenes/celulas-jovenes.jpg` y `pack/imagenes/celulas-adultos.jpg`.
- Cada botón «Solicitar información» salta a `#formulario`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 23 · Células · Horarios y lugares

**Tarea:** Crear la sección informativa sobre horarios y modalidades de reunión de las células.
**Datos:** brief, sección 9, Página Células, Sección Horarios y lugares.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/celulas.astro`
**Devuélveme completos:**
- `src/components/celulas/HorariosLugares.astro` (NUEVO)
- `src/pages/celulas.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: lista de detalles apilada / computadora: bloque informativo centrado o tabla limpia con detalles.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra el título «¿Cuándo nos reunimos?» y el texto orientativo.
- Presenta la estructura para mostrar los datos de reunión autorizados.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 24 · Células · Formulario de inscripción

**Tarea:** Crear el formulario interactivo para registrar el interés en unirse a una célula.
**Datos:** brief, sección 9, Página Células, Sección Formulario de inscripción.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/celulas.astro`
**Devuélveme completos:**
- `src/components/celulas/Formulario.astro` (NUEVO)
- `src/pages/celulas.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: formulario de una sola columna con campos verticales y botón de envío / computadora: tarjeta de formulario centrada de ancho medio con campos estructurados y botón al final.
**Referencia:** ninguna
**Terminado cuando:**
- Contiene el `id="formulario"`.
- Incluye todos los campos requeridos: Nombre completo, Edad, WhatsApp, Grupo de interés y Autorización.
- Cuenta con botón de envío y mensaje de confirmación accesible.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 25 · Células · Testimonios

**Tarea:** Crear la sección testimonial que recoge experiencias de miembros de células.
**Datos:** brief, sección 9, Página Células, Sección Testimonios.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/celulas.astro`
**Devuélveme completos:**
- `src/components/celulas/Testimonios.astro` (NUEVO)
- `src/pages/celulas.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título, texto e imagen apilados / computadora: contenedor horizontal centrado con testimonio destacado e imagen.
**Referencia:** ninguna
**Terminado cuando:**
- Presenta el título «Historias que inspiran.».
- Muestra la imagen `pack/imagenes/celulas-testimonios.jpg`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 26 · Eventos · Presentación

**Tarea:** Crear la cabecera visual y mensaje introductorio de la página Eventos con título H1.
**Datos:** brief, sección 9, Página Eventos, Sección Presentación.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/eventos.astro`
**Devuélveme completos:**
- `src/components/eventos/Presentacion.astro` (NUEVO)
- `src/pages/eventos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: imagen, título y texto apilados verticalmente / computadora: banner amplio centrado con imagen arriba, título y texto explicativo.
**Referencia:** 2a (diseño visual moderno con imágenes destacadas y títulos amplios).
**Terminado cuando:**
- Contiene el `<h1>` con el texto «Vive nuestros eventos.».
- Carga la imagen panorámica `pack/imagenes/eventos-portada.jpg`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 27 · Eventos · Evento destacado

**Tarea:** Crear el bloque de evento principal con afiche, detalles de fecha/hora y botón.
**Datos:** brief, sección 9, Página Eventos, Sección Evento destacado.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/eventos.astro`
**Devuélveme completos:**
- `src/components/eventos/EventoDestacado.astro` (NUEVO)
- `src/pages/eventos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: afiche arriba, título, fecha/hora, descripción y botón apilados / computadora: tarjeta destacada a dos columnas (afiche a la izquierda, detalles y botón a la derecha) o bloque central amplio.
**Referencia:** 2a
**Terminado cuando:**
- Muestra el título «Nuestro próximo gran encuentro.».
- Muestra el afiche `pack/imagenes/eventos-destacado.jpg`.
- El botón «Ver detalles» enlaza a `#calendario`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 28 · Eventos · Próximas actividades

**Tarea:** Crear la cuadrícula de categorías de eventos (Congresos, Reuniones especiales, Encuentros juveniles).
**Datos:** brief, sección 9, Página Eventos, Sección Próximas actividades.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/eventos.astro`
**Devuélveme completos:**
- `src/components/eventos/ProximasActividades.astro` (NUEVO)
- `src/pages/eventos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: tarjetas apiladas con imagen, título, descripción y botón / computadora: cuadrícula de 3 columnas horizontales con imágenes destacadas, textos y botones interactivos.
**Referencia:** 2a
**Terminado cuando:**
- Incluye las imágenes `pack/imagenes/eventos-congresos.jpg`, `pack/imagenes/eventos-reuniones.jpg` y `pack/imagenes/eventos-jovenes.jpg`.
- Cada tarjeta contiene su botón «Más información» enlazando a `#inscripciones`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 29 · Eventos · Calendario

**Tarea:** Crear la sección de calendario mensual interactivo con fechas destacadas de actividades.
**Datos:** brief, sección 9, Página Eventos, Sección Calendario.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/eventos.astro`
**Devuélveme completos:**
- `src/components/eventos/Calendario.astro` (NUEVO)
- `src/pages/eventos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: vista mensual compacta con fechas y eventos listados debajo / computadora: cuadrícula mensual de calendario amplia con eventos visibles por día.
**Referencia:** ninguna
**Terminado cuando:**
- Contiene el `id="calendario"`.
- Muestra la estructura interactiva del mes con nombres de eventos.
- Botones de evento redirigen a `#inscripciones`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 30 · Eventos · Inscripciones

**Tarea:** Crear la sección informativa sobre registro y consulta de inscripciones a eventos.
**Datos:** brief, sección 9, Página Eventos, Sección Inscripciones.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/eventos.astro`
**Devuélveme completos:**
- `src/components/eventos/Inscripciones.astro` (NUEVO)
- `src/pages/eventos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: tarjeta con texto y botón apilados / computadora: bloque centrado con información y botón para consultar inscripción.
**Referencia:** ninguna
**Terminado cuando:**
- Contiene el `id="inscripciones"`.
- Muestra el texto explicativo y el botón «Consultar inscripción» apuntando a `/contacto`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 31 · Eventos · Eventos anteriores

**Tarea:** Crear la galería fotográfica de eventos pasados y momentos compartidos.
**Datos:** brief, sección 9, Página Eventos, Sección Eventos anteriores.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/eventos.astro`
**Devuélveme completos:**
- `src/components/eventos/EventosAnteriores.astro` (NUEVO)
- `src/pages/eventos.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: imágenes apiladas o en carrusel vertical / computadora: galería en cuadrícula de 3 columnas horizontales.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra las tres fotografías: `pack/imagenes/eventos-galeria-01.jpg`, `pack/imagenes/eventos-galeria-02.jpg` y `pack/imagenes/eventos-galeria-03.jpg`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 32 · En vivo · Bienvenida

**Tarea:** Crear la sección de cabecera de la página En vivo con título H1 e imagen de culto.
**Datos:** brief, sección 9, Página En vivo, Sección Bienvenida.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/en-vivo.astro`
**Devuélveme completos:**
- `src/components/en-vivo/Bienvenida.astro` (NUEVO)
- `src/pages/en-vivo.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: imagen, título y texto apilados / computadora: banner amplio centrado con imagen arriba, título y texto explicativo debajo.
**Referencia:** ninguna
**Terminado cuando:**
- Contiene el `<h1>` con el texto «Conéctate desde donde estés.».
- Muestra la imagen `pack/imagenes/envivo-portada.jpg`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 33 · En vivo · Transmisión

**Tarea:** Crear el contenedor de transmisión en vivo con reproductor/miniatura y enlace a Facebook.
**Datos:** brief, sección 9, Página En vivo, Sección Transmisión.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/en-vivo.astro`
**Devuélveme completos:**
- `src/components/en-vivo/Transmision.astro` (NUEVO)
- `src/pages/en-vivo.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: reproductor de video / miniatura centrado, mensaje y botón apilados / computadora: marco de video amplio centrado con mensaje de estado y botón prominente.
**Referencia:** ninguna
**Terminado cuando:**
- Incluye el mensaje para momentos sin transmisión y la imagen `pack/imagenes/envivo-miniatura.jpg`.
- El botón «Ver transmisión en Facebook» apunta al enlace oficial correspondiente.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 34 · En vivo · Horarios

**Tarea:** Crear la sección de programación y horarios de transmisiones online.
**Datos:** brief, sección 9, Página En vivo, Sección Horarios.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/en-vivo.astro`
**Devuélveme completos:**
- `src/components/en-vivo/Horarios.astro` (NUEVO)
- `src/pages/en-vivo.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: tarjeta con horarios y botón apilados / computadora: columna informativa a la izquierda emparejada con Próximo culto a la derecha.
**Referencia:** ninguna
**Terminado cuando:**
- Detalla los días y horarios de cultos transmitidos y transmisiones especiales.
- El botón «Ver próximos eventos» enlaza a `/eventos`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 35 · En vivo · Próximo culto

**Tarea:** Crear el módulo recordatorio con la información de la siguiente transmisión online.
**Datos:** brief, sección 9, Página En vivo, Sección Próximo culto.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/en-vivo.astro`
**Devuélveme completos:**
- `src/components/en-vivo/ProximoCulto.astro` (NUEVO)
- `src/pages/en-vivo.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: tarjeta informativa con datos y botón apilados / computadora: columna informativa a la derecha emparejada con Horarios a la izquierda.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra el título «Nuestra próxima transmisión.» con fecha, culto y botón «Ir a Facebook».
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 36 · En vivo · Redes sociales

**Tarea:** Crear el bloque de invitación a seguir la página oficial de Facebook.
**Datos:** brief, sección 9, Página En vivo, Sección Redes sociales.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/en-vivo.astro`
**Devuélveme completos:**
- `src/components/en-vivo/RedesSociales.astro` (NUEVO)
- `src/pages/en-vivo.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: bloque centrado con texto y botón / computadora: bloque horizontal centrado con texto y botón destacado.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra el título «Sigamos conectados.» y el texto sobre Facebook.
- El botón «Seguir a Misión Mundial» enlaza a Facebook.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 37 · Contacto · Bienvenida

**Tarea:** Crear la sección inicial de la página Contacto con título H1 e imagen comunitaria.
**Datos:** brief, sección 9, Página Contacto, Sección Bienvenida.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/contacto.astro`
**Devuélveme completos:**
- `src/components/contacto/Bienvenida.astro` (NUEVO)
- `src/pages/contacto.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: imagen, título y texto apilados / computadora: banner centrado con imagen arriba, título y texto de bienvenida.
**Referencia:** ninguna
**Terminado cuando:**
- Contiene el `<h1>` con el texto «Estamos aquí para ti.».
- Muestra la imagen `pack/imagenes/contacto-bienvenida.jpg`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 38 · Contacto · Canales de contacto

**Tarea:** Crear las tres tarjetas de contacto directo: WhatsApp, Correo y Ubicación.
**Datos:** brief, sección 9, Página Contacto, Sección Canales de contacto.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/contacto.astro`
**Devuélveme completos:**
- `src/components/contacto/CanalesContacto.astro` (NUEVO)
- `src/pages/contacto.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: 3 tarjetas de contacto apiladas verticalmente con icono, texto y botón / computadora: 3 tarjetas dispuestas horizontalmente en 3 columnas.
**Referencia:** ninguna
**Terminado cuando:**
- Muestra las 3 vías con iconos: WhatsApp, Correo y Ubicación.
- Los botones abren WhatsApp, abren `mailto:` y enlazan a Google Maps.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 39 · Contacto · Formulario de consultas

**Tarea:** Crear el formulario general de preguntas y consultas institucionales.
**Datos:** brief, sección 9, Página Contacto, Sección Formulario de consultas.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/contacto.astro`
**Devuélveme completos:**
- `src/components/contacto/FormularioConsultas.astro` (NUEVO)
- `src/pages/contacto.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: formulario de una sola columna con campos verticales y botón de envío / computadora: tarjeta de formulario situada a la izquierda en una distribución de 2 columnas (junto a Peticiones de oración).
**Referencia:** ninguna
**Terminado cuando:**
- Incluye campos: Nombre completo, Correo electrónico, Asunto, Mensaje y Consentimiento de datos.
- Cuenta con botón «Enviar mensaje» y mensaje de confirmación establecido.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 40 · Contacto · Peticiones de oración

**Tarea:** Crear el formulario especializado para solicitar motivos de oración de forma privada.
**Datos:** brief, sección 9, Página Contacto, Sección Peticiones de oración.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/contacto.astro`
**Devuélveme completos:**
- `src/components/contacto/PeticionesOracion.astro` (NUEVO)
- `src/pages/contacto.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: tarjeta de formulario con campos apilados verticalmente y botón / computadora: tarjeta de formulario situada a la derecha en una distribución de 2 columnas (junto a Formulario de consultas).
**Referencia:** ninguna
**Terminado cuando:**
- Contiene el `id="peticiones-oracion"`.
- Incluye campos: Nombre (opcional), Medio de contacto (opcional), Petición de oración y Autorización.
- Cuenta con botón «Enviar petición» y confirmación «Hemos recibido tu petición. Gracias por confiar en nosotros».
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 41 · Contacto · Redes sociales

**Tarea:** Crear el bloque final con enlaces a las redes sociales oficiales.
**Datos:** brief, sección 9, Página Contacto, Sección Redes sociales.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/contacto.astro`
**Devuélveme completos:**
- `src/components/contacto/RedesSociales.astro` (NUEVO)
- `src/pages/contacto.astro` (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: iconos y botones de redes sociales centrados y apilados / computadora: bloque horizontal centrado con iconos de redes y enlaces destacados.
**Referencia:** ninguna
**Terminado cuando:**
- Presenta las tarjetas o botones de Facebook e Instagram con iconos oficiales.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 42 · Revisión final · Calidad, accesibilidad y responsividad

**Tarea:** Realizar una auditoría completa del sitio web revisando las 7 páginas completas, imágenes, enlaces, atributos `alt` y contraste en resoluciones clave.
**Datos:** brief en su totalidad (todas las secciones).
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
- `src/pages/conocenos.astro`
- `src/pages/visitanos.astro`
- `src/pages/celulas.astro`
- `src/pages/eventos.astro`
- `src/pages/en-vivo.astro`
- `src/pages/contacto.astro`
**Devuélveme completos:**
- Los archivos de página o componentes que requieran corrección puntual (REEMPLAZA).
**Borrar:** nada
**Terminado cuando:**
- Cada página tiene un único `<h1>` y la estructura de encabezados respeta la jerarquía.
- Todas las imágenes tienen su atributo `alt` descriptivo oficial y no hay enlaces rotos.
- Se ve perfectamente en 360 px, 768 px y 1280 px sin desbordamiento horizontal.
- `npm run verificar` termina con 0 errores y 0 advertencias.
