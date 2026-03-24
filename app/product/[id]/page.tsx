import ProductDetails from "@/components/product/ProductDetails";
import { fetchProductById } from "@/lib/api";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>; 
}) {
  const { id } = await params;

  const product = await fetchProductById(id);

  if (!product || product.message) {
    return <p>Product not found</p>;
  }

  return <ProductDetails product={product} />;
}