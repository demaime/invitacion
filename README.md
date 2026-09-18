# Invitación de boda

Invitación digital de una sola página, hecha con Next.js (App Router) + React.
Replica la estructura y el diseño del modelo de referencia, adaptado a un casamiento.

## Cómo correrla

```bash
npm run dev     # http://localhost:3000
npm run build   # build de producción
npm start       # servir el build
```

## Dónde se edita el contenido

**Todo el texto, fechas y links están en un solo archivo: [`app/lib/invitacion.ts`](app/lib/invitacion.ts).**
No hace falta tocar los componentes para personalizar la invitación.

| Qué querés cambiar | Dónde |
| --- | --- |
| Nombres de los novios | `novios` |
| Fecha para la cuenta regresiva | `fechaEvento` (formato ISO con zona horaria) |
| Fecha que se ve en la portada | `fechaPortada` |
| Frase de bienvenida | `frase` |
| Ceremonia / Fiesta (horario, lugar, mapa) | `ceremonia`, `fiesta` |
| Fotos de la galería | `galeria` |
| Dress code | `dressCode` |
| Instagram y hashtag | `instagram` |
| Link del formulario de asistencia | `confirmar.url` |
| Datos bancarios para regalos | `regalos.datosBancarios` |
| Link del formulario de canciones | `canciones.url` |
| Texto final y pie de página | `gracias`, `footer` |

Cada sección tiene un `mostrar: true / false` para prenderla o apagarla.

## Cambiar las fotos

Las imágenes actuales son **placeholders** (degradés generados, no fotos reales).
Para poner las tuyas:

1. Copiá tus archivos dentro de `public/img/`:
   - `public/img/portada.jpg` → foto de portada (apaisada, idealmente 1600px de ancho o más)
   - `public/img/confirmar.jpg` → fondo de la sección "Confirmación de asistencia"
   - `public/img/galeria/1.jpg` … `8.jpg` → galería (cuadradas quedan mejor)
2. Actualizá las rutas en `app/lib/invitacion.ts` (cambiá `.png` por `.jpg`).
3. Podés poner más o menos de 8 fotos: la grilla se acomoda sola.

## Música de fondo

Dejá tu canción en `public/musica.mp3`. Si no querés música, poné
`musica.mostrar: false` en el config.

El botón siempre arranca en pausa: los navegadores bloquean el audio automático.

## Colores y tipografías

La paleta está en `:root`, arriba de [`app/globals.css`](app/globals.css):

```css
--color-primario: #e5c6c6;   /* rosa empolvado: botones, frase, dress code, regalos */
--color-secundario: #c0b9b0; /* gris cálido: cuenta regresiva y cierre */
```

Las tipografías se cargan con `next/font` en [`app/layout.tsx`](app/layout.tsx):
Montserrat para los textos y Great Vibes para los nombres de la portada.

## Estructura

```
app/
  layout.tsx              fuentes, metadata
  page.tsx                orden de las secciones
  globals.css             todo el diseño
  lib/invitacion.ts       contenido editable
  components/
    AudioPlayer.tsx       botón flotante de música
    Portada.tsx           portada con parallax y flecha
    CuentaRegresiva.tsx   contador en vivo
    Galeria.tsx           grilla + visor de fotos
    Regalos.tsx           datos bancarios en modal
    Reveal.tsx            animación al entrar en pantalla
    Iconos.tsx            iconos de cada sección
public/img/               imágenes
```
