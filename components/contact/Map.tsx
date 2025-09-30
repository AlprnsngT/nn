export default function Map() {
  return (
    <section className="py-16 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-100 mb-8">Konum</h2>
        <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-lg">
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps?q=40.477333,34.84475&hl=tr&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hitit Yalıtım Konum"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="p-6 bg-neutral-900 border-t border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="text-2xl">📍</div>
              <div>
                <p className="text-neutral-100 font-semibold">Merkez Ofis</p>
                <p className="text-sm text-neutral-300">40°28'38.4"N 34°50'41.1"E • Organize Sanayi Bölgesi 4. Cad No:6, Merkez Çorum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


