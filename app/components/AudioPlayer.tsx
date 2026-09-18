"use client";

import { useRef, useState } from "react";
import { IconoPausa, IconoPlay } from "./Iconos";

/**
 * Botón flotante de música de fondo.
 * Los navegadores bloquean el autoplay con sonido: siempre arranca en pausa.
 */
export default function AudioPlayer({ archivo }: { archivo: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [sonando, setSonando] = useState(false);

  const alternar = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (sonando) {
      audio.pause();
      setSonando(false);
      return;
    }

    try {
      await audio.play();
      setSonando(true);
    } catch {
      // El navegador bloqueó la reproducción o falta el archivo de audio.
      setSonando(false);
    }
  };

  return (
    <section className="audio">
      <audio ref={audioRef} loop preload="none">
        <source src={archivo} type="audio/mpeg" />
      </audio>
      <button
        type="button"
        onClick={alternar}
        className={`botonAudio ${sonando ? "pulse" : "vertical_shake"}`}
        aria-label={sonando ? "Pausar música" : "Reproducir música"}
      >
        {sonando ? <IconoPausa /> : <IconoPlay />}
      </button>
    </section>
  );
}
