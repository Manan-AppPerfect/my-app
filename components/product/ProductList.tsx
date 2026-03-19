"use client";

import { useCartContext } from "@/context/Cart/CartContext";
import { Product } from "@/types"
import ProductCard from "./ProductCard";

type Props = {
    products: Product[];
}

export default function ProductList({ products }: Props ) {
    
    const { addToCart } = useCartContext();

    return (
        <>
            <div className="space-y-5 mt-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>
        </>
    );
}