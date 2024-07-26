import { useState, useEffect } from 'react';
import { imagesProducts } from "@/app/data/images";

type ProductListProps = {
    sort: string
};

export function ProductList({ sort }: ProductListProps) {
    const [loaded, setLoaded] = useState(false);
    const [list, setList] = useState<typeof imagesProducts>([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    const getColor = (sort: string) => {
        switch (sort) {
            case 'acuaticos':
                return '#FE9CDB';
            case 'inflables':
                return '#FFCC00';
            case 'mecanicos':
                return '#88E2FE';
            case 'camas':
                return '#9CD2A6';
            default:
                return '#88E2FE';
        }
    };

    useEffect(() => {
        const filteredProducts = imagesProducts.filter(product => product.type === sort);
        const listToShow = filteredProducts.length > 0 ? filteredProducts : imagesProducts;
        
        setList(listToShow);
        setImagesLoaded(0);
        setLoaded(false);

        // Esta función se llamará cada vez que una imagen se cargue
        const handleImageLoad = () => {
            setImagesLoaded((prevCount) => prevCount + 1);
        };

        // Pre-cargar imágenes y añadir eventos de carga
        listToShow.forEach((product) => {
            const img = new Image();
            img.src = product.image;
            img.onload = handleImageLoad;
        });

    }, [sort]);

    useEffect(() => {
        if (imagesLoaded === list.length) {
            setLoaded(true);
        }
    }, [imagesLoaded, list.length]);

    if (!loaded) {
        return <div className="text-center text-2xl">Cargando imagenes...</div>;
    }

    return (
        <>
        {loaded && list.length === 0 && <div className="text-center text-2xl">No se encontraron productos</div>}
        {loaded  &&
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {list.map((product, index) => (
                    <div key={index}>
                        <img
                            src={product.image}
                            alt={`Juego ${product.title}`}
                            className="object-scale-down max-w-[300px]"
                        />
                        <p className="shabby-patty text-xl md:text-3xl text-center" style={{ color: getColor(product.type) }}>{product.title}</p>
                        {product.description && <p className="text-center">{product.description}</p>}
                    </div>
                ))}
            </div>
        }
        </>
    );
}
