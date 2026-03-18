"use client";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {

  const { cart, addToCart, removeFromCart, totalPrice } = useCart();

  const { products, loading, error } = useProducts();

  return (
    <main className="p-10">
      <h1 className=" text-center text-yellow-200 text-3xl font-bold mb-6">Products</h1>

      <p className="mb-4">Cart Items: {cart.length}</p>

      <h2>Cart: </h2>
      <div>
        {cart.map((item) => (
          <div key={item.product.id}>
            <p>{item.product.title}</p> 
            <p>Qty: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="space-y-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>

      <p className="mt-4 font-bold">Total: ₹{totalPrice}</p>

    </main>
  );
}
