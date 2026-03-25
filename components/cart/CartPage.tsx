"use client";

import { useSelector } from "react-redux";
import CartList from "./CartList";
import { RootState } from "@/store/store";

export default function CartPage(){

    const { items: cartItems, totalPrice } = useSelector((state: RootState) => state.cart);

    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">Your Cart</h1>

            <CartList />

            {cartItems.length > 0 && (
                <p className="text-lg font-bold mt-5">Total: ₹{totalPrice}</p>
            )}
        </main>
    );
}