import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-4xl font-bold text-slate-900">Sayfa Bulunamadı</h1>
        <p className="mt-3 text-slate-600">Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p>
        <Link href="/" className="mt-6 inline-flex items-center justify-center rounded-md bg-red-600 text-white px-5 py-2 text-sm font-medium shadow hover:bg-red-700">Ana Sayfaya Dön</Link>
      </section>
    </main>
  );
}