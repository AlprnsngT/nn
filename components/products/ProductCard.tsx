import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  slug: string;
  title: string;
  summary: string;
  images?: string[];
  category?: string;
}

export default function ProductCard({ slug, title, summary, images, category }: ProductCardProps) {
  const cover = images?.[0] ?? "/images/product-generic.svg";
  return (
    <Link
      href={`/urunler/${slug}`}
      className="group relative rounded-2xl bg-white/10 border text-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 card-hover overflow-hidden"
      style={{ borderColor: "color-mix(in srgb, var(--btn-red) 40%, transparent)" }}
    >
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div
          className="absolute -inset-px rounded-2xl blur-[2px] opacity-30"
          style={{ background: "linear-gradient(90deg, var(--btn-red), var(--btn-red-hover))" }}
        />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={cover} alt={`${title} ürün görseli`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold line-clamp-1">{title}</h3>
          {category && (
            <span
              className="text-xs rounded-full px-2 py-1"
              style={{
                backgroundColor: "color-mix(in srgb, var(--btn-red) 18%, transparent)",
                color: "#3b1e46",
              }}
            >
              {category}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm line-clamp-2 text-neutral-700">{summary}</p>
        <div
          className="mt-4 text-sm font-medium group-hover:translate-x-0.5 transition-transform"
          style={{ color: "#3b1e46" }}
        >
          Detayları Gör →
        </div>
      </div>
    </Link>
  );
}


