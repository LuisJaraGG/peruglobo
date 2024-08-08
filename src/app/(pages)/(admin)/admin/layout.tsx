'use client'
import { Inter } from "next/font/google";
import Sidebar from "./_components/sidebar";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from 'react-hot-toast';
export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <main suppressHydrationWarning className="bg-slate-800 min-h-screen">
        <Sidebar children={children} />
        </main>
      </>
    );
  }
  