"use client";

import { Fragment, useSyncExternalStore } from "react";

/** Se suscribe a un tick de un segundo. */
function suscribir(alCambiar: () => void) {
  const id = setInterval(alCambiar, 1000);
  return () => clearInterval(id);
}

/** Segundo actual: estable dentro del mismo segundo, así no dispara renders de más. */
const segundoActual = () => Math.floor(Date.now() / 1000);

/** En el servidor no hay reloj: se renderiza el placeholder y el cliente lo completa. */
const sinReloj = () => null;

const dosDigitos = (n: number) => n.toString().padStart(2, "0");

export default function CuentaRegresiva({ fecha }: { fecha: string }) {
  const objetivo = new Date(fecha).getTime();
  const ahora = useSyncExternalStore(suscribir, segundoActual, sinReloj);

  const distancia = ahora === null ? null : objetivo - ahora * 1000;
  const terminado = distancia !== null && distancia <= 0;

  const partes =
    distancia === null || distancia <= 0
      ? [null, null, null, null]
      : [
          Math.floor(distancia / (1000 * 60 * 60 * 24)),
          Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60)),
          Math.floor((distancia % (1000 * 60)) / 1000),
        ];

  const etiquetas = ["días", "hs", "min", "seg"];

  return (
    <section className="cuenta-regresiva" id="cuenta-regresiva">
      <div className="container">
        {terminado ? (
          <p id="reloj">¡Es hoy!</p>
        ) : (
          <>
            <p>Faltan...</p>
            <div className="reloj-numeros">
              {etiquetas.map((etiqueta, i) => (
                <Fragment key={etiqueta}>
                  {i > 0 && (
                    <p className="num_cuenta" aria-hidden>
                      :
                    </p>
                  )}
                  <div className="bloque">
                    <p className="num_cuenta">
                      {partes[i] === null ? "--" : dosDigitos(partes[i])}
                    </p>
                    <p className="text_cuenta">{etiqueta}</p>
                  </div>
                </Fragment>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
