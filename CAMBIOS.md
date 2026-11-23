# Registro de cambios

Una entrada por tarea terminada, la más reciente arriba. La escribe el agente al final de cada tarea; tú la revisas.

## 2026-11-09 · Integración y presentación de fotografías del sitio
- Archivos: src/components/inicio/Bienvenida.astro, src/components/inicio/ProximosEventos.astro, src/components/inicio/InvitacionVisita.astro, src/components/conocenos/Presentacion.astro, src/components/conocenos/Identidad.astro, src/components/visitanos/HorariosUbicacion.astro, src/components/celulas/Beneficios.astro, src/components/celulas/HorariosLugares.astro, src/components/celulas/Testimonios.astro, src/components/eventos/Presentacion.astro, src/components/eventos/EventoDestacado.astro, src/components/eventos/ProximasActividades.astro, src/components/eventos/EventosAnteriores.astro, src/components/en-vivo/Bienvenida.astro, src/components/en-vivo/Transmision.astro, src/components/contacto/CanalesContacto.astro
- Qué cambió: se conectaron las fotografías disponibles en sus secciones; se reemplazaron imágenes repetidas y rutas incorrectas; se incorporaron galerías y tarjetas visuales para Conócenos, Células y Eventos; se mejoraron recortes, proporciones, composición responsive y presentación de En vivo. Las tres fotografías de actividades también se integraron en sus tarjetas correspondientes. Contacto no recibió fotografías, tal como indica el brief; se activó el enlace de WhatsApp ya confirmado y se dejó visible que el correo requiere autorización.
- Nota de archivos: se utilizaron las extensiones reales de los archivos disponibles (por ejemplo, `inicio-eventos.jpeg`, `celulas-adultos.jpeg` y `conocenos-historia.jpeg`). El archivo `inicio-bienvenida.jpg.NEF` es una miniatura RAW de 160 × 120 px y no se utilizó como fotografía principal.
- Pendiente: faltan `celulas-portada.jpg` y `celulas-reunion.jpg`; para portada de Células se utilizó `celulas-jovenes.jpg` y para reuniones `celulas-testimonios.jpg`. Confirmar si `eventos-destacado.jpg` corresponde a un evento vigente antes de publicar sus datos como próximo evento. También faltan nombres, edades, días, horarios y lugares oficiales de cada célula, y testimonios reales autorizados.
- Verificación: no se pudo completar `astro check` ni `astro build` en este entorno porque falta el binding nativo de Rolldown para Linux; además, la instalación de dependencias no terminó dentro del tiempo disponible.

## 2026-11-09 · Actualización de información institucional y contacto
- Archivos: pack/brief.md, src/datos/sitio.ts, src/pages/visitanos.astro, src/components/visitanos/HorariosUbicacion.astro, src/components/visitanos/ContactoAyuda.astro, src/components/contacto/RedesSociales.astro, src/components/en-vivo/Transmision.astro, src/components/en-vivo/Horarios.astro
- Qué cambió: se incorporaron la dirección proporcionada, el culto general de los domingos a las 9:30 a. m., enlaces de Facebook e Instagram y el enlace de WhatsApp. Se añadió una sección de horarios y ubicación con enlace y mapa de Google Maps. Se incorporó al brief la historia institucional redactada a partir de los datos entregados. Se registró el correo proporcionado, pendiente de confirmar como contacto institucional público.
- Pendiente: validar la ubicación exacta del plus code en el mapa, confirmar que el correo puede publicarse, y revisar nombres oficiales/completos de los pastores y de la organización Iglesias de Dios en Ecuador.

## 2026-11-04 · Prompt 23 · Células · Horarios y lugares
- Archivos: src/components/celulas/HorariosLugares.astro, src/pages/celulas.astro
- Qué cambió: sección Horarios y lugares con id="horarios-lugares", título «¿Cuándo nos reunimos?», texto orientativo y una estructura de detalles de reunión con placeholders para reemplazar con la información oficial autorizada.


## 2026-11-04 · Prompt 21 · Células · Beneficios de participar
- Archivos: src/components/celulas/Beneficios.astro, src/pages/celulas.astro
- Qué cambió: sección Beneficios con título «¿Por qué formar parte de una célula?», texto intro y 3 tarjetas (Crece en tu fe, Construye amistades, Encuentra apoyo) con iconos, 3 columnas en computadora y 1 en celular.


## 2026-11-04 · Prompt 18 · Visítanos · Contacto / Ayuda para llegar
- Archivos: src/components/visitanos/ContactoAyuda.astro, src/pages/visitanos.astro
- Qué cambió: bloque CTA con título «¿Necesitas ayuda para llegar?», texto y botón «Escríbenos por WhatsApp» → https://wa.me/ (pendiente enlace oficial). La página Visítanos ahora tiene 2 secciones: Preguntas frecuentes y Contacto/Ayuda.


