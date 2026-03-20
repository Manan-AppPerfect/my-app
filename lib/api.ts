import { Product } from "@/types";

type ProductsResponse = {
  products: Product[];
};

export async function fetchProducts(): Promise<Product[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, {
        next: { revalidate: 30 },
    });

    console.log("ENV:", process.env.NEXT_PUBLIC_API_BASE_URL);

    console.log("Fetching products...");
    
    if(!res.ok) {
        throw new Error("failed to fetch")
    }

    const data: ProductsResponse = await res.json();
    return data.products;
}