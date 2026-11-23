# Brief de la marca

> **Estudiante:** este archivo lo genera la IA (fase 2) a partir de tu plan aprobado. Revísalo antes de usar Cline: todo lo que dice aquí es lo que se va a construir.
> Si algo dice `POR DEFINIR`, decídelo tú y pídele a la IA que lo actualice.
>
> **Agente:** este brief es la única fuente de decisiones de diseño y contenido.
> Si un campo que necesitas dice `POR DEFINIR` o está vacío, **detente y pregunta**: no inventes, no busques en otros archivos, no supongas.
> Copia los textos tal cual están escritos (no los reescribas ni "mejores").

## 1. Marca

| Campo | Decisión |
| --- | --- |
| Nombre de la marca | Misión Mundial (MM) |
| Tipo | Real. Es una organización cristiana dedicada a la enseñanza de la Palabra de Dios, la evangelización y el fortalecimiento de la fe. |
| Qué hace, en una frase | Misión Mundial es una iglesia cristiana que comparte el mensaje de Jesucristo y busca transformar vidas mediante la fe, la enseñanza bíblica y el servicio a la comunidad. |
| Para quién es (público) | Niños, adolescentes, jóvenes, adultos y familias que desean conocer a Dios, fortalecer su relación con Él y formar parte de una comunidad cristiana donde puedan crecer espiritualmente. |
**Personalidad (3 adjetivos):** Cálida, acogedora y cercana.
| Eslogan | Un abrazo sin límites |
| Descripción para Google (máx. 155 caracteres) | Descubre Misión Mundial, una iglesia cristiana donde podrás conocer a Jesús, fortalecer tu fe y encontrar una comunidad para toda la familia. |

## 2. Referencias

Qué tomar de cada sitio de referencia (las capturas están en el plan, `pack/plan.pdf`).

| Ref | Sitio | Detalle que tomamos | Dónde se aplica |
| --- | --- | --- | --- |
| 1a | https://www.life.church/?utm_source=chatgpt.com | Tres tarjetas interactivas con íconos, textos breves y enlaces directos para acciones prioritarias. | Página Inicio, sección «Conéctate con nosotros» |
| 1b | https://www.life.church/?utm_source=chatgpt.com | Estructura funcional que facilita la navegación rápida y fomenta la participación comunitaria. | Página Inicio, sección «Conéctate con nosotros» |
| 2a | https://www.elevationchurch.org/events | Diseño visual moderno con imágenes de gran tamaño, títulos destacados y organización clara. | Página Eventos, sección «Presentación» |
| 2b | https://www.elevationchurch.org/events | Presentación estructurada de eventos mediante tarjetas interactivas y botones para acceder a detalles e inscripción. | Página Eventos, secciones «Evento destacado» y «Próximas actividades» |

## 3. Paleta de color

Exactamente estos 7 colores, en hex (`#1a1a1a`). No se agregan otros.
`npm run verificar` exige contraste 4.5:1 o más en: `texto` sobre `fondo` y `superficie`, `texto-suave` sobre `fondo`, `marca-contraste` sobre `marca`.

| Token | Hex | Para qué se usa |
| --- | --- | --- |
| `fondo` | `#F8FAFC` | Fondo general de toda la página. |
| `superficie` | `#FFFFFF` | Tarjetas, formularios y bloques destacados. |
| `texto` | `#172B4D` | Títulos y textos principales. |
| `texto-suave` | `#64748B` | Descripciones y textos secundarios. |
| `borde` | `#DCE5EF` | Líneas divisorias y bordes de tarjetas. |
| `marca` | `#087FC4` | Botones, enlaces y elementos destacados. |
| `marca-contraste` | `#FFFFFF` | Texto blanco sobre botones azules. |

## 4. Tipografías

Archivos (`.woff2`, `.woff`, `.ttf` u `.otf`) en `pack/fuentes/`. Solo fuentes con licencia libre.

| Uso | Nombre de la fuente | Archivo(s) en `pack/fuentes/` | Grosores |
| --- | --- | --- | --- |
| Uso | Nombre de la fuente | Archivo(s) en `pack/fuentes/` | Grosores |
|---|---|---|---|
| Títulos | Montserrat | `Montserrat-SemiBold.ttf`, `Montserrat-Bold.ttf` | SemiBold (600) y Bold (700) |
| Texto | Open Sans | `OpenSans-Regular.ttf`, `OpenSans-SemiBold.ttf` | Regular (400) y SemiBold (600) |

