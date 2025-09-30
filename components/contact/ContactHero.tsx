export default function ContactHero() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 gradient-brand opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold shadow" style={{ backgroundColor: "var(--btn-red)", color: "#fff" }}>İletişim</div>
        <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 max-w-3xl mx-auto">
          Projeniz İçin En Uygun Çözümü Birlikte Bulalım
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-800 max-w-2xl mx-auto">
          Enjeksiyon kalıp üretimi ve CNC özel kesim kabiliyetimizle, her türlü modelde üretim yapıyoruz.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="tel:+903642549550" className="btn btn-primary">Hemen Ara</a>
        </div>
      </div>
    </section>
  );
}


