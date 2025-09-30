export default function CTA() {
  return (
    <section className="py-16 gradient-brand text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold">Projenize en uygun çözümü birlikte planlayalım</h2>
          <p className="mt-1 text-white/90 text-sm">Enjeksiyon kalıp ve CNC özel kesim yetkinliğimizle, ihtiyacınıza uygun üretimi hızla yaparız.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="/iletisim#teklif-ara" className="btn rounded-full bg-white text-neutral-900 hover:opacity-90">Hemen Ara</a>
          <a href="/urunler" className="btn rounded-full" style={{ backgroundColor: "var(--btn-red)", color: "#fff" }}>Ürünlere Göz At</a>
        </div>
      </div>
    </section>
  );
}


