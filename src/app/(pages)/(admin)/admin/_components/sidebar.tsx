'use client'
import { LogOutIcon } from 'lucide-react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { AlignLeft } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const logoput = () => {
    Cookies.remove('token');
    window.location.reload();
  };

  return (
    <>
      <div className="bg-slate-700 flex justify-between md:justify-end items-center h-[50px] px-10 shadow-sm border-b border-slate-800">
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger>
              <AlignLeft className="w-6 h-6 text-white cursor-pointer" />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle className='text-left'>Administracion</SheetTitle>
                <SheetDescription className='text-left'>
                  <ul className='flex flex-col gap-3'>
                    <li>
                      <Link href="/admin/dashboard">
                        {`> `}Inicio
                      </Link>
                    </li>
                    <li>
                      <Link href="/admin/productos">
                        {`> `}Productos
                      </Link>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <LogOutIcon className="w-6 h-6 text-white cursor-pointer" onClick={logoput} />
      </div>
      <aside className="w-[250px] fixed left-0 top-13 right-0 overflow-hidden z-10">
        <div className="bg-slate-700 h-screen text-white pl-5 pt-3 md:block hidden">
          <h1 className='text-2xl font-bold mb-4'>Administracion</h1>
          <ul className='flex flex-col gap-3'>
            <li>
              <Link href="/admin/dashboard">
                {`> `}Inicio
              </Link>
            </li>
            <li>
              <Link href="/admin/productos">
                {`> `}Productos
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
