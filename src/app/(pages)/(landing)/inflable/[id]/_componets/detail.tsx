'use client'
import { ImageDetail } from "@/app/interfaces/imagesDetail"
import { tiposColores } from "@/app/data/tipos"
import { useTitle } from "@/app/hooks/changeTittle"
import { ContactoFooter } from "@/app/_components/contactoFooter"
export type ImageProduct = {
    product:any
}

export default function ProductDetail({  product }: ImageProduct) {
    useTitle(`PeruGlobo - ${product.title} - ${product.type}`)
    
    const getColor = (type:string) => {
        return tiposColores.find((item) => item.type === type)!.color
    }
    return <>
        <section className="relative py-28">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("/patron4.png")' }}></div>
          <div className="relative z-20 max-w-[900px] mx-auto px-5 text-center ">
            <h1 className="text-center md:text-left text-6xl font-bold shabby-patty  mb-8" style={{ color: getColor(product.type) }}>{product.title}</h1>
            <p className="text-center md:text-left text-2xl shabby-patty mb-2" style={{ color: getColor(product.type) }}>Medidas</p>
            <div className="flex gap-3 justify-between">
                <img className="max-w-[400px]" src={product.detail.image ? product.detail.image : product.image}  alt={product.detail.title} />
                <img className="max-w-[400px]" src={product.image} alt={product.image} />
            </div>

            <h2 className="text-center md:text-left text-2xl font-bold shabby-patty  mt-4" style={{ color: getColor(product.type) }}>Descripción</h2>
            <p className="text-center md:text-left text-lg">{!product.detail.text ? 'ppppp' : product.detail.text  }</p>
          </div>
        </section>
        <ContactoFooter/>
    </>
}