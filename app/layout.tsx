import type { Metadata, Viewport } from "next";
import { Great_Vibes, Montserrat } from "next/font/google";
import { invitacion } from "./lib/invitacion";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "900"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const { ella, el } = invitacion.novios;

export const metadata: Metadata = {
  title: `${ella} & ${el} — Nuestra boda`,
  description: `Te invitamos a celebrar nuestro casamiento. ${invitacion.fechaPortada}.`,
  openGraph: {
    title: `${ella} & ${el} — Nuestra boda`,
    description: `Te invitamos a celebrar nuestro casamiento. ${invitacion.fechaPortada}.`,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#e5c6c6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${greatVibes.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
