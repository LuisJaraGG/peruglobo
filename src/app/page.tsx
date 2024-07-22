"use client";
// import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { indexImages } from "./data/images";
import Carousel from "./_components/carousel";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  
  // useEffect(() => {
  //   router.push("/nosotros");
  // }, [router]);
  
  return (
    <main >
      <div className="w-screen h-screen">
      <Image width={1792} height={1024}  src="/inicio.png" alt="banner" className="h-screen w-full object-cover" />

      </div>
      <div className="w-screen h-screen bg-gradient-to-r from-[#97DFE6] to-[#2EDEF9]">
      <div className="relative w-screen h-screen">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url("/patron1.png")', opacity: 0.5 }}
            ></div>
            <div className="relative z-10 text-center px-3 max-w-[900px] mx-auto">
                <p className="shabby-patty text-white text-5xl  md:text-7xl pt-28 underline-custom">Nuestros productos</p>
                <div className="mt-14">
                  <Carousel images={indexImages} />
                </div>
                <div className="flex gap-10 items-center justify-center mt-5">
                  <button className="p-2 bg-[#FE9CDB] text-white rounded-md text-lg">
                    <Link href="/alquiler" >Alquiler</Link>
                  </button>
                  <button className="p-2 bg-[#FE9CDB] text-white rounded-md text-lg">
                  <Link href="/ventas" >Venta</Link>
                  </button>

                </div>
            </div>
        </div>
      </div>
      {/* <div className=" min-h-screen py-40 " style={{backgroundImage: 'url("/patron1.png")', backgroundSize: "cover"}}>
      <p className="text-center font-bold text-6xl text-[#62C7F1] mb-12">Ultimos eventos</p>
      <div className=" flex flex-wrap max-w-[1200px] gap-3 justify-center items-center mx-auto">
        <img src="/evento1.jpeg" alt="" className="w-[300px] h-[300px] object-cover rounded-md" />
        <img src="/evento2.jpeg" alt="" className="w-[300px] h-[300px] object-cover rounded-md" />
        <img src="/evento3.jpeg" alt="" className="w-[300px] h-[300px] object-cover rounded-md" />
        <img src="/evento4.jpeg" alt="" className="w-[300px] h-[300px] object-cover rounded-md" />
      </div>
      </div> */}

    </main>
  );
}
