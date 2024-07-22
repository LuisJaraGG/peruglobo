'use client'
import { useEffect, useState } from "react";
import { headContets } from "../data/head";
import * as Icons from "lucide-react"; // Importamos todos los íconos como un objeto
import { usePathname } from "next/navigation";

export const Leaft = ({ isOpen }: any) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [rotations, setRotations] = useState<{ [key: string]: boolean }>({});
  const pathname = usePathname(); 

  useEffect(() => {
    let timeoutId: any;
    if (isOpen) {
      setIsVisible(true);
    } else {
      timeoutId = setTimeout(() => setIsVisible(false), 300); // 300ms para que coincida con la duración de la animación
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  const isActive = (path: string, currentPath: string) => {
    return currentPath === path ? 'isActive' : ' hover:bg-[#FE9CDB] hover:text-white';
  };

  const handleIconClick = (index: any) => {
    setRotations((prev: { [key: string]: boolean }) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    isVisible && (
      <main className={`md:hidden bg-black bg-opacity-30 backdrop-blur-sm  transition-all duration-200 ${isOpen ? "fade-in" : "fade-out"}`}>
        <div
          className={`bg-white backdrop-blur-sm w-[70%] ml-auto h-screen text-[#FE9CDB] border shadow ${
            isOpen ? "slide-in-right block" : "slide-out-right"
          }`}
        >
          <ul className="">
            {headContets.map((item, index) => {
            // @ts-ignore
              const IconComponent = Icons[item.icon]; // Obtener el componente de ícono dinámicamente
              return (
                <li key={index} >
                  {item.suburls ? (
                    <>
                      <div
                        className={`text-lg cursor-pointer flex space-x-3 min-h-12 hover:pl-6 items-center px-4 transition-all duration-200  ${isActive(item.url, pathname)}`}
                        onClick={() => handleIconClick(index)}
                      >

                        <Icons.ChevronDown
                          size={20}
                          className={`my-auto ${
                            rotations[index] ? "rotate-down" : "rotate-up"
                          }`}
                        />
                        <p className=" ml-3">
                          {item.title}
                        </p>
                      </div>
                      <ul
                        className={`cursor-pointer sublinks ${
                          rotations[index] ? "sublinks-open" : ""
                        }`}
                      >
                        {item.suburls.map((suburl, subIndex) => (
                          <li key={subIndex} className={`pl-8 h-[34px] flex items-center ${isActive(suburl.url, pathname)}`}>
                            <Icons.ChevronRight size={15} />
                            <a
                              className="hover:ml-2 transition-all duration-200 "
                              href={suburl.url}
                            >
                              {suburl.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <div
                      className={`text-lg cursor-pointer flex justify-between min-h-12 items-center px-4  ${isActive(item.url, pathname)}`}
                    >
                      <a
                        href={item.url}
                        className="hover:ml-2  flex transition-all duration-200  "
                      >
                        {IconComponent && (
                        <IconComponent size={20} className="my-auto " />
                        )}
                        <p className="ml-3">
                        {item.title}                       
                        </p>

                      </a>

                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    )
  );
};
