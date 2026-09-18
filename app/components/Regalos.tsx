"use client";

import { useEffect, useState } from "react";
import { IconoRegalo } from "./Iconos";
import Reveal from "./Reveal";

type RegalosProps = {
  texto: string;
  textoBoton: string;
  datosBancarios: {
    titular: string;
    cbu: string;
    alias: string;
    dni: string;
    banco: string;
  };
  buzon: string;
};

export default function Regalos({
  texto,
  textoBoton,
  datosBancarios,
  buzon,
}: RegalosProps) {
  const [abierto, setAbierto] = useState(false);
  const [copiado, setCopiado] = useState<string | null>(null);

  useEffect(() => {
    if (!abierto) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [abierto]);

  const copiar = async (valor: string, etiqueta: string) => {
    try {
      await navigator.clipboard.writeText(valor);
      setCopiado(etiqueta);
      setTimeout(() => setCopiado(null), 2000);
    } catch {
      // Sin permiso de portapapeles: el dato igual está a la vista.
    }
  };

  return (
    <section className="cbu">
      <div className="container">
        <Reveal variant="fade">
          <IconoRegalo className="bounce-in" />
        </Reveal>

        <Reveal>
          {texto.split("\n").map((linea) => (
            <p key={linea}>{linea}</p>
          ))}
          <button
            type="button"
            className="btn btn-alt"
            onClick={() => setAbierto(true)}
          >
            {textoBoton}
          </button>
        </Reveal>
      </div>

      {abierto && (
        <div
          className="modal-cbu"
          role="dialog"
          aria-modal="true"
          aria-label="Datos para el regalo"
          onClick={() => setAbierto(false)}
        >
          <div className="caja" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-cerrar"
              onClick={() => setAbierto(false)}
              aria-label="Cerrar"
            >
              ✕
            </button>

            <span className="title">Datos bancarios</span>
            <ul>
              <li>Titular: {datosBancarios.titular}</li>
              <li>
                CBU:{" "}
                <button
                  type="button"
                  className="copiar"
                  onClick={() => copiar(datosBancarios.cbu, "cbu")}
                >
                  {datosBancarios.cbu}
                </button>
                {copiado === "cbu" && " ¡copiado!"}
              </li>
              <li>
                Alias:{" "}
                <button
                  type="button"
                  className="copiar"
                  onClick={() => copiar(datosBancarios.alias, "alias")}
                >
                  {datosBancarios.alias}
                </button>
                {copiado === "alias" && " ¡copiado!"}
              </li>
              <li>DNI: {datosBancarios.dni}</li>
              <li>{datosBancarios.banco}</li>
            </ul>

            <span className="title">Buzón de regalos</span>
            <ul>
              <li>{buzon}</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
