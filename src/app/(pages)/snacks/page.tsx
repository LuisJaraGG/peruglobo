'use client'
import { ContactoFooter } from "@/app/_components/contactoFooter"
import { NuestrosProductos } from "@/app/_components/nuestrosProductos"
import { useTitle } from "@/app/hooks/changeTittle"
import Image from "next/image"
import { ListSnacks } from "./_components/listSnacks"

export default function Snack() {
  useTitle("PruGlobo - Snack")
  return (
    <main className="overflow-hidden">
        {/* Seccion del fondo */}
        <div className=" h-screen relative">
          <Image width={996} height={664}  src="/bg/snack.jpeg" alt="background de nosotros" className="h-screen w-full  object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#888888] bg-opacity-45"></div>
          <div className="absolute max-w-[400px]   bottom-0  max-[600px]:left-0
          max-[600px]:right-0 max-[600px]:mx-auto max-[600px]:top-0 py-auto flex
            items-center justify-center min-[600px]:bottom-16  xs:right-16
            px-5 md:p-0">
          <Image width={1946} height={1122}  src="/text/snacks.png" alt="texto de seccion nosotro" className=" object-scale-down"></Image>
        </div>

        </div>

        

        {/* Seccion 2 */}
        <section id="#productos" className="py-28 relative" >
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center " style={{ backgroundImage: 'url("/patron2.png")' }}></div>
          <div className="relative max-w-[900px] mx-auto flex flex-col gap-16 z-10 px-5 md:p-0">
            <div className="flex flex-col justify-center items-center gap-5 md:gap-0 mb-5">
              <Image width={1600} height={1600}  src="/popcorn.jpeg" alt="texto de seccion nosotro" className="max-w-[300px] md:m-0"></Image>
              <div className=" flex gap-5 flex-col justify-center items-center text-center">
                <h2 className=" shabby-patty text-[#FE9CDB] text-7xl text-shadow">Snacks</h2>
                <hr className="border-2 border-[#FE9CDB] w-2/3" />
                <p className="text-xl">Complementos para su evento, carritos de snack, pop corn, algodón dulce, 
                queso helado y manzanas acarameladas</p>
              </div>
            </div>
            <ListSnacks />

          </div>
        </section>
        {/* Ultimas Secciones */}
        <NuestrosProductos />
        <ContactoFooter />
    </main>
  )
}

