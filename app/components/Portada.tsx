"use client";

type PortadaProps = {
  ella: string;
  el: string;
  fecha: string;
  imagen: string;
};

export default function Portada({ ella, el, fecha, imagen }: PortadaProps) {
  const bajar = () => {
    document
      .getElementById("cuenta-regresiva")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="portada parallax"
      style={{ backgroundImage: `url(${imagen})` }}
    >
      <div className="logo-portada fade-in-portada">
        <h1 className="nombres">
          <span>{ella}</span>
          <span className="amp" aria-hidden>
            &amp;
          </span>
          <span>{el}</span>
        </h1>
        <span className="separador" aria-hidden />
        <p className="fecha-portada">{fecha}</p>
      </div>

      <button
        type="button"
        className="scroll-down"
        onClick={bajar}
        aria-label="Ver la invitación"
      />
    </section>
  );
}
