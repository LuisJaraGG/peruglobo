'use client'
import { useTitle } from "@/app/hooks/changeTittle"
import Image from "next/image"
import { NuestrosProductos } from "@/app/_components/nuestrosProductos"
import { ContactoFooter } from "@/app/_components/contactoFooter"

export default function Nosotros() {
    useTitle("PruGlobo - Nosotros")
  return (
    <main className="overflow-hidden">
      {/* Seccion del fondo */}
      <div className=" h-screen relative">
        <Image width={913} height={571}  src="/bg/nosotros.jpg" alt="background de nosotros" className="h-screen w-full  object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-[#888888] bg-opacity-45"></div>
        <div className="absolute max-w-[400px] bottom-0  max-[600px]:left-0  max-[600px]:right-0 max-[600px]:mx-auto max-[600px]:top-0 py-auto flex  items-center justify-center min-[600px]:bottom-16  min-[600px]:right-10 px-5 md:p-0">
        <Image width={1946} height={1122}  src="/text/quienesSomos.png" alt="texto de seccion nosotro" className=" object-scale-down"></Image>
        </div>

      </div>

      {/* Seccion 2 */}
      <div className="py-28 " style={{ backgroundImage: 'url("/patron3.png")', backgroundSize: 'cover' }}>
        <div className="max-w-[900px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-0  ">
            <Image width={7000} height={7000}  src="/child1.png" alt="texto de seccion nosotro" className="w-1/2 -mt-28 md:m-0"></Image>
            <div className="w-1/2 flex gap-5 flex-col justify-center items-center text-center">
              <h2 className=" shabby-patty text-[#FCC73F] text-7xl text-shadow">PeruGlobo</h2>
              <p className="text-lg">PerúGlobo es una empresa con 25 años en el rubro de entretenimiento infantil. Trabajamos para compañías mineras, instituciones financieras, colegios y las empresas más importantes en la ciudad de Arequipa</p>
              <Image src="/peru-globo-logo.png" alt="logo-peru-globo" width={136} height={76}  className="w-[150px] h-[135px] py-2 mx-auto" />
            </div>
          </div>
          <div className="flex flex-col  justify-center items-center gap-5">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center gap-10 px-5">
              <div className=" w-1/2">
                  <Image width={512} height={512}  src="/mision.png" alt="logo mision" className="w-[80px] mx-auto"></Image>
                  <h2 className=" shabby-patty text-[#FCC73F] text-7xl text-shadow">Mision</h2>
                  <p className="text-lg">Llevar entretenimiento a los niños buscando que desarrollen habilidades motrices, sociales e intelectuales mediante los juegos tomando como prioridad la seguridad.</p>
              </div>
              <div className=" w-1/2">
              <Image width={512} height={512}  src="/vision.png" alt="logo mision" className="w-[80px] mx-auto"></Image>

                  <h2 className=" shabby-patty text-[#FCC73F] text-7xl text-shadow">Vision</h2>
                  <p className="text-lg">Ser empresa líder a nivel nacional en implementación, desarrollo e innovación en atracciones para niños.</p>
              </div>

            </div>
            <Image src="/peru-globo-logo.png" alt="logo vision" width={136} height={76}  className="w-[150px] h-[135px] py-2 mx-auto" />
          </div>
        </div>
        <div>

        </div>
      </div>

      {/* Seccion3 */}
      <NuestrosProductos/>

      {/* Seccion 4 */}
      <ContactoFooter/>
    </main>
  )
}

