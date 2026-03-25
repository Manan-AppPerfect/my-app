"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "@/store/productSlice";
import ProductList from "./ProductList";
import { Product } from "@/types";

export default function ProductClient({ products }: { products: Product[] }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [products, dispatch]);

  return <ProductList />;
}