## 5. Forma

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Esquinas (`radio`) | `0px` recto · `4px` · `8px` · `16px` · `9999px` píldora | `16px` |
| Grosor de borde | `0px` sin borde · `1px` · `2px` · `3px` | `1px` |
| Sombra | `none` · suave `0 4px 12px rgb(0 0 0 / 0.12)` · dura `4px 4px 0 0 <hex de borde>` | suave `0 4px 12px rgb(0 0 0 / 0.12)` |
| Ancho máximo del contenido | `max-w-3xl` estrecho · `max-w-5xl` medio · `max-w-7xl` ancho | `max-w-7xl` ancho |

## 6. Animación

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Intensidad | `ninguna` · `sutil` · `marcada` | `sutil` |

## 7. Logo y menú

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Logo (archivo en `pack/logos/` + texto alternativo) | o "sin logo, solo nombre" | `pack/logos/logo-mision-mundial.png` (Logotipo institucional de Misión Mundial, con el eslogan «Un abrazo sin límites») |
| Tipo de menú | `barra` (enlaces siempre visibles) · `desplegable` (botón "Menú" en celular y tablet, barra en computadora) · `desplegable-siempre` (botón en todas las pantallas) | `desplegable` |
| Encabezado fijo arriba al bajar | `sí` · `no` | `sí` |

## 8. Mapa del sitio

Una fila por página. La primera es Inicio.

| Página | Ruta | Archivo | Texto en el menú | Título de la pestaña |
| --- | --- | --- | --- | --- |
| Inicio | `/` | `src/pages/index.astro` | Inicio | Inicio \| Misión Mundial |
| Conócenos | `/conocenos` | `src/pages/conocenos.astro` | Conócenos | Conócenos \| Misión Mundial |
| Planifica tu visita | `/visitanos` | `src/pages/visitanos.astro` | Visítanos | Planifica tu visita \| Misión Mundial |
| Células | `/celulas` | `src/pages/celulas.astro` | Células | Células \| Misión Mundial |
| Eventos | `/eventos` | `src/pages/eventos.astro` | Eventos | Eventos \| Misión Mundial |
| En vivo | `/en-vivo` | `src/pages/en-vivo.astro` | En vivo | En vivo \| Misión Mundial |
| Contacto | `/contacto` | `src/pages/contacto.astro` | Contacto | Contacto \| Misión Mundial |

## 9. Contenido por página

### Página: Inicio (`/`)

#### Sección: Bienvenida
- **id:** `bienvenida`
- **Título:** Misión Mundial: Un abrazo sin límites.
- **Texto:** ¡Bienvenido a Misión Mundial! Somos una familia cristiana que comparte el amor de Dios y busca transformar vidas a través de la fe, la enseñanza de su Palabra y la comunidad. Aquí encontrarás un lugar para crecer espiritualmente y acercarte más a Jesús.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/inicio-bienvenida.jpg` (Fotografía panorámica de la congregación de Misión Mundial durante un culto)
- **Botones** (texto → destino, o "ninguno"): Planifica tu visita → `/visitanos`
- **Disposición** (celular / computadora): celular: banner con texto centrado, botón e imagen apilados verticalmente; computadora: banner centrado de ancho completo con texto destacado, descripción, botón y elemento visual de soporte.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: ¿Quiénes somos?
- **id:** `quienes-somos`
- **Título:** Una familia unida por la fe.
- **Texto:** En Misión Mundial creemos que cada persona es importante. Nuestro propósito es compartir el mensaje de Jesucristo, fortalecer la fe y construir una comunidad donde todos puedan experimentar el amor de Dios.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/inicio-comunidad.jpg` (Fotografía de miembros de Misión Mundial compartiendo en una actividad)
- **Botones** (texto → destino, o "ninguno"): Conoce nuestra historia → `/conocenos`
- **Disposición** (celular / computadora): celular: título, texto, botón e imagen apilados verticalmente; computadora: texto y botón a un lado e imagen al otro lado en dos columnas.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Conéctate con nosotros
- **id:** `conectate`
- **Título:** Encuentra tu lugar en nuestra familia.
- **Texto:** Queremos acompañarte en tu camino de fe. Descubre las diferentes maneras de conectarte con Misión Mundial.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Pide oración: Queremos escucharte y acompañarte en oración.
  - Únete a una célula: Comparte, aprende y fortalece tu fe junto a otras personas.
  - Soy nuevo: Descubre cómo puedes visitarnos y formar parte de nuestra comunidad.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna (No se requieren fotografías. Se utilizarán íconos)
- **Botones** (texto → destino, o "ninguno"):
  - Pedir oración → `/contacto#peticiones`
  - Unirme a una célula → `/celulas`
  - Planificar mi visita → `/visitanos`
- **Disposición** (celular / computadora): celular: tres tarjetas interactivas apiladas verticalmente con ícono y texto; computadora: tres tarjetas interactivas distribuidas en una fila horizontal de tres columnas.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 1a, 1b

