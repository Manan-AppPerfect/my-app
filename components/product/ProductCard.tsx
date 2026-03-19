"use client";

import { Product } from "@/types";
import Link from "next/link";

type Props = {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export default function ProductCard({product, onAddToCart} : Props) {
    return (
        <div className="p-4 border rounded">

            <Link href={`/product/${product.id}`}><h2 className="text-xl">{product.title}</h2></Link>
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