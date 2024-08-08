import { imagesProducts } from "@/app/data/images"
import { ImageDetail } from "@/app/interfaces/imagesDetail"
import ProductDetail from "./_componets/detail"
import { redirect } from 'next/navigation'
export default function Page({ params }: { params: { id: string } }) {
  const detail = imagesProducts.find((item) => item.id === Number(params.id))
  if (!detail) {
    redirect('/');
  }
  
    return (
      <>
        <div>My Post: {params.id}</div>
        <ProductDetail product={detail} />
      </>
    )
  }