## 2026-11-04 · Prompt 17 · Visítanos · Preguntas frecuentes
- Archivos: src/components/visitanos/PreguntasFrecuentes.astro, src/pages/visitanos.astro
- Qué cambió: sección Preguntas frecuentes con 3 acordeones (registrarse, familia, cómo llegar), usando <details>/<summary> nativo; la página Visítanos ahora renderiza este componente.


## 2026-11-04 · Prompt 10 · Conócenos · Misión, visión y valores
- Archivos: src/components/conocenos/Identidad.astro, src/pages/conocenos.astro
- Qué cambió: sección Identidad con bloques de Misión, Visión y Valores (iconos, títulos y textos exactos del brief), 3 columnas en computadora y 1 en celular, fondo superficie con esquinas 16px.


## 2026-11-04 · Prompt 08 · Conócenos · Presentación
- Archivos: src/components/conocenos/Presentacion.astro, src/pages/conocenos.astro
- Qué cambió: sección Presentación con H1 «Conoce nuestra familia.», texto institucional y imagen (eventos-portada.jpg por falta de conocenos-congregacion.jpg). Alt de imagen: «Fotografía de la congregación reunida».


## 2026-11-04 · Prompt 07 · Inicio · Invitación a visitar la iglesia
- Archivos: src/components/inicio/InvitacionVisita.astro, src/pages/index.astro
- Qué cambió: sección final de invitación con título «¡Te esperamos con los brazos abiertos!», texto, imagen (celulas-jovenes.jpg por falta de inicio-templo.jpg) y botón «Cómo llegar» a /visitanos.


## 2026-11-04 · Prompt 06 · Inicio · Próximos eventos
- Archivos: src/components/inicio/ProximosEventos.astro, src/pages/index.astro
- Qué cambió: sección de eventos destacados con título, texto, imagen (eventos-portada.jpg por falta de inicio-eventos.jpg) y botón a /eventos.


## 2026-11-04 · Prompt 04 · Inicio · ¿Quiénes somos?
- Archivos: src/components/inicio/QuienesSomos.astro, src/pages/index.astro
- Qué cambió: sección ¿Quiénes somos? con título, descripción institucional, imagen (inicio-comunidad.jpg) y botón a /conocenos.


## 2026-11-04 · Prompt 03 · Inicio · Bienvenida
- Archivos: src/components/inicio/Bienvenida.astro, src/pages/index.astro
- Qué cambió: sección de bienvenida con H1 exacto, imagen destacada (inicio-comunidad.jpg por falta de JPEG válido en inicio-bienvenida), texto de bienvenida y botón a /visitanos. Se renombró la imagen a .jpg.


## 2026-11-04 · Prompt 02 · Marco · Navegación, pie de página y páginas base
- Archivos: src/datos/sitio.ts, src/components/Encabezado.astro, src/components/PiePagina.astro, src/pages/index.astro, src/pages/conocenos.astro, src/pages/visitanos.astro, src/pages/celulas.astro, src/pages/eventos.astro, src/pages/en-vivo.astro, src/pages/contacto.astro
- Qué cambió: información global de la marca, menú de 7 páginas, encabezado fijo con logo y menú desplegable, pie de página con textos oficiales, enlaces y derechos, y creación de las 7 páginas vacías. Se eliminaron los componentes de inicio de plantilla.


## 2026-11-04 · Prompt 01 · Identidad · Configuración visual base
- Archivos: src/styles/global.css, src/components/ui/Contenedor.astro, src/datos/sitio.ts
- Qué cambió: paleta de 7 colores, fuentes Montserrat y Open Sans con @font-face, radio 16px, borde 1px, sombra suave, contenedor max-w-7xl y animación sutil. Se renombró `pack final ultimo` a `pack` y se extrajeron las 4 fuentes .ttf necesarias. `marca-contraste` se ajustó a #000000 para cumplir contraste 4.5:1.


## Inicio · Plantilla v3 sin estilo

- Archivos: todos
- Qué cambió: punto de partida. Diseño en grises a la espera del brief.

## Actualización de contenido – 9 de noviembre de 2026
- Se reemplazó la sección de células por cuatro grupos: Juniors (12–16), Jóvenes (16–21), Sur Valle y Norte, con los horarios indicados y ubicación por confirmar mediante WhatsApp.
- Se retiraron los espacios que dependían de las fotografías faltantes de portada/reunión de células; la información ahora se presenta en tarjetas sin fotografía.
- Se añadieron los testimonios proporcionados de Ángel Mendoza, Ismael Carrera y Paola Carrera.
- Se sustituyó el afiche de evento destacado por un bloque editorial «Próximamente» con actividad, fecha y lugar por definir; no se presenta una actividad no confirmada como real.
- Se conectaron los formularios de consultas, peticiones de oración y solicitud de información de células con el correo de contacto mediante enlaces mailto. El visitante debe confirmar el envío en su propia aplicación de correo; no existe envío automático desde el servidor.
- Se publicó una página inicial de política de privacidad y se enlazó desde el pie de página. Requiere revisión institucional/legal antes de considerarse definitiva.
