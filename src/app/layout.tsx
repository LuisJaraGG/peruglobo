import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PruGlobo",
  description: "Distribuidora de juego inflables",
  icons: {
    icon: "peru-globo-logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon/png" href="/peru-globo-logo.png" />
      </head>
      <body className={inter.className} suppressHydrationWarning >
        <Header />
        <main >
        {children}
        </main>
      </body>
    </html>
  );
}
