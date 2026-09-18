import AudioPlayer from "./components/AudioPlayer";
import CuentaRegresiva from "./components/CuentaRegresiva";
import Galeria from "./components/Galeria";
import {
  IconoAnillos,
  IconoCanciones,
  IconoDressCode,
  IconoFiesta,
  IconoFrase,
  IconoInstagram,
} from "./components/Iconos";
import Portada from "./components/Portada";
import Regalos from "./components/Regalos";
import Reveal from "./components/Reveal";
import { invitacion } from "./lib/invitacion";

/** Bloque de Ceremonia / Fiesta: icono + título + detalle + botón de mapa. */
function BloqueEvento({
  icono,
  titulo,
  detalle,
  mapa,
  textoBoton,
}: {
  icono: React.ReactNode;
  titulo: string;
  detalle: readonly string[];
  mapa: string;
  textoBoton: string;
}) {
  return (
    <div className="columna">
      <Reveal variant="fade">{icono}</Reveal>
      <Reveal>
        <h4>{titulo}</h4>
        <p>
          {detalle.map((linea, i) => (
            <span key={linea}>
              {i > 0 && <br />}
              {linea}
            </span>
          ))}
        </p>
        <a target="_blank" rel="noopener noreferrer" href={mapa} className="btn">
          {textoBoton}
        </a>
      </Reveal>
    </div>
  );
}

export default function Home() {
  const {
    novios,
    fechaEvento,
    fechaPortada,
    portada,
    frase,
    ceremonia,
    fiesta,
    galeria,
    dressCode,
    instagram,
    confirmar,
    regalos,
    canciones,
    gracias,
    musica,
    footer,
  } = invitacion;

  const dosEventos = ceremonia.mostrar && fiesta.mostrar;

  return (
    <main>
      {musica.mostrar && <AudioPlayer archivo={musica.archivo} />}

      <Portada
        ella={novios.ella}
        el={novios.el}
        fecha={fechaPortada}
        imagen={portada.imagen}
      />

      {/* ---------- Frase ---------- */}
      <section className="frase">
        <div className="container">
          <Reveal variant="fade">
            <IconoFrase className="bounce-in" />
          </Reveal>
          <Reveal>
            <h4>{frase.titulo}</h4>
            <p>{frase.texto}</p>
            <p className="firma">{frase.firma}</p>
          </Reveal>
        </div>
      </section>

      <CuentaRegresiva fecha={fechaEvento} />

      {/* ---------- Ceremonia y fiesta ---------- */}
      {(ceremonia.mostrar || fiesta.mostrar) && (
        <section
          className={`ceremonia-fiesta${dosEventos ? " dos-columnas" : ""}`}
        >
          <div className="container">
            <div className="row">
              {ceremonia.mostrar && (
                <BloqueEvento
                  icono={<IconoAnillos className="bounce-in" />}
                  titulo={ceremonia.titulo}
                  detalle={ceremonia.detalle}
                  mapa={ceremonia.mapa}
                  textoBoton={ceremonia.textoBoton}
                />
              )}
              {fiesta.mostrar && (
                <BloqueEvento
                  icono={<IconoFiesta className="bounce-in" />}
                  titulo={fiesta.titulo}
                  detalle={fiesta.detalle}
                  mapa={fiesta.mapa}
                  textoBoton={fiesta.textoBoton}
                />
              )}
            </div>
          </div>
        </section>
      )}

      <Galeria fotos={galeria} />

      {/* ---------- Dress code ---------- */}
      {dressCode.mostrar && (
        <section className="dresscode">
          <div className="container">
            <Reveal variant="fade">
              <IconoDressCode className="bounce-in" />
            </Reveal>
            <Reveal>
              <h4>{dressCode.titulo}</h4>
              <p>{dressCode.texto}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------- Instagram ---------- */}
      {instagram.mostrar && (
        <section className="instagram">
          <div className="container">
            <Reveal variant="fade">
              <IconoInstagram className="bounce-in" />
            </Reveal>
            <Reveal>
              <span className="hashtag">{instagram.hashtag}</span>
              <p>{instagram.texto}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={instagram.url}
                className="btn"
              >
                {instagram.textoBoton}
              </a>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------- Confirmar asistencia ---------- */}
      {confirmar.mostrar && (
        <section
          className="confirmar parallax"
          style={{ backgroundImage: `url(${confirmar.imagen})` }}
        >
          <div className="container">
            <Reveal>
              <h4>{confirmar.titulo}</h4>
              {confirmar.texto.split("\n").map((linea) => (
                <p key={linea}>{linea}</p>
              ))}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={confirmar.url}
                className="btn"
              >
                {confirmar.textoBoton}
              </a>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------- Regalos ---------- */}
      {regalos.mostrar && (
        <Regalos
          texto={regalos.texto}
          textoBoton={regalos.textoBoton}
          datosBancarios={regalos.datosBancarios}
          buzon={regalos.buzon}
        />
      )}

      {/* ---------- Playlist ---------- */}
      {canciones.mostrar && (
        <section className="canciones">
          <div className="container">
            <Reveal variant="fade">
              <IconoCanciones className="bounce-in" />
            </Reveal>
            <Reveal>
              <h4>{canciones.titulo}</h4>
              <p>{canciones.texto}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={canciones.url}
                className="btn"
              >
                {canciones.textoBoton}
              </a>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------- Gracias ---------- */}
      <section className="gracias">
        <div className="container">
          <Reveal>
            <p>{gracias}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <section className="footer">
        <div className="container">
          <p>{footer.texto}</p>
        </div>
      </section>
    </main>
  );
}
