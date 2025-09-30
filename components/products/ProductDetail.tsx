"use client";
import Image from "next/image";
import { useState } from "react";

export type ProductDetailProps = {
  title: string;
  summary: string;
  specs: { width: string; height: string; lambda: string; usage: string };
  images: string[];
  pdfDownloadUrl?: string;
};

export default function ProductDetail({ title, summary, specs, images, pdfDownloadUrl }: ProductDetailProps) {
  const gallery = images?.length ? images : ["/images/product-generic.svg"];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeImage = gallery[Math.min(activeIndex, gallery.length - 1)];

  return (
    <div className="grid lg:grid-cols-2 gap-10 text-neutral-900">
      {/* Sol: Galeri */}
      <div className="space-y-4">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border" style={{ borderColor: "color-mix(in srgb, var(--btn-red) 30%, transparent)", backgroundColor: "#fff" }}>
          <Image src={activeImage} alt={`${title} ürün görseli`} fill className="object-cover" />
        </div>
        {gallery.length > 1 && (
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
            {gallery.map((src, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Galeri ${idx + 1}`}
                aria-current={activeIndex === idx}
                className={`relative aspect-square rounded-xl overflow-hidden border transition-all duration-200 focus:outline-none`}
                style={{ borderColor: activeIndex === idx ? "var(--btn-red)" : "color-mix(in srgb, var(--btn-red) 20%, transparent)" }}
              >
                <Image src={src} alt={`${title} galeri ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Sağ: Başlık, özet, teknik özellikler ve CTA */}
      <div className="lg:sticky lg:top-28 self-start">
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900">{title}</h1>
        <p className="mt-3 text-neutral-800 font-semibold text-lg leading-relaxed">{summary}</p>

        <div className="my-6 h-px" style={{ backgroundColor: "color-mix(in srgb, var(--btn-red) 25%, transparent)" }} />

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#3b1e46" }}>Teknik Özellikler</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            <div className="rounded-2xl border p-4" style={{ borderColor: "color-mix(in srgb, var(--btn-red) 25%, transparent)", backgroundColor: "#fff" }}>
              <div className="text-sm text-neutral-700 font-medium">Genişlik</div>
              <div className="mt-1 text-neutral-900 font-semibold text-lg">{specs.width}</div>
            </div>
            <div className="rounded-2xl border p-4" style={{ borderColor: "color-mix(in srgb, var(--btn-red) 25%, transparent)", backgroundColor: "#fff" }}>
              <div className="text-sm text-neutral-700 font-medium">Kalınlık</div>
              <div className="mt-1 text-neutral-900 font-semibold text-lg">{specs.height}</div>
            </div>
            <div className="rounded-2xl border p-4" style={{ borderColor: "color-mix(in srgb, var(--btn-red) 25%, transparent)", backgroundColor: "#fff" }}>
              <div className="text-sm text-neutral-700 font-medium">Isı İletkenlik (λ)</div>
              <div className="mt-1 text-neutral-900 font-semibold text-lg">{specs.lambda}</div>
            </div>
            <div className="rounded-2xl border p-4 sm:col-span-2" style={{ borderColor: "color-mix(in srgb, var(--btn-red) 25%, transparent)", backgroundColor: "#fff" }}>
              <div className="text-sm text-neutral-700 font-medium">Kullanım Alanları</div>
              <div className="mt-1 text-neutral-900 font-semibold">{specs.usage}</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={pdfDownloadUrl || "#"}
            target="_blank"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold shadow"
            style={{ backgroundColor: "var(--btn-red)", color: "#fff" }}
          >
            Teknik Föy (PDF)
          </a>
          <a href="/iletisim#teklif-ara" className="text-sm font-semibold" style={{ color: "#3b1e46" }}>Teklif İste →</a>
        </div>
      </div>
    </div>
  );
}