#### Sección: Próximos eventos
- **id:** `proximos-eventos`
- **Título:** Vive momentos especiales con nosotros.
- **Texto:** Descubre los próximos cultos especiales, encuentros y actividades que hemos preparado para compartir en comunidad.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): Cada evento mostrará su nombre, fecha, horario y una breve descripción.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/inicio-eventos.jpg` (Fotografía de una actividad especial realizada en Misión Mundial)
- **Botones** (texto → destino, o "ninguno"): Ver todos los eventos → `/eventos`
- **Disposición** (celular / computadora): celular: título, descripción y tarjetas de eventos apiladas verticalmente con botón al final; computadora: encabezado centrado con bloque destacado de eventos y botón de acceso general.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Invitación a visitar la iglesia
- **id:** `invitacion`
- **Título:** ¡Te esperamos con los brazos abiertos!
- **Texto:** Nos encantaría conocerte. Encuentra nuestros horarios, descubre dónde estamos ubicados y prepárate para compartir una experiencia especial en Misión Mundial.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/inicio-templo.jpg` (Fotografía de la entrada o fachada de Misión Mundial)
- **Botones** (texto → destino, o "ninguno"): Cómo llegar → `/visitanos`
- **Disposición** (celular / computadora): celular: bloque centrado con texto, detalles y botón apilados; computadora: tarjeta o contenedor amplio centrado con textos destacados y botón de acción.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

---

### Página: Conócenos (`/conocenos`)

#### Sección: Presentación
- **id:** `presentacion`
- **Título:** Conoce nuestra familia.
- **Texto:** Somos Misión Mundial, una comunidad cristiana que comparte el amor de Jesucristo y acompaña a las personas en su crecimiento espiritual.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/conocenos-congregacion.jpg` (Fotografía de la congregación reunida)
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: título, texto e imagen apilados verticalmente; computadora: encabezado centrado con contenedor destacado e imagen de fondo o central.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Nuestra historia
- **id:** `historia`
- **Título:** Nuestra historia.
- **Texto:** Misión Mundial es una iglesia que nació con el propósito de compartir el mensaje de Jesucristo. A través de la enseñanza bíblica, la oración y el trabajo en comunidad, buscamos seguir creciendo como una familia de fe.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/conocenos-historia.jpg` (Fotografía histórica de Misión Mundial)
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: texto e imagen apilados verticalmente; computadora: texto a la izquierda e imagen a la derecha en dos columnas (50/50).
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Misión, visión y valores
- **id:** `identidad`
- **Título:** Nuestra identidad.
- **Texto:** En Misión Mundial creemos que nuestra identidad se construye a través de la fe, el amor y el compromiso con Dios. Nuestra misión, visión y valores representan el propósito que nos une como familia cristiana y nos guían para compartir el mensaje de Jesucristo y servir a nuestra comunidad.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Misión: Compartir el mensaje de Jesucristo y acompañar a las personas en el fortalecimiento de su fe mediante la enseñanza bíblica, la oración y el servicio.
  - Visión: Ser una comunidad cristiana que impacte positivamente a las familias y a la sociedad, compartiendo el amor de Dios.
  - Valores: Fe, amor, unidad, respeto, solidaridad y compromiso con Dios.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: tres tarjetas o bloques apilados verticalmente; computadora: tres columnas en una sola fila horizontal.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Nuestras creencias
