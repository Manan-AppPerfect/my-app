import AuthGuard from "@/components/auth/AuthGuard";
import Navbar from "@/components/navbar/Navbar";
import ProductClient from "@/components/product/ProductClient";
import { fetchProducts } from "@/lib/api";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <AuthGuard>
      <div className="p-10">
        <h1 className="text-center text-yellow-300 text-3xl font-bold mb-6">
          Products
        </h1>
          <ProductClient products={products} />
      </div>
    </AuthGuard>
  );
}