import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/products";
import { translations } from "@/lib/translations";
import ProductDetail from "@/components/ProductDetail";

/** Only products without a dedicated static page get a dynamic study page. */
const dynamicProducts = PRODUCTS.filter((p) => !p.href);

export function generateStaticParams() {
  return dynamicProducts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = dynamicProducts.find((p) => p.slug === params.slug);
  if (!product) return {};
  const tr = translations.es.products[product.id];
  return {
    title: tr?.title ?? product.title,
    description: tr?.description ?? product.description,
  };
}

export default function ProductStudyPage({ params }: { params: { slug: string } }) {
  const product = dynamicProducts.find((p) => p.slug === params.slug);
  if (!product) notFound();
  return <ProductDetail productId={product.id} />;
}
