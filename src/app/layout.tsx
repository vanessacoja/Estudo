import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "./fonts/fonts";
import Footer from "./components/footer";
import Header from "./components/header"; // Importação do Header corrigida

export const metadata: Metadata = {
  title: "Create Next",
  description: "Rede social para cachorros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <Header /> {/* O Header agora está dentro da <body> */}
        {children} {/* O conteúdo dinâmico da página será renderizado corretamente */}
        <Footer /> {/* O Footer agora também está dentro da <body> */}
      </body>
    </html>
  );
}
