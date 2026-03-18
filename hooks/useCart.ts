"use client";

import { CartItem, Product } from "@/types";
import { useState, useEffect } from "react";

export function useCart(){
    const [cart, setCart] = useState<CartItem[]>([]);
    
    const addToCart = (product: Product) => {
        const existingItem = cart.find(
            (item) => item.product.id === product.id
        );

        if (existingItem) {
            const updatedCart = cart.map((item) =>
            item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setCart(updatedCart);
        } else {
            setCart([...cart, { product, quantity: 1}]);
        }
    };
    
    const removeFromCart = (productId: number) => {
        const updatedCart = cart
            .map((item) => 
                item.product.id === productId 
                    ? { ...item, quantity: item.quantity - 1}
                    : item
            )
            .filter((item) => item.quantity > 0);

        setCart(updatedCart);
    }
    
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );


    // load saved cart
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");

        if(savedCart) {
            setCart(JSON.parse(savedCart)); 
        }
    }, []);

    // save cart whenever it changes

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return {
        cart,
        addToCart,
        removeFromCart,
        totalPrice,
    };
}