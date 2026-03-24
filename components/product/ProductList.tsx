"use client";

import { useCartContext } from "@/context/Cart/CartContext";
import { Product } from "@/types"
import ProductCard from "./ProductCard";
import SearchBar from "../search/SearchBar";

type Props = {
    products: Product[];
}

export default function ProductList({ products }: Props ) {
    
    const { addToCart } = useCartContext();

    return (
        <>
            <SearchBar />
            <div className="grid grid-cols-4 gap-6">
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