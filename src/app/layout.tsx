import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PruGlobo | Nosotros",
  description: "Distribuidora de juego inflables",
  icons: {
    icon: "/peru-globo-logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning >
        <Header />
        <main className="pt-[92px] ">
        {children}
        </main>
      </body>
    </html>
  );
}
