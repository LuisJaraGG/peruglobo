'use client';
import { useTitle } from "@/app/hooks/changeTittle";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import { imagesInicioProductos } from "@/app/data/images";
import { ContactoFooter } from "@/app/_components/contactoFooter";
import { ProductList } from "./_components/productList";
import { NuestrosProductos } from "@/app/_components/nuestrosProductos";
import SuspenseWrapper from "./_components/suspenseWrapper";

export default function Alquiler() {
  const [sort, setSort] = useState('todos');
  const [actualPath, setactualPath] = useState('');



  useTitle("PeruGlobo - Alquiler");

  const renderImage = (sort: string) => {
    if (sort === 'todos') {
      return <></>;
    }
    const selectedProduct = imagesInicioProductos.find(product => product.type === sort);
    if (!selectedProduct) {
      return <></>;
    }
    return (
      <Image
        width={1959}
        height={1059}
        src={selectedProduct.image}
        alt={`Juego ${selectedProduct.type}`}
        className="object-scale-down max-w-[300px] mx-auto mb-3"
      />
    );
  };

  const renderText = (sort: string) => {
    const selectedProduct = imagesInicioProductos.find(product => product.type === sort);
    if (!selectedProduct) {
      return (
        <>
          <h1 className="shabby-patty text-7xl text-[#88E2FE]">ALQUILER</h1>
          <hr className="border-2 border-[#88E2FE]" />
        </>
      );
    }
    return (
      <>
        <h1 className="shabby-patty text-7xl" style={{ color: selectedProduct.color }}>{selectedProduct.title}</h1>
        <hr className="border-2" style={{ borderColor: selectedProduct.color }} />
      </>
    );
  };

  return (
    <main className="overflow-hidden">
      <Suspense fallback={<div>Cargando...</div>}>
        <SuspenseWrapper setSort={setSort} setactualPath={setactualPath} />
        {/* Seccion del fondo */}
        <div className="h-screen relative">
          <Image width={913} height={571} src="/bg/alquiler.jpg" alt="background de nosotros" className="h-screen w-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#888888] bg-opacity-45"></div>
          <div className="text-center absolute max-w-[500px] bottom-0 max-[600px]:left-0 max-[600px]:right-0 max-[600px]:mx-auto max-[600px]:top-0 py-auto flex items-center justify-center min-[600px]:bottom-16 xs:left-16 px-5 md:p-0">
            <div className="flex flex-col gap-5">
              <Image width={1946} height={1122} src="/text/nuestrosJuegos.png" alt="texto de Nuestros Juegos" className="object-scale-down"></Image>
              <Link href={actualPath}>
                <p className="text-4xl min-[600px]:text-5xl text-white bg-[#88E2FE] p-2 rounded-lg">¡QUIERO ALQUILAR!</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Seccion 2 de los productos */}
        <section id="productos" className="relative py-28">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("/patron4.png")' }}></div>
          <div className="relative z-20 max-w-[900px] mx-auto px-5 ">
            {renderImage(sort)}
            <div className="text-center">
              {renderText(sort)}
              <h3 className="text-xl mt-6 mb-10">Alquiler de juegos inflables, mecánicos, acuáticos, camas saltarinas, etc</h3>
              <ProductList sort={sort} />
            </div>
          </div>
        </section>

        {/* Seccion 3 */}
        <NuestrosProductos />

        {/* Seccion 4 */}
        <ContactoFooter />
      </Suspense>

    </main>
  );
}
