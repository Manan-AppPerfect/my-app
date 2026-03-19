import { Product } from "@/types";

type ProductsResponse = {
  products: Product[];
};

export async function fetchProducts(): Promise<Product[]> {
    const res = await fetch("https://dummyjson.com/products");

    if(!res.ok) {
        throw new Error("failed to fetch")
    }

    const data: ProductsResponse = await res.json();
    return data.products;
}