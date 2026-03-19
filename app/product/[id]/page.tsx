import ProductDetails from "@/components/product/ProductDetails";
import { fetchProducts } from "@/lib/api";
import { Product } from "@/types";


export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const products: Product[] = await fetchProducts();

  console.log("id:", id);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return <ProductDetails product={product} />;
}