"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** "up" = fadeInUp (por defecto), "fade" = sólo opacidad, como los iconos del original */
  variant?: "up" | "fade";
  /** Retraso en ms, para escalonar la galería */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Revela su contenido cuando entra en el viewport.
 * Reemplaza el listener de scroll del template original por un IntersectionObserver.
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass = variant === "fade" ? "reveal-fade" : "reveal";
  const delayStyle =
    delay > 0
      ? { animationDelay: `${delay}ms`, transitionDelay: `${delay}ms` }
      : undefined;

  return (
    <Tag
      ref={ref}
      style={delayStyle}
      className={`${baseClass}${visible ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </Tag>
  );
}
