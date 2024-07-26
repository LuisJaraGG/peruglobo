

import Link from "next/link";
import { indexImages } from "../data/images";
import Carousel from "./carousel";
export function NuestrosProductos() {
    return (
        <div className="w-screen  bg-gradient-to-r from-[#97DFE6] to-[#2EDEF9] ">
        <div className="relative w-screen h-full py-28">
              <div
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: 'url("/patron1.png")', opacity: 0.5 }}
              ></div>
              <div className="relative z-10 text-center px-3 max-w-[900px] mx-auto ">
                  <p className="shabby-patty text-white text-5xl  md:text-7xl  underline-custom">Nuestros productos</p>
                  <div className="mt-14">
                    <Carousel images={indexImages} linkeable={true} />
                  </div>
                  <div className="flex gap-10 items-center justify-center mt-5">
                    <button className="p-2 bg-[#FE9CDB] text-white rounded-md text-lg">
                      <Link href="/alquiler#productos" >Alquiler</Link>
                    </button>
                    <button className="p-2 bg-[#FE9CDB] text-white rounded-md text-lg">
                    <Link href="/ventas" >Venta</Link>
                    </button>
  
                  </div>
              </div>
          </div>
        </div>
    )
}