import Counter from "@/components/ui/Counter";

export default function Stats() {
  const items = [
    { value: 15000, suffix: " m²/ay", label: "Üretim Kapasitesi" },
    { value: 250, suffix: "+", label: "Aktif Müşteri" },
    { value: 45, suffix: " Ülke", label: "İhracat Ağı" },
    { value: 120, suffix: " Kişi", label: "Uzman Ekip" },
  ];

  return (
    <section className="py-16 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((s, idx) => (
            <div key={idx} className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900 text-center">
              <div className="text-2xl font-extrabold text-white">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-neutral-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