- **id:** `creencias`
- **Título:** Nuestra fe.
- **Texto:** Creemos en Dios y en el mensaje de salvación de Jesucristo. Reconocemos la Biblia como fundamento de nuestra fe y buscamos vivir sus enseñanzas mediante el amor, la oración y la comunión con los demás.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/conocenos-fe.jpg` (Fotografía de una Biblia abierta durante un momento de enseñanza)
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: bloque de texto centrado con icono o imagen arriba apilados; computadora: contenedor centrado con icono/imagen superior y texto enmarcado.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Pastores y liderazgo
- **id:** `liderazgo`
- **Título:** Personas que nos guían.
- **Texto:** Conoce a quienes acompañan y orientan espiritualmente a nuestra comunidad, dedicando su tiempo al servicio de Dios y de las personas.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): Nombre del pastor o líder, función y breve presentación, según la información oficial autorizada.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/conocenos-pastores.jpg` (Fotografía oficial del equipo pastoral de Misión Mundial)
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: tarjetas de pastores y líderes apiladas verticalmente; computadora: tarjetas dispuestas horizontalmente en tres columnas con foto, nombre y función.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Nuestros ministerios
- **id:** `ministerios`
- **Título:** Una iglesia para toda la familia.
- **Texto:** En Misión Mundial compartimos diferentes espacios de enseñanza, adoración y comunidad para fortalecer nuestra relación con Dios.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Niños: Espacios de aprendizaje bíblico adaptados a los más pequeños.
  - Jóvenes: Actividades para fortalecer la fe y construir amistades.
  - Adultos y familias: Encuentros para crecer espiritualmente y compartir en comunidad.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/conocenos-ministerios.jpg` (Fotografía de una actividad de los ministerios de la iglesia)
- **Botones** (texto → destino, o "ninguno"): Planifica tu visita → `/visitanos`
- **Disposición** (celular / computadora): celular: bloque con texto descriptivo, lista de ministerios y botón apilados verticalmente; computadora: contenedor amplio con los ministerios destacados y botón centrado de llamada a la acción.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

---

### Página: Planifica tu visita (`/visitanos`)

#### Sección: Bienvenida
- **id:** `bienvenida`
- **Título:** ¡Queremos conocerte!
- **Texto:** Si estás pensando en visitarnos por primera vez, queremos que te sientas bienvenido desde el primer momento. Aquí encontrarás la información que necesitas para acompañarnos.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/visitanos-bienvenida.jpg` (Fotografía de personas recibiendo a los asistentes en la iglesia)
- **Botones** (texto → destino, o "ninguno"): Cómo llegar → `/visitanos#ubicacion`
- **Disposición** (celular / computadora): celular: título, texto y botón apilados verticalmente; computadora: banner centrado con texto y botón destacado.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Horarios
- **id:** `horarios`
- **Título:** Nuestros horarios.
- **Texto:** Te invitamos a compartir con nosotros en nuestros cultos y reuniones. ¡Siempre habrá un lugar para ti!
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Cultos generales: Domingos, 9:30 a. m.
  - Reuniones especiales: Consulta nuestra programación de eventos.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): Ver eventos → `/eventos`
- **Disposición** (celular / computadora): celular: bloque informativo con lista de horarios y botón apilados; computadora: contenedor destacado con horarios a la vista y botón de enlace.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Ubicación
- **id:** `ubicacion`
- **Título:** Encuéntranos fácilmente.
- **Texto:** Estamos ubicados en Fray Bartolomé de las Casas y referencia plus code RG43+QP, Quito, Ecuador. Consulta nuestra ubicación para planificar tu llegada.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna (No requiere fotografía. Se incorporará un mapa interactivo de Google Maps)
- **Botones** (texto → destino, o "ninguno"): Abrir Google Maps → `https://www.google.com/maps/search/?api=1&query=Fray+Bartolome+de+las+Casas+RG43%2BQP+Quito+Ecuador`
- **Disposición** (celular / computadora): celular: mapa interactivo y datos de dirección/botón apilados en una columna; computadora: mapa interactivo a la izquierda y columna de datos con botón a la derecha (50/50).
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Tu primera visita
- **id:** `primera-visita`
- **Título:** ¿Qué puedes esperar?
- **Texto:** Queremos que tu primera experiencia en Misión Mundial sea especial.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Una bienvenida cálida: Te recibiremos con cariño y estaremos felices de conocerte.
  - Un mensaje de fe: Compartiremos enseñanzas de la Palabra de Dios.
  - Una gran familia: Tendrás la oportunidad de conocer personas y compartir en comunidad.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/visitanos-comunidad.jpg` (Fotografía de personas compartiendo durante un culto o reunión)
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: tres tarjetas informativas apiladas verticalmente; computadora: tres tarjetas distribuidas en una fila horizontal de tres columnas.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Preguntas frecuentes
- **id:** `preguntas-frecuentes`
- **Título:** Resolvemos tus dudas.
- **Texto:** Queremos que te sientas tranquilo y bienvenido antes de visitarnos. Por eso, hemos preparado algunas respuestas a las preguntas más frecuentes para ayudarte a conocer mejor Misión Mundial y saber qué esperar de tu primera visita.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - ¿Necesito registrarme para asistir?: No necesitas registrarte para visitarnos. Puedes acompañarnos en nuestros cultos.
  - ¿Puedo asistir con mi familia?: ¡Por supuesto! Queremos que toda tu familia se sienta bienvenida.
  - ¿Cómo puedo llegar?: Puedes consultar nuestra ubicación mediante Google Maps o escribirnos para recibir indicaciones.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: lista de preguntas y respuestas apiladas verticalmente; computadora: lista centrada en una columna con tarjetas o acordeones expandidos.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Contacto
- **id:** `contacto-visita`
- **Título:** ¿Necesitas ayuda para llegar?
- **Texto:** Si tienes alguna pregunta antes de visitarnos, estaremos felices de ayudarte.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): Escríbenos por WhatsApp → `https://wa.me/message/SGASWSK4GF3GK1`
- **Disposición** (celular / computadora): celular: tarjeta centrada con texto y botón de WhatsApp apilados; computadora: caja centrada con texto persuasivo y botón destacado de WhatsApp.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

