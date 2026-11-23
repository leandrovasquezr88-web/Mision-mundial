/*
  Datos generales del sitio, en un solo lugar.
  Salen del brief (pack/brief.md): secciones 1, 6, 7, 8 y 10.
  Encabezado, pie de página y <head> leen de aquí: si cambias algo, cambia en todo el sitio.
*/

export const sitio = {
  nombre: "Misión Mundial",
  descripcion:
    "Descubre Misión Mundial, una iglesia cristiana donde podrás conocer a Jesús, fortalecer tu fe y encontrar una comunidad para toda la familia.",
  correo: "leandro.vasquezr88@gmail.com",
  direccion: "Fray Bartolomé de las Casas, Quito, Ecuador (referencia plus code: RG43+QP)",
  horarioCulto: "Domingos, 9:30 a. m.",
  googleMaps:
    "https://www.google.com/maps/search/?api=1&query=Fray+Bartolome+de+las+Casas+RG43%2BQP+Quito+Ecuador",
  whatsapp: "https://wa.me/message/SGASWSK4GF3GK1",
  pie: "© 2026 Misión Mundial. Todos los derechos reservados.",
  animacion: "sutil" as "ninguna" | "sutil" | "marcada",
};

/*
  Tipo de menú (sección 7 del brief):
  - "barra": enlaces siempre visibles (en celular bajan a otra línea si no caben).
  - "desplegable": botón "Menú" en celular y tablet; barra desde computadora.
  - "desplegable-siempre": botón "Menú" en todas las pantallas.
  fijo: true = el encabezado queda pegado arriba al bajar.
*/
export const encabezado = {
  menu: "desplegable" as "barra" | "desplegable" | "desplegable-siempre",
  fijo: true,
};

/* Menú principal: un enlace por página del mapa del sitio (sección 8 del brief). */
export const menu: { texto: string; href: string }[] = [
  { texto: "Inicio", href: "/" },
  { texto: "Conócenos", href: "/conocenos" },
  { texto: "Visítanos", href: "/visitanos" },
  { texto: "Células", href: "/celulas" },
  { texto: "Eventos", href: "/eventos" },
  { texto: "En vivo", href: "/en-vivo" },
  { texto: "Contacto", href: "/contacto" },
];

/* Redes sociales oficiales proporcionadas para el sitio (sección 10 del brief). */
export const redes: { nombre: string; href: string }[] = [
  { nombre: "Facebook", href: "https://www.facebook.com/cmisionmundial/?locale=es_LA" },
  {
    nombre: "Instagram",
    href: "https://www.instagram.com/mision.mundial?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==",
  },
];
