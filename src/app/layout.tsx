import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Aike Labs — Desarrollo Web y Software en la Región de Aysén",
  description:
    "Desarrollo web, aplicaciones, e-commerce y automatización con IA en Coyhaique y la Región de Aysén. Soluciones digitales para negocios de la Patagonia. Cuéntanos tu idea o qué proceso quieres automatizar.",
  keywords: [
    "desarrollo web aysén",
    "páginas web coyhaique",
    "desarrollo software patagonia",
    "aplicaciones web región de aysén",
    "e-commerce coyhaique",
    "automatización IA aysén",
    "diseño web patagonia chile",
    "aike labs",
    "desarrollo digital coyhaique",
    "tienda online aysén",
  ],
  openGraph: {
    title: "Aike Labs — Desarrollo Web y Software en la Región de Aysén",
    description:
      "¿Tienes una idea, un proceso que automatizar o un dolor en tu negocio? Te ayudamos con desarrollo web, apps y soluciones con IA desde Coyhaique, Región de Aysén.",
    url: "https://aikelabs.cl",
    siteName: "Aike Labs",
    locale: "es_CL",
    type: "website",
  },
  other: {
    "geo.region": "CL-AI",
    "geo.placename": "Coyhaique, Región de Aysén",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
