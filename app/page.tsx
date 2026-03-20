import ProductList from "@/components/product/ProductList";
import { fetchProducts } from "@/lib/api";

export default async function Home() {

  const products = await fetchProducts();

  return (
    <main className="p-10">
      <h1 className=" text-center text-yellow-200 text-3xl font-bold mb-6">Products</h1>

      <ProductList products={products} />
    </main>
  );
}
