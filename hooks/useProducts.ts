"use client";

import { fetchProducts } from "@/lib/api";
import { Product } from "@/types";
import { useEffect, useState } from "react";

export function useProducts(){
    
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            }
            catch (err: any) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [])

    return { products, loading, error };
}