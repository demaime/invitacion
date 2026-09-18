/**
 * Todo el contenido editable de la invitación vive acá.
 * Cambiá estos valores y la página se actualiza sola.
 */

export const invitacion = {
  /* ---------- Datos generales ---------- */
  novios: {
    ella: "Valentina",
    el: "Mateo",
  },

  /* Fecha y hora del evento, en formato ISO con zona horaria (-03:00 = Argentina).
     Se usa para la cuenta regresiva. */
  fechaEvento: "2026-11-25T20:00:00-03:00",

  /* Texto que se muestra debajo de los nombres en la portada */
  fechaPortada: "25 · 11 · 2026",

  /* ---------- Portada ---------- */
  portada: {
    imagen: "/img/portada.png",
  },

  /* ---------- Frase de bienvenida ---------- */
  frase: {
    titulo: "Nos casamos",
    texto:
      "Llegó el día que tanto soñamos, ¡y qué más lindo que compartirlo con vos!",
    firma: "Valen & Mateo",
  },

  /* ---------- Ceremonia ---------- */
  ceremonia: {
    mostrar: true,
    titulo: "Ceremonia",
    detalle: [
      "Sábado 25 de noviembre",
      "20:00 hs.",
      "Parroquia Nuestra Señora del Carmen",
      "Av. Vélez Sarsfield 1250, Córdoba.",
      "Te esperamos para acompañarnos en el momento del “sí”.",
    ],
    mapa: "https://maps.google.com/?q=Parroquia+Nuestra+Se%C3%B1ora+del+Carmen+C%C3%B3rdoba",
    textoBoton: "Cómo llegar",
  },

  /* ---------- Fiesta ---------- */
  fiesta: {
    mostrar: true,
    titulo: "Fiesta",
    detalle: [
      "Sábado 25 de noviembre",
      "22:00 a 05:00 hs.",
      "Salón Campo Norte",
      "Ruta E53, Córdoba.",
      "Clickeá en el botón de abajo y encontrá las indicaciones para llegar, ¡nos vemos! 😉",
    ],
    mapa: "https://goo.gl/maps/UxEZgL3xGRCqKSy37",
    textoBoton: "Cómo llegar",
  },

  /* ---------- Galería ----------
     Reemplazá cada ruta por tus fotos en /public/img/galeria/ (por ej. "/img/galeria/1.jpg"). */
  galeria: [
    "/img/galeria/1.png",
    "/img/galeria/2.png",
    "/img/galeria/3.png",
    "/img/galeria/4.png",
    "/img/galeria/5.png",
    "/img/galeria/6.png",
    "/img/galeria/7.png",
    "/img/galeria/8.png",
  ],

  /* ---------- Dress code ---------- */
  dressCode: {
    mostrar: true,
    titulo: "Dress code",
    texto: "Elegante",
  },

  /* ---------- Instagram ---------- */
  instagram: {
    mostrar: true,
    hashtag: "#ValenYMateo2026",
    texto:
      "¡Preparate para esta gran fiesta! Seguinos y etiquetanos en tus fotos y videos con nuestro hashtag.",
    url: "https://www.instagram.com/",
    textoBoton: "Ver Instagram",
  },

  /* ---------- Confirmar asistencia ---------- */
  confirmar: {
    mostrar: true,
    titulo: "Confirmación de asistencia",
    texto: "Contamos con tu presencia.\n¡Confirmá tu asistencia!",
    /* Pegá acá el link a tu Google Form */
    url: "https://docs.google.com/forms/",
    textoBoton: "Confirmar asistencia",
    imagen: "/img/confirmar.png",
  },

  /* ---------- Regalos ---------- */
  regalos: {
    mostrar: true,
    texto:
      "El mejor regalo es que vengas, pero si deseás regalarnos algo, podés colaborar con nuestra luna de miel ✨\n¡Muchas gracias!",
    textoBoton: "Hacer un regalo",
    datosBancarios: {
      titular: "Nombre Apellido",
      cbu: "0000000000000000000000",
      alias: "mi.alias.boda",
      dni: "00000000",
      banco: "Banco Galicia",
    },
    buzon:
      "Si deseás hacer tu regalo personalmente, el día del evento habrá un buzón para dejar obsequios.",
  },

  /* ---------- Playlist ---------- */
  canciones: {
    mostrar: true,
    titulo: "¡Playlist!",
    texto:
      "¡Ayudanos sugiriendo las canciones que pensás que no pueden faltar en la fiesta!",
    /* Pegá acá el link a tu Google Form */
    url: "https://docs.google.com/forms/",
    textoBoton: "Sugerir canción",
  },

  /* ---------- Cierre ---------- */
  gracias: "¡Gracias por acompañarnos en este momento tan importante!",

  /* ---------- Música de fondo ----------
     Dejá tu archivo en /public/musica.mp3 (o cambiá la ruta).
     Poné mostrar: false si no querés música. */
  musica: {
    mostrar: true,
    archivo: "/musica.mp3",
  },

  /* ---------- Pie de página ---------- */
  footer: {
    texto: "Valentina & Mateo · 2026",
  },
} as const;

export type Invitacion = typeof invitacion;
