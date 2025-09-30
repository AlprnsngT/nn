export default function Partners() {
  const brands = [
    "VESTEL",
    "SILVERLINE",
    "MADO",
    "SÜPER YAPI",
    "VİNOLA",
    "ÖDÜL",
    "TAMEK",
  ];

  return (
    <section className="py-16 bg-white dark:bg-red-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-red-900 text-center">Ortaklarımız</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.map((b) => (
            <div
              key={b}
              className="rounded-2xl border border-red-200/60 dark:border-red-300/40 bg-white dark:bg-red-100 p-4 text-center shadow-sm"
              aria-label={`${b} logosu`}
            >
              <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-red-900">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
