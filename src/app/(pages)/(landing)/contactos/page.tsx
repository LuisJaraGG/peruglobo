
'use client'
import { ContactoFooter } from "@/app/_components/contactoFooter"
import { useTitle } from "@/app/hooks/changeTittle"
import Image from "next/image"

export default function Contactos() {
  useTitle("PruGlobo - Contactos")
  return (
    <main className="overflow-hidden">
          {/* Seccion del fondo */}
          <div className=" h-screen relative">
            <Image width={626} height={417}  src="/bg/contactanos.jpeg" alt="background de Promociones" className="h-screen w-full  object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#888888] bg-opacity-45"></div>
            <div className="text-center absolute max-w-[500px] bottom-0 max-[600px]:left-0 max-[600px]:right-0 max-[600px]:mx-auto max-[600px]:top-0 py-auto flex items-center justify-center min-[600px]:bottom-16 left-16 px-5 md:p-0">
            <Image width={2290} height={430} src="/text/contacto.png" alt="texto Promociones" ></Image>
          </div>
        </div>

        
        {/* Seccion de contactos */}
        {/* <div className=" bg-gradient-to-r from-[#97DFE6] to-[#2EDEF9] ">
          <div className="relative w-screen min-h-screen py-28">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/patron1.png")', opacity: 0.5 }}
                ></div>
                <div className="relative z-10 text-center px-3 max-w-[900px] mx-auto ">
                    <p className="shabby-patty text-white text-5xl  md:text-7xl  underline-custom">Formulario</p>
                </div>
            </div>
        </div> */}
              {/* Seccion 4 */}
      <ContactoFooter/>
    </main>
  )
}

