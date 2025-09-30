import { notFound } from "next/navigation";
import ProductDetail from "@/components/products/ProductDetail";
import { findProductBySlug, PRODUCTS } from "@/data/products";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProductBySlug(slug);
  if (!product) return { title: "Ürün Bulunamadı | Hitit Yalıtım" };
  return {
    title: `${product.title} | Hitit Yalıtım`,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProductBySlug(slug);
  if (!product) notFound();

  return (
    <main className="pt-24 bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProductDetail
          title={product.title}
          summary={product.summary}
          specs={product.specs}
          images={product.images}
          pdfDownloadUrl={product.pdfDownloadUrl}
        />
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}
