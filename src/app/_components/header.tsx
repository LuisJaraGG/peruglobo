'use client'
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Leaft } from "./leaft";
import { headContets } from "../data/head";
import * as Icons from "lucide-react"; // Importamos todos los íconos como un objeto



export const Header = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className="fixed w-full">
            <div className="p-4 px-6 bg-white bg-opacity-95 backdrop-blur-sm  flex justify-between items-center border ">
                <Image src="/peru-globo-logo.png" alt="logo-peru-globo" width={1024} height={1024} className="w-[60px] h-[60px] " />
                <div className="hidden md:flex">
                    {headContets.map((item, index) => {
                        // @ts-ignore
                        const IconComponent = Icons[item.icon]; // Obtener el componente de ícono dinámicamente
                        return (
                            <div
                                key={index}
                                className="text-sm cursor-pointer flex space-x-3 min-h-12 hover:text-blue-500 items-center px-3 transition-all duration-200 flex-col text-[#62C7F1]"
                            >
                                <IconComponent size={20} className="my-auto" />
                                <p className="ml-3">{item.title}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="relative w-[50px] h-[35px] md:hidden">
                    <Menu
                        className={`absolute top-0  text-[#62C7F1] font-bold cursor-pointer icon-transition ${open ? "icon-hidden" : "icon-visible"}`}
                        size={38}
                        onClick={handleClick}
                    />
                    <X
                        className={`absolute top-0 text-[#62C7F1] font-bold cursor-pointer icon-transition ${open ? "icon-visible" : "icon-hidden"}`}
                        size={38}
                        onClick={handleClick}
                    />
                </div>
            </div>
            <Leaft isOpen={open} />
        </div>
    );
};
