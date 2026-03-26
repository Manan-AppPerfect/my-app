"use client";

import { addToCart } from "@/store/slices/cartSlice";
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
        <main className="max-w-6xl mx-auto p-10">
            
            <div className="grid grid-cols-2 gap-16 items-start">

                <div>
                    <img 
                        src={product.thumbnail} 
                        alt={product.title} 
                        className="w-full h-[500px] object-cover rounded-lg" 
                    />
                </div>

                <div className="mt-16 flex flex-col gap-4">

                    <h1 className="text-3xl font-semibold text-gray-900">
                        {product.title}
                    </h1>

                    <p className="text-xl text-gray-800">₹{product.price}</p>

                    <p className="text-gray-600 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="flex gap-6 text-sm text-gray-600 mt-2">
                        <button className="hover:underline">♡ Wishlist</button>
                        <button className="hover:underline">Share</button>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="mt-6 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
                    >
                        Add to Cart
                    </button>

                </div>
            </div>
        </main>
    );
}