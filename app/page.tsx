import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Section from "@/components/ui/Section";
import WaveDivider from "@/components/ui/WaveDivider";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Novexis Tech | Yazılım Destek ve Mobil Projeler",
  description:
    "Yazılım destek, mobil projeler, donanım tamiri, yedek parça ve reklam siteleri çözümleri. Ne Yesek mobil uygulaması ve daha fazlası.",
};

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />

      {/* Modern Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-100 mb-6">
              Dijital Dünyada
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                Öncü Çözümler
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Mobil uygulama geliştirme, web tasarımı, donanım tamiri ve yazılım destek hizmetleri ile işinizi dijital dünyada büyütün.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hizmetler" className="btn btn-primary text-lg px-8 py-4">
                Hizmetlerimizi Keşfet
              </Link>
              <Link href="/projeler" className="btn btn-secondary text-lg px-8 py-4">
                Projelerimizi Gör
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Öne Çıkan Projeler
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Başarıyla tamamladığımız projeler ve müşterilerimiz için geliştirdiğimiz çözümler
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ne Yesek Project */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-800 p-8 text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-800/20"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🍽️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Ne Yesek</h3>
                  <p className="text-indigo-200">Mobil Uygulama</p>
                </div>
              </div>
              <p className="text-lg mb-6 text-indigo-100">
                Bugün ne yesek? Sorusu artık tarih oluyor! Yemek tarifleri ve beslenme uygulaması.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.neyesek.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play'den İndir
                </a>
                <a 
                  href="https://www.youtube.com/watch?v=5O5O8Begfi4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Reklam Filmini İzle
                </a>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <Image 
                src="/images/Ne Yesek/ChatGPT Image 6 Nis 2025 23_12_01.png" 
                alt="Ne Yesek Uygulaması" 
                width={120} 
                height={120}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Other Projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2">Web Tasarımı</h3>
              <p className="text-slate-300 mb-4">
                Modern ve responsive web siteleri tasarlıyoruz.
              </p>
              <Link 
                href="/hizmetler"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
              >
                Detayları Gör
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="group bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2">Donanım Tamiri</h3>
              <p className="text-slate-300 mb-4">
                Profesyonel donanım tamiri ve teknik destek.
              </p>
              <Link 
                href="/hizmetler"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
              >
                Detayları Gör
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <WaveDivider />
      
      {/* Features Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 gradient-brand opacity-10" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Features />
        </div>
      </section>
      
      <WaveDivider flip />

      {/* CTA Section */}
      <Section id="hizli-iletisim" className="bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Projenizi Hayata Geçirelim
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Yazılım destek ve mobil proje çözümleri için uzman ekibimiz yanınızda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905374064175" className="btn btn-primary text-lg px-8 py-4">
              📞 +90 537 406 41 75'yi Ara
            </a>
            <Link href="/iletisim" className="btn btn-secondary text-lg px-8 py-4">
              İletişime Geç
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
