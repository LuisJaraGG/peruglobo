import { imagesSnacks } from "@/app/data/images"
export function ListSnacks() {
    return (
        <div className="flex flex-wrap justify-center  items-center gap-10">
            {imagesSnacks.map((image, index) => (
                <div key={index} className="p-2">
                    <img  src={image.image} alt={`Snack ${image.title}`}  className="object-cover max-w-[300px]"/>
                    <p className="shabby-patty text-center text-[#FE9CDB] text-xl md:text-3xl">{image.title}</p>
                    <p className="text-center">{image.description}</p>
                </div>
            ))}
        </div>
    )
}