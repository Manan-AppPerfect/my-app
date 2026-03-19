"use client";

import CartList from "./CartList";
import { useCartContext } from "@/context/Cart/CartContext";

export default function CartPage(){

    const { cart, removeFromCart, totalPrice } = useCartContext();

    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold text-yellow-400 mb-6">Your Cart</h1>

            <CartList cart={cart} removeFromCart={removeFromCart} />

            {cart.length > 0 && (
                <p className="text-lg font-bold mt-5">Total: ₹{totalPrice}</p>
            )}
        </main>
    );
}