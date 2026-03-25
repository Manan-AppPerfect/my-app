"use client";

import ProductCard from "./ProductCard";
import SearchBar from "../search/SearchBar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function ProductList() {
    const products = useSelector((state: RootState) => state.product.products);
    const query = useSelector((state: RootState) => state.search.query);
    
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <SearchBar />
            <div className="grid grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
}