---

### Página: Células (`/celulas`)

#### Sección: Bienvenida
- **id:** `bienvenida`
- **Título:** Crezcamos juntos en la fe.
- **Texto:** La vida cristiana es un camino que podemos recorrer juntos. En nuestras células encontrarás un espacio para aprender de Dios, compartir experiencias y construir amistades.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/celulas-portada.jpg` (Fotografía de integrantes de una célula de Misión Mundial)
- **Botones** (texto → destino, o "ninguno"): Encuentra tu célula → `/celulas#grupos`
- **Disposición** (celular / computadora): celular: texto y botón apilados verticalmente; computadora: banner centrado con llamado a la acción y botón.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: ¿Qué son las células?
- **id:** `que-son`
- **Título:** Una comunidad donde puedes crecer.
- **Texto:** Las células son pequeños grupos de personas que se reúnen para estudiar la Palabra de Dios, compartir sus experiencias, orar y fortalecer sus relaciones de amistad y compañerismo.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/celulas-reunion.jpg` (Fotografía de una reunión de célula)
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: texto e imagen apilados verticalmente; computadora: texto a la izquierda e imagen a la derecha en dos columnas (50/50).
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Beneficios de participar
- **id:** `beneficios`
- **Título:** ¿Por qué formar parte de una célula?
- **Texto:** En Misión Mundial creemos que crecer espiritualmente también significa compartir con otras personas. A través de nuestras células podrás aprender de la Palabra de Dios, fortalecer tus amistades y encontrar una comunidad que te acompañe en tu camino de fe.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Crece en tu fe: Aprende de la Biblia y fortalece tu relación con Dios.
  - Construye amistades: Conoce personas con quienes compartir tus experiencias.
  - Encuentra apoyo: Forma parte de una comunidad donde podrás compartir y recibir acompañamiento espiritual.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: tres tarjetas o bloques apilados verticalmente; computadora: tres tarjetas dispuestas horizontalmente en tres columnas.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Grupos disponibles
- **id:** `grupos`
- **Título:** Encuentra tu lugar.
- **Texto:** Queremos ayudarte a encontrar una célula en la que puedas sentirte cómodo y crecer espiritualmente.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Adolescentes: Un espacio para aprender de Dios y construir amistades durante esta etapa de la vida.
  - Jóvenes: Comparte con personas de tu edad y fortalece tu fe mediante la enseñanza bíblica.
  - Adultos y familias: Encuentros para compartir experiencias y fortalecer la vida espiritual.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"):
  - `pack/imagenes/celulas-adolescentes.jpg` (Fotografía de una reunión de adolescentes)
  - `pack/imagenes/celulas-jovenes.jpg` (Fotografía de una célula juvenil)
  - `pack/imagenes/celulas-adultos.jpg` (Fotografía de una reunión de adultos)
- **Botones** (texto → destino, o "ninguno"):
  - Solicitar información (en cada grupo) → `/celulas#formulario`
- **Disposición** (celular / computadora): celular: tres tarjetas con imagen, descripción y botón apiladas verticalmente; computadora: tres columnas con tarjeta, foto superior, texto y botón inferior.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Horarios y lugares
- **id:** `horarios-lugares`
- **Título:** ¿Cuándo nos reunimos?
- **Texto:** Cada célula tiene un horario y lugar de encuentro. Comunícate con nosotros para conocer las opciones disponibles.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): Nombre de la célula, edad de participantes, día, hora y lugar de reunión, según información autorizada.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: bloque informativo con datos apilados verticalmente; computadora: bloque estructurado centrado con detalles organizados.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Formulario
- **id:** `formulario`
- **Título:** ¡Queremos conocerte!
- **Texto:** Completa este formulario para recibir información sobre las células de Misión Mundial.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Campos: Nombre completo, Edad, Número de WhatsApp, Grupo de interés, Autorización para recibir información.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): Solicitar información → Envía los datos al responsable autorizado de coordinación de células y muestra una confirmación.
- **Disposición** (celular / computadora): celular: campos de formulario apilados verticalmente en una columna; computadora: formulario en contenedor centrado con campos organizados y botón de envío.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Testimonios
- **id:** `testimonios`
- **Título:** Historias que inspiran.
- **Texto:** Cada encuentro es una oportunidad para aprender, compartir y fortalecer nuestra fe. Conoce las experiencias de quienes forman parte de nuestras células.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): En la versión definitiva se incorporarán testimonios reales, con autorización de sus participantes.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/celulas-testimonios.jpg` (Fotografía de integrantes de las células compartiendo en comunidad)
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: bloque centrado con imagen y testimonios apilados; computadora: contenedor centrado con imagen y citas de testimonios estructuradas.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

---

### Página: Eventos (`/eventos`)

#### Sección: Presentación
- **id:** `presentacion`
- **Título:** Vive nuestros eventos.
- **Texto:** En Misión Mundial compartimos momentos especiales de fe, adoración y comunidad. Descubre nuestras próximas actividades y sé parte de cada experiencia.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/eventos-portada.jpg` (Fotografía panorámica de un congreso, culto especial o encuentro de Misión Mundial)
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: título, texto e imagen apilados verticalmente; computadora: cabecera visual amplia con tipografía destacada e imagen panorámica.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 2a

