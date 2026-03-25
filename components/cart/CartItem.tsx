"use client"; 

import { removeFromCart } from "@/store/cartSlice";
import { CartItem as CartItemType } from "@/types";
import Link from "next/link";
import { useDispatch } from "react-redux";

type Props = {
    item: CartItemType;
};

export default function CartItem( {item}: Props) {

    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeFromCart(item.product.id));
    }

    return (
        <div className="flex flex-col items-center border rounded-lg p-4 border-gray-500 hover:shadow-md transition bg-white">
            <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
                <img
                src={item.product.thumbnail}
                alt={item.product.title}
                className="h-full object-contain"
                />
            </div>
            <Link href={`/product/${item.product.id}`}><h2 className="mt-3 text-xl text-center">{item.product.title}</h2></Link>
            <p className="mt-2">Price: ₹{item.product.price}</p>
            <p className="mt-2">Quantity: {item.quantity}</p>

            <button onClick={handleRemove} className="mt-3 bg-red-400 p-1 rounded text-white">
                Remove
            </button>
        </div>
    )
}