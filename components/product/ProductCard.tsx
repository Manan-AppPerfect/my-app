"use client";

import { Product } from "@/types";
import Link from "next/link";

type Props = {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export default function ProductCard({product, onAddToCart} : Props) {
    return (
        <div className="flex flex-col items-center border rounded-lg p-4 border-gray-500 hover:shadow-md transition bg-white">

            <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
                <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full object-contain"
                />
            </div>
            <Link href={`/product/${product.id}`}><h2 className="mt-3 text-xl text-center">{product.title}</h2></Link>
            <p className="text-green-600 font-semibold text-center mt-2">₹{product.price}</p>            
            <button 
                onClick={() => onAddToCart(product)}
                className="mt-3 px-3 py-1 bg-blue-300 text-white rounded-md mx-auto"
            >
                Add to Cart
            </button>
        </div>
    )
}