#### Sección: Evento destacado
- **id:** `evento-destacado`
- **Título:** Nuestro próximo gran encuentro.
- **Texto:** Prepárate para vivir una experiencia especial. Conoce la información de nuestra próxima actividad y acompáñanos.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Nombre: [NOMBRE DEL EVENTO]
  - Descripción: [DESCRIPCIÓN OFICIAL]
  - Fecha: [FECHA]
  - Horario: [HORA]
  - Lugar: [UBICACIÓN]
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/eventos-destacado.jpg` (Afiche oficial del próximo evento destacado)
- **Botones** (texto → destino, o "ninguno"): Ver detalles → Información completa del evento seleccionado.
- **Disposición** (celular / computadora): celular: afiche del evento, información y botón apilados verticalmente; computadora: afiche a la izquierda y detalles del evento con botón a la derecha (50/50).
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 2b

#### Sección: Próximas actividades
- **id:** `proximas-actividades`
- **Título:** No te pierdas lo que viene.
- **Texto:** Consulta nuestras próximas actividades y encuentra oportunidades para compartir en comunidad.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Congresos: Encuentros especiales para fortalecer la fe mediante la enseñanza, la adoración y la comunidad.
  - Reuniones especiales: Espacios de oración, enseñanza y celebración para toda la congregación.
  - Encuentros juveniles: Actividades dirigidas a los jóvenes para crecer espiritualmente y fortalecer amistades.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"):
  - `pack/imagenes/eventos-congresos.jpg` (Afiche o fotografía de un congreso)
  - `pack/imagenes/eventos-reuniones.jpg` (Fotografía de una reunión especial)
  - `pack/imagenes/eventos-jovenes.jpg` (Fotografía de un encuentro juvenil)
- **Botones** (texto → destino, o "ninguno"):
  - Más información (en cada tarjeta) → Detalles del evento correspondiente.
- **Disposición** (celular / computadora): celular: tres tarjetas con imagen, descripción y botón apiladas verticalmente; computadora: tres tarjetas en una fila horizontal de tres columnas.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 2b

#### Sección: Calendario
- **id:** `calendario`
- **Título:** Calendario de actividades.
- **Texto:** Organiza tu tiempo y acompáñanos en nuestros próximos encuentros.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): Calendario mensual con fechas destacadas y nombres de eventos.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna (No requiere fotografía; será un calendario interactivo)
- **Botones** (texto → destino, o "ninguno"): Ver evento → Información de la actividad seleccionada.
- **Disposición** (celular / computadora): celular: vista mensual adaptada en formato de lista o calendario compacto vertical; computadora: cuadrícula de calendario mensual centrado con eventos interactivos.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Inscripciones
- **id:** `inscripciones`
- **Título:** Sé parte de nuestros encuentros.
- **Texto:** Algunos de nuestros eventos pueden requerir inscripción previa. Consulta los detalles de cada actividad para conocer cómo participar.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): Consultar inscripción → Formulario o contacto oficial del evento, cuando corresponda.
- **Disposición** (celular / computadora): celular: bloque con texto y botón apilados verticalmente; computadora: franja destacada centrada con texto y botón de llamada a la acción.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Eventos anteriores
- **id:** `eventos-anteriores`
- **Título:** Momentos que recordamos.
- **Texto:** Cada evento nos deja enseñanzas, experiencias y recuerdos especiales. Revive algunos de los momentos que hemos compartido como familia.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"):
  - `pack/imagenes/eventos-galeria-01.jpg` (Fotografía de un evento anterior)
  - `pack/imagenes/eventos-galeria-02.jpg` (Fotografía de un momento de adoración)
  - `pack/imagenes/eventos-galeria-03.jpg` (Fotografía grupal de participantes)
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: imágenes apiladas en columna vertical; computadora: galería en cuadrícula horizontal de tres columnas.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

---

### Página: En vivo (`/en-vivo`)

#### Sección: Bienvenida
- **id:** `bienvenida`
- **Título:** Conéctate desde donde estés.
- **Texto:** La distancia no es un impedimento para compartir nuestra fe. Acompáñanos en las transmisiones de Misión Mundial y sé parte de nuestros cultos desde donde te encuentres.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/envivo-portada.jpg` (Fotografía de un culto de Misión Mundial)
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: título, texto e imagen apilados verticalmente; computadora: encabezado amplio centrado con soporte visual.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Transmisión
- **id:** `transmision`
- **Título:** Acompáñanos en vivo.
- **Texto:** Comparte con nosotros un tiempo de adoración, oración y enseñanza de la Palabra de Dios a través de nuestra página oficial de Facebook.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Reproductor de Facebook Live, cuando esté disponible.
  - Mensaje cuando no exista una transmisión activa: «En este momento no estamos transmitiendo. Te invitamos a seguir nuestra página de Facebook para conocer nuestras próximas transmisiones».
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/envivo-miniatura.jpg` (Imagen de portada utilizada cuando no exista una transmisión activa)
- **Botones** (texto → destino, o "ninguno"): Ver transmisión en Facebook → `https://www.facebook.com/cmisionmundial/?locale=es_LA`
- **Disposición** (celular / computadora): celular: contenedor de video/miniatura, mensaje y botón apilados verticalmente; computadora: área de video central destacada con mensaje de estado y botón inferior.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Horarios
- **id:** `horarios`
- **Título:** Horarios de transmisión.
- **Texto:** Conoce cuándo podrás acompañarnos a través de nuestras transmisiones en línea.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Cultos transmitidos: Domingos, 9:30 a. m.
  - Transmisiones especiales: Consulta nuestra programación de eventos.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): Ver próximos eventos → `/eventos`
- **Disposición** (celular / computadora): celular: tarjeta informativa con lista y botón apilados; computadora: tarjeta informativa en columna (lado a lado con próximo culto).
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Próximo culto
- **id:** `proximo-culto`
- **Título:** Nuestra próxima transmisión.
- **Texto:** Te esperamos para compartir un nuevo tiempo de fe y comunión.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): Nombre del culto, fecha y horario, cuando estén confirmados.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): Ir a Facebook → `https://www.facebook.com/cmisionmundial/?locale=es_LA`
- **Disposición** (celular / computadora): celular: tarjeta con datos del culto y botón apilados; computadora: tarjeta informativa en columna (lado a lado con horarios de transmisión, 50/50).
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Redes sociales
- **id:** `redes-envivo`
- **Título:** Sigamos conectados.
- **Texto:** Síguenos en Facebook para recibir información sobre nuestros cultos, actividades y próximas transmisiones.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): Por ahora, Facebook será la plataforma principal. YouTube podrá incorporarse cuando exista un canal oficial con transmisiones activas.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): Seguir a Misión Mundial → `https://www.facebook.com/cmisionmundial/?locale=es_LA`
- **Disposición** (celular / computadora): celular: bloque centrado con texto y botón apilados; computadora: bloque horizontal centrado con texto y botón de seguimiento.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

---

### Página: Contacto (`/contacto`)

#### Sección: Bienvenida
- **id:** `bienvenida`
- **Título:** Estamos aquí para ti.
- **Texto:** En Misión Mundial queremos escucharte y acompañarte. Si tienes alguna pregunta, necesitas información o deseas compartir una petición de oración, estaremos felices de atenderte.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/contacto-bienvenida.jpg` (Fotografía de miembros de Misión Mundial compartiendo en comunidad)
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: texto e imagen apilados verticalmente; computadora: encabezado centrado con texto acogedor.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Canales de contacto
- **id:** `canales`
- **Título:** ¿Cómo podemos ayudarte?
- **Texto:** Estamos aquí para escucharte y ayudarte. En Misión Mundial queremos mantenernos cerca de nuestra comunidad, resolver tus inquietudes y acompañarte cuando necesites información, orientación o simplemente quieras conocernos.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - WhatsApp: Comunícate con nosotros de manera rápida para solicitar información.
  - Correo electrónico: Envíanos tus preguntas o consultas.
  - Ubicación: Encuentra nuestra iglesia y descubre cómo visitarnos.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"):
  - Abrir WhatsApp → `https://wa.me/message/SGASWSK4GF3GK1`
  - Enviar correo → `mailto:leandro.vasquezr88@gmail.com`
  - Ver ubicación → `https://www.google.com/maps/search/?api=1&query=Fray+Bartolome+de+las+Casas+RG43%2BQP+Quito+Ecuador`
