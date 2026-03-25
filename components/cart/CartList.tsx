"use client";

import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { RootState } from "@/store/store";

export default function CartList() {

    const cartItems = useSelector((state: RootState) => state.cart.items)
    return (
        <div className="grid grid-cols-4 gap-6 mt-4">
            {cartItems.length === 0 ? (
                <p className="col-span-4 text-center text-gray-500">Cart is empty</p>
            ) : (
                cartItems.map((item) => (
                    <CartItem 
                        key={item.product.id}
                        item={item}
                    />
                ))
            )}
        </div>
    );
}