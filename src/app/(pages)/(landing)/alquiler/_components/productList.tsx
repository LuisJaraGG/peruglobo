import { useState, useEffect } from 'react';
import { imagesProducts } from "@/app/data/images";
import Link from 'next/link';
type ProductListProps = {
    sort: string
};

export function ProductList({ sort }: ProductListProps) {

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

    const filteredProducts = imagesProducts.filter(product => product.type === sort);
    const listToShow = filteredProducts.length > 0 ? filteredProducts : imagesProducts;

    return (
        <>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {listToShow.map((product, index) => (
                    <div key={index}>
                        <Link href={`/inflable/${product.id}`}>
                            <img
                                src={product.image}
                                alt={`Juego ${product.title}`}
                                className="object-scale-down max-w-[300px]"
                                loading='lazy'
                            />
                            <p className="shabby-patty text-xl md:text-3xl text-center" style={{ color: getColor(product.type) }}>{product.title}</p>
                            {product.description && <p className="text-center">{product.description}</p>}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
