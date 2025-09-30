export default function Offices() {
  const offices = [
    {
      city: "Çorum Merkez",
      address: "Organize Sanayi Bölgesi 4. Cad No:6, Merkez Çorum",
      phone: "+90 364 222 33 44",
    },
  ];

  return (
    <section className="py-16 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-100">Ofisimiz</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((o, idx) => (
            <div key={idx} className="group relative rounded-2xl bg-neutral-900 border border-neutral-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300 card-hover overflow-hidden">
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r blur-[2px] opacity-20 from-neutral-700 to-neutral-500" />
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">📍</div>
                <div>
                  <div className="text-white font-semibold">{o.city}</div>
                  <div className="mt-1 text-sm text-neutral-300">{o.address}</div>
                  <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="mt-2 inline-flex text-sm font-medium text-neutral-200 hover:text-white transition-colors">{o.phone}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


