"use client";

import { useCartContext } from "@/context/Cart/CartContext";
import { Product } from "@/types"

type Props = {
    product: Product;
}

export default function ProductDetails({ product }: Props) {
    const { addToCart } = useCartContext();

    return (
        <main className="p-10">
            <h1>{product.title}</h1>

            <p>₹{product.price}</p>

            <p>{product.description}</p>

            <img src={product.thumbnail} alt={product.title} className="w-full max-w-md" />

            <button
                onClick={() => addToCart(product)}
                className="mt-6 bg-green-500 text-white px-4 py-2"
            >
                Add to cart
            </button>
        </main>
    );
}