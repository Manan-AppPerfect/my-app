import ProductClient from "@/components/product/ProductClient";
import { fetchProducts } from "@/lib/api";

export default async function Home() {

  const products = await fetchProducts();

  return (
    <main className="p-10">
      <h1 className=" text-center text-yellow-300 text-3xl font-bold mb-6">Products</h1>

      <ProductClient products={products}/>
    </main>
  );
}
