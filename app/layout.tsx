import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Machine Producciones Audiovisuales",
  description: "Transmisiones en vivo, marcadores en tiempo real y producción técnica de eventos deportivos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className="bg-zinc-950 text-zinc-100 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}