import Section from "@/components/ui/Section";
import WaveDivider from "@/components/ui/WaveDivider";

export const metadata = {
  title: "Hizmetlerimiz | Novexis Tech",
  description: "Mobil uygulama geliştirme, web tasarımı, donanım tamiri ve yazılım destek hizmetlerimiz.",
};

export default function Services() {
  const services = [
    {
      icon: "📱",
      title: "Mobil Uygulama Geliştirme",
      description: "iOS ve Android platformları için modern, kullanıcı dostu mobil uygulamalar geliştiriyoruz.",
      features: [
        "React Native ile cross-platform geliştirme",
        "Native iOS ve Android uygulamaları",
        "UI/UX tasarım ve kullanıcı deneyimi",
        "App Store ve Google Play Store yayınlama",
        "Sürekli güncelleme ve bakım"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: "🌐",
      title: "Web Sitesi Tasarımı",
      description: "Responsive ve modern web siteleri ile markanızı dijital dünyada öne çıkarın.",
      features: [
        "Responsive tasarım (mobil uyumlu)",
        "SEO optimizasyonu",
        "E-ticaret siteleri",
        "Kurumsal web siteleri",
        "WordPress ve özel CMS çözümleri"
      ],
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: "🔧",
      title: "Donanım Tamiri & Destek",
      description: "Profesyonel donanım tamiri ve teknik destek hizmetleri sunuyoruz.",
      features: [
        "Bilgisayar ve laptop tamiri",
        "Yedek parça değişimi",
        "Sistem optimizasyonu",
        "Veri kurtarma hizmetleri",
        "Uzaktan teknik destek"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: "📈",
      title: "Reklam ve Pazarlama",
      description: "Dijital pazarlama stratejileri ile markanızı büyütün.",
      features: [
        "Google Ads ve sosyal medya reklamları",
        "SEO ve içerik pazarlama",
        "E-posta pazarlama kampanyaları",
        "Analitik ve raporlama",
        "Marka kimliği tasarımı"
      ],
      color: "from-pink-500 to-red-600"
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-slate-300">Hizmetlerimiz</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-100 mb-6">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Dijital dönüşümünüz için kapsamlı yazılım çözümleri ve teknoloji hizmetleri sunuyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <WaveDivider />

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
                Projenizi Hayata Geçirelim
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Hangi hizmete ihtiyacınız olduğunu söyleyin, size en uygun çözümü sunalım.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+905374064175" 
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hemen Ara
                </a>
                <a 
                  href="/iletisim" 
                  className="inline-flex items-center gap-2 bg-slate-700 text-slate-100 px-6 py-3 rounded-lg font-medium hover:bg-slate-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  İletişime Geç
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
