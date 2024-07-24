"use client";
// import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { indexImages,eventsImages } from "./data/images";
import Carousel from "./_components/carousel";

import Image from "next/image";
import Link from "next/link";
import { NuestrosProductos } from "./_components/nuestrosProductos";
import { ContactoFooter } from "./_components/contactoFooter";

export default function Home() {
  const router = useRouter();
  
  // useEffect(() => {
  //   router.push("/nosotros");
  // }, [router]);
  
  return (
    <main className="overflow-y-hidden" >
      <div className=" h-screen">
      <Image width={1792} height={1024}  src="/inicio.png" alt="banner" className="h-screen w-full object-cover" />
      </div>

      {/* Segunda seccion */}
        <NuestrosProductos />


      {/* Tercera Seccion */}
      <div className=" text-center w-full"style={{ backgroundImage: 'url("/patron2.png")',}}>
        <div className="py-28 px-3 max-w-[1200px] mx-auto">
              <p className="shabby-patty text-[#2EDEF9] text-5xl  md:text-7xl  underline-custom-blue">Nuestros Últimos Eventos</p>
              <div className="mt-14 h">
                  <Carousel arrowsColor="#88E2FE" paginationColor="#88E2FE" spaceBetween={10} images={eventsImages} linkeable={false} imageStyle=" object-cover rounded-xl shadow w-[80%] h-[300px] hover:w-[100%] hover:h-[100%] transition-all duration-300 " />
                  <div className="flex gap-10 items-center justify-center mt-5">
                      <button className="p-2 bg-[#FFCC00] text-white rounded-md text-lg">
                        <Link href="/alquiler" >Alquiler</Link>
                      </button>
                      <button className="p-2 bg-[#FFCC00] text-white rounded-md text-lg">
                      <Link href="/ventas" >Venta</Link>
                      </button>

                    </div>
              </div>

        </div>
      </div>

      {/* Cuarta Seccion */}
      <ContactoFooter/>



    </main>
  );
}
