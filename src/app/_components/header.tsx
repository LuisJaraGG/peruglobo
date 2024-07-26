'use client'
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import { Leaft } from "./leaft";
import { headContets } from "../data/head";
import * as Icons from "lucide-react"; // Importamos todos los íconos como un objeto
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [openSub, setOpenSub] = useState<number | null>(null);
    const closeTimeout = useRef<NodeJS.Timeout | null>(null);
    const pathname = usePathname();

    const handleClick = () => {
        setOpen(!open);
    };

    const handleMouseEnter = (index: number) => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
        }
        setOpenSub(index);
    };

    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            setOpenSub(null);
        }, 300);
    };

    const isActive = (path: string, currentPath: string) => {
        return currentPath === path ? 'border-b' : ' hover:border-b';
      };

    return (
        <div className="fixed w-full" style={{ zIndex: 999 }}>
            <div className="p-1 px-6 bg-gradient-to-r from-[#FFCCED] to-[#FE9CDB]  shadow-lg bg-opacity-85 backdrop-blur-sm flex justify-between items-center">
                <Link href={"/"}
                onClick={() => setOpen(false)}

                >
                    <Image src="/peru-globo-logo.png" alt="logo-peru-globo" width={136} height={76}  className="w-[110px] h-[85px] py-2" />
                </Link>
                <div className="hidden md:flex">
                    {headContets.map((item, index) => {
                        // @ts-ignore
                        const IconComponent = Icons[item.icon]; // Obtener el componente de ícono dinámicamente
                        return (
                            <div
                                key={index}
                                className={`text-sm cursor-pointer flex space-x-5 h-[65px]  items-center px-5 transition-all duration-500 flex-col text-white ${isActive(item.url, pathname)}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link href={item.url} className="flex flex-col justify-center items-center text-center my-auto">
                                <IconComponent size={20} className="my-auto" />
                                <p className="">{item.title}</p>
                                </Link>
                                <ul
                                    className={`fixed mt-[69px] rounded-b-lg bg-[#FE9CDB] bg-opacity-95 backdrop-blur-sm ${openSub === index ? "block" : "hidden"}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {item.suburls?.map((subitem, subIndex) => (
                                        <li key={subIndex}>
                                            <Link href={subitem.url} className={`px-2 hover:bg-white ${subitem.title === 'Otros' ? 'rounded-b-lg' : ''} hover:text-[#FE9CDB] text-sm cursor-pointer flex space-x-3 min-h-8 items-center justify-center transition-all duration-200 flex-col text-white`}>
                                            {subitem.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div className="relative w-[50px] h-[35px] md:hidden">
                    <Menu
                        className={`absolute top-0 text-white font-bold cursor-pointer icon-transition ${open ? "icon-hidden" : "icon-visible"}`}
                        size={38}
                        onClick={handleClick}
                    />
                    <X
                        className={`absolute top-0 text-white font-bold cursor-pointer icon-transition ${open ? "icon-visible" : "icon-hidden"}`}
                        size={38}
                        onClick={handleClick}
                    />
                </div>
            </div>
            <Leaft isOpen={open} setOpen={setOpen} />
        </div>
    );
};
