"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Ürünleriniz hangi standartlara uygun?",
      a: "CE",
    },
    {
      q: "Minimum sipariş miktarı var mı?",
      a: "Proje büyüklüğüne göre esnek sipariş miktarları sunuyoruz. Küçük projeler için de hizmet veriyoruz.",
    },
    {
      q: "Teslimat süreleri ne kadar?",
      a: "Stoktan 1-3 iş günü, özel üretim için 7-15 iş günü içinde teslimat yapıyoruz.",
    },
    {
      q: "Teknik destek hizmeti veriyor musunuz?",
      a: "Evet, uygulama öncesi ve sırasında ücretsiz teknik destek hizmeti sunuyoruz.",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900">Sık Sorulan Sorular</h2>
        <div className="mt-6 rounded-2xl border bg-white overflow-hidden shadow-lg" style={{ borderColor: "color-mix(in srgb, var(--btn-red) 25%, transparent)" }}>
          {faqs.map((item, idx) => (
            <div key={idx} className="border-b" style={{ borderColor: "color-mix(in srgb, var(--btn-red) 15%, transparent)" }}>
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between text-neutral-900 hover:opacity-90"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-medium">{item.q}</span>
                <span style={{ color: "#3b1e46" }}>
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-4 text-sm text-neutral-700">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


