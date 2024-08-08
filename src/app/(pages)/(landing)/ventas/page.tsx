'use client'
import { useTitle } from "@/app/hooks/changeTittle"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { ProductList } from "../alquiler/_components/productList";
import { ContactoFooter } from "@/app/_components/contactoFooter";


export default function Ventas() {
  const pathname = usePathname();

  const getActualPath = () => {
    const queryString = URLSearchParams;
    const fullPath = queryString ? `${pathname}?${queryString}` : pathname;
    return `${pathname}#productos`;
  };
  
  useTitle("PruGlobo - Ventas")
  return (
    <main className="overflow-hidden">
          {/* Seccion del fondo */}
          <div className="h-screen relative">
            <Image width={913} height={571} src="/bg/alquiler.jpg" alt="background de nosotros" className="h-screen w-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#888888] bg-opacity-45"></div>
            <div className="text-center absolute max-w-[500px] bottom-0 max-[600px]:left-0 max-[600px]:right-0 max-[600px]:mx-auto max-[600px]:top-0 py-auto flex items-center justify-center min-[600px]:bottom-16 left-16 px-5 md:p-0">
              <div className="flex flex-col gap-5">
                <Image width={1946} height={1122} src="/text/nuestrosJuegos.png" alt="texto de Nuestros Juegos" className="object-scale-down"></Image>
                <Link href={getActualPath()}>
                  <p className="text-4xl min-[600px]:text-5xl text-white bg-[#88E2FE] p-2 rounded-lg">¡QUIERO COMPRAR!</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Listado */}
          <section id="productos" className="relative py-28">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("/patron4.png")' }}></div>
          <div className="relative z-20 max-w-[900px] mx-auto px-5 ">
            <div className="text-center">
              <h1 className="shabby-patty text-7xl text-[#88E2FE]">Venta de Juegos</h1>
              <hr className="border-2 border-[#88E2FE]" />
              <h3 className="text-xl mt-6 mb-10">Venta de juegos inflables, mecánicos, acuáticos, camas saltarinas, etc</h3>
              <ProductList sort={'todos'} />
            </div>
          </div>
          </section>

          {/* Footer */}
          <ContactoFooter />


    </main>
  )
}