- **Disposición** (celular / computadora): celular: tres tarjetas de acceso rápido apiladas verticalmente; computadora: tres tarjetas en una fila horizontal de tres columnas.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Formulario de consultas
- **id:** `formulario-consultas`
- **Título:** Envíanos un mensaje.
- **Texto:** ¿Tienes alguna pregunta? Completa el formulario y nuestro equipo se pondrá en contacto contigo.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Campos: Nombre completo, Correo electrónico, Asunto, Mensaje, Consentimiento para el uso de los datos de contacto.
  - Mensaje de confirmación: «¡Gracias por escribirnos! Hemos recibido tu mensaje».
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): Enviar mensaje → Envía la consulta al correo institucional y muestra una confirmación de recepción.
- **Disposición** (celular / computadora): celular: campos de formulario apilados verticalmente en una columna; computadora: columna izquierda del bloque de formularios (50/50 respecto a peticiones de oración).
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Peticiones de oración
- **id:** `peticiones`
- **Título:** Queremos orar por ti.
- **Texto:** Sabemos que todos atravesamos diferentes momentos en la vida. Queremos acompañarte en oración y confiar juntos en Dios.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Campos: Nombre (opcional), Medio de contacto (opcional), Petición de oración, Autorización para compartir la petición con el equipo de oración.
  - Mensaje de confirmación: «Hemos recibido tu petición. Gracias por confiar en nosotros».
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): Enviar petición → Envía la solicitud de manera privada al equipo autorizado de oración.
- **Disposición** (celular / computadora): celular: formulario de petición apilado verticalmente en una columna; computadora: columna derecha del bloque de formularios (50/50 respecto a consultas).
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Redes sociales
- **id:** `redes-contacto`
- **Título:** Sigamos conectados.
- **Texto:** Forma parte de nuestra comunidad digital y mantente informado sobre nuestras actividades y encuentros.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Facebook: Noticias, actividades y transmisiones en vivo.
  - Instagram: Fotografías, anuncios y contenido de la comunidad.
  - Otras redes oficiales: Se incorporarán únicamente si están activas.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"):
  - Facebook → `https://www.facebook.com/cmisionmundial/?locale=es_LA`
  - Instagram → `https://www.instagram.com/mision.mundial?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==`
- **Disposición** (celular / computadora): celular: iconos y enlaces de redes sociales apilados o en bloque centrado; computadora: enlaces e iconos ordenados en fila horizontal centrada.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

## 10. Contacto y pie de página

| Campo | Decisión |
| --- | --- |
| Correo de contacto proporcionado | `leandro.vasquezr88@gmail.com` (confirmar que es el correo que la iglesia desea publicar) |
| Redes (nombre → enlace) | Facebook: Misión Mundial → `https://www.facebook.com/cmisionmundial/?locale=es_LA`, Instagram: Misión Mundial → `https://www.instagram.com/mision.mundial?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==`, YouTube: Se incorporará cuando se confirme su disponibilidad y uso oficial. |
| Texto del pie | Título: Misión Mundial. Texto: «Un abrazo sin límites». Descripción: Somos una familia cristiana comprometida con compartir el amor de Dios y fortalecer la fe a través de su Palabra y la comunidad. Enlaces: Inicio \| Conócenos \| Visítanos \| Células \| Eventos \| En vivo \| Contacto. Texto inferior: © 2026 Misión Mundial. Todos los derechos reservados. Enlace adicional: Política de privacidad → Documento de privacidad del sitio web, pendiente de elaboración. |Pega aquí el bloque "Archivo: brief.md" que te da la IA en la fase 2 (borra esta línea).


## 11. Historia institucional proporcionada

La iglesia Centro Cristiano Misión Mundial fue fundada hace 23 años en Quito por los pastores Santander. Comenzó en un espacio pequeño y con una comunidad reducida. Con el paso del tiempo, la congregación creció y se trasladó a un nuevo lugar, de la mano de las Iglesias de Dios en Ecuador. El edificio, que tenía una arquitectura antigua y apreciada por la comunidad, fue renovado para responder a una nueva etapa de la iglesia. El 8 de septiembre de 2024 se inauguró el auditorio remodelado y se presentó la actualización del nombre institucional: de «Centro Cristiano Misión Mundial» pasó a «Misión Mundial».

> Nota editorial: la historia se redactó a partir de la información proporcionada por el responsable del proyecto. Antes de publicar, confirmar la denominación oficial de la red «Iglesias de Dios en Ecuador», los nombres completos de los pastores y si la antigüedad de 23 años debe expresarse con una fecha de fundación concreta.

## 12. Datos operativos confirmados

- **Dirección proporcionada:** Fray Bartolomé de las Casas y RG43+QP, Quito, Ecuador.
- **Culto general:** domingos, 9:30 a. m.
- **Facebook:** https://www.facebook.com/cmisionmundial/?locale=es_LA
- **Instagram:** https://www.instagram.com/mision.mundial?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==
- **WhatsApp:** https://wa.me/message/SGASWSK4GF3GK1
- **Correo proporcionado:** leandro.vasquezr88@gmail.com (confirmar autorización para publicarlo como contacto institucional).
