export default function Timeline() {
  const items = [
    { year: "2025 Şubat", title: "Kuruluş", desc: "Novexis Tech şirketi kuruldu ve yazılım geliştirme faaliyetlerine başladı." },
    { year: "2025 Temmuz", title: "Ne Yesek Uygulaması", desc: "Ne Yesek mobil uygulaması Google Play Store'da yayınlandı." },
    { year: "2025 Ağustos", title: "İlk Müşteriler", desc: "İlk kurumsal müşterilerimizle çalışmaya başladık." },
    { year: "2025 Eylül", title: "Genişleme", desc: "Web tasarımı ve donanım tamiri hizmetlerini ekledik." },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-100">Dönüm Noktaları</h2>
        <div className="mt-8 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 rounded bg-blue-500" />
          <div className="space-y-8">
            {items.map((i, idx) => (
              <div key={idx} className={`relative flex ${idx % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>
                <div className="w-full sm:w-1/2 px-8">
                  <div className="relative rounded-xl border bg-slate-800 p-5 shadow-sm border-slate-700">
                    <div className="absolute -left-8 sm:left-auto sm:-right-8 top-5 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.3)]" />
                    <div className="text-sm font-semibold text-blue-400">{i.year}</div>
                    <div className="mt-1 text-slate-100 font-bold">{i.title}</div>
                    <div className="mt-1 text-sm text-slate-300">{i.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


