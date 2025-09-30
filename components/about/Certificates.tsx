import Image from "next/image";

export default function Certificates() {
  return (
    <section className="py-16 bg-red-50 dark:bg-red-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-red-950 dark:text-red-50">Kalite Belgeleri</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-red-200/60 dark:border-red-900/50 bg-white dark:bg-red-900">
              <Image src="/images/certificate.svg" alt={`Kalite belgesi ${i + 1}`} fill className="object-contain p-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


