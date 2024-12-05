import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import Header from "./_components/header";
import Footer from "./_components/footer";
import ButtonWtpp from "./_components/button-wtpp";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fature 100k mensal no digital",
  description:
    "Se você ainda não tem um produto digital que vende 24 horas por dia, está deixando dinheiro na mesa! Você não precisa de mais um curso, mas de orientação prática. A mentoria oferece implementação prática, gestão de tráfego e acompanhamento individual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.className}`}>
        <Header />
        <main>
          {children}
          <ButtonWtpp />
        </main>
        <Footer />
      </body>
    </html>
  );
}
