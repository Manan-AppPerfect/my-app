"use client";

import { addToCart } from "@/store/cartSlice";
import { Product } from "@/types"
import { useDispatch } from "react-redux";

type Props = {
    product: Product;
}

export default function ProductDetails({ product }: Props) {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }

    return (
        <main className="p-10">
            <h1>{product.title}</h1>

            <p>₹{product.price}</p>

            <p>{product.description}</p>

            <img src={product.thumbnail} alt={product.title} className="w-full max-w-md" />

            <button
                onClick={handleAddToCart}
                className="mt-6 bg-green-500 text-white px-4 py-2"
            >
                Add to cart
            </button>
        </main>
    );
}