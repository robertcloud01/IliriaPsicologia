import type { Metadata } from "next";
import { Libre_Baskerville, Manrope } from "next/font/google"; // Alternatives for Ppeiko and Ppneuemontreal
import "./globals.css";

const serifFont = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const sansFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ilíria Psicologia | Clínica de Psicologia em São Paulo",
  description: "Psicologia para mudanças significativas. Atendimento presencial e online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serifFont.variable} ${sansFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
