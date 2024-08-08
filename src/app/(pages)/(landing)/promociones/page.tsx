'use client'
import { ContactoFooter } from "@/app/_components/contactoFooter"
import { useTitle } from "@/app/hooks/changeTittle"
import Image from "next/image"

export default function Promociones() {
  useTitle("PruGlobo - Promociones")
  return (
    <main className="overflow-hidden">
        {/* Seccion del fondo */}
        <div className=" h-screen relative">
          <Image width={626} height={417}  src="/bg/promociones.jpeg" alt="background de Promociones" className="h-screen w-full  object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#888888] bg-opacity-45"></div>
          <div className="text-center absolute max-w-[500px] bottom-0 max-[600px]:left-0 max-[600px]:right-0 max-[600px]:mx-auto max-[600px]:top-0 py-auto flex items-center justify-center min-[600px]:bottom-16 left-16 px-5 md:p-0">
              <Image width={2575} height={473} src="/text/promociones.png" alt="texto Promociones" className="object-cover "></Image>
          </div>

        </div>
        <Image width={1792} height={1024} src={"/promociones2.png"} alt="patron" className="w-full h-screen object-cover"></Image>

        

        {/* Ultimas Secciones */}
        <ContactoFooter />
    </main>
  )
}

