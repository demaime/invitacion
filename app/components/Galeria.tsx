"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";

export default function Galeria({ fotos }: { fotos: readonly string[] }) {
  const [abierta, setAbierta] = useState<number | null>(null);

  const cerrar = useCallback(() => setAbierta(null), []);

  const mover = useCallback(
    (paso: number) =>
      setAbierta((i) => (i === null ? null : (i + paso + fotos.length) % fotos.length)),
    [fotos.length]
  );

  useEffect(() => {
    if (abierta === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };

    document.addEventListener("keydown", onKey);
    // Evita que el fondo scrollee mientras el visor está abierto
    const overflowPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflowPrevio;
    };
  }, [abierta, cerrar, mover]);

  return (
    <section className="galeria">
      <div className="container">
        <div className="grid-galeria">
          {fotos.map((foto, i) => (
            <Reveal key={foto} delay={i * 120} className="item-galeria">
              <button
                type="button"
                onClick={() => setAbierta(i)}
                aria-label={`Ampliar foto ${i + 1}`}
              >
                <Image
                  src={foto}
                  alt=""
                  width={800}
                  height={800}
                  sizes="(max-width: 760px) 50vw, 25vw"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {abierta !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={cerrar}
        >
          <button
            type="button"
            className="lightbox-cerrar"
            onClick={cerrar}
            aria-label="Cerrar"
          >
            ✕
          </button>

          {fotos.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav prev"
                aria-label="Foto anterior"
                onClick={(e) => {
                  e.stopPropagation();
                  mover(-1);
                }}
              >
                ‹
              </button>
              <button
                type="button"
                className="lightbox-nav next"
                aria-label="Foto siguiente"
                onClick={(e) => {
                  e.stopPropagation();
                  mover(1);
                }}
              >
                ›
              </button>
            </>
          )}

          <Image
            src={fotos[abierta]}
            alt=""
            width={1400}
            height={1400}
            sizes="90vw"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
