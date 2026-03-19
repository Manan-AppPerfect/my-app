"use client";

import { Product } from "@/types";

type Props = {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export default function ProductCard({product, onAddToCart} : Props) {
    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl">{product.title}</h2>
            <p className="text-green-600 font-semibold">₹{product.price}</p>            
            <button 
                onClick={() => onAddToCart(product)}
                className="mt-2 px-3 py-1 bg-blue-300 text-white rounded"
            >
                Add to Cart
            </button>
        </div>
    )
}