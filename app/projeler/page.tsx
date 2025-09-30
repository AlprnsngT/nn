import Section from "@/components/ui/Section";
import WaveDivider from "@/components/ui/WaveDivider";
import Image from "next/image";

export const metadata = {
  title: "Projelerimiz | Novexis Tech",
  description: "Başarıyla tamamladığımız projeler ve müşterilerimiz için geliştirdiğimiz çözümler.",
};

export default function Projects() {
  const projects = [
    {
      title: "Ne Yesek",
      category: "Mobil Uygulama",
      description: "Bugün ne yesek? Sorusu artık tarih oluyor! Ne Yesek uygulaması ile her gün yeni ve lezzetli tarifler keşfet, sağlıklı beslenmeyi kolaylaştır ve mutfağını şenlendir.",
      features: [
        "Çark çevirme ile rastgele tarif önerisi",
        "Video tariflerle kolay pişirme",
        "Yemek filtreleme ve arama",
        "Kalori takibi ve diyetisyen desteği",
        "Premium üyelik ile sosyal özellikler"
      ],
      technologies: ["React Native", "Firebase", "Google Maps API"],
      videoUrl: "https://www.youtube.com/watch?v=5O5O8Begfi4",
      icon: "🍽️",
      color: "from-indigo-600 to-blue-800",
      featured: true
    },
    {
      title: "E-Ticaret Web Sitesi",
      category: "Web Tasarımı",
      description: "Modern ve kullanıcı dostu e-ticaret web sitesi. Güvenli ödeme sistemi ve yönetim paneli ile tam fonksiyonel çözüm.",
      features: [
        "Responsive tasarım",
        "Güvenli ödeme sistemi",
        "Stok yönetimi",
        "Müşteri yönetimi",
        "SEO optimizasyonu"
      ],
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      icon: "🛒",
      color: "from-green-600 to-emerald-800"
    },
    {
      title: "Kurumsal Web Sitesi",
      category: "Web Tasarımı",
      description: "Profesyonel kurumsal web sitesi. Modern tasarım ve içerik yönetim sistemi ile markanızı dijital dünyada öne çıkarın.",
      features: [
        "Modern tasarım",
        "İçerik yönetim sistemi",
        "Blog modülü",
        "İletişim formu",
        "Analitik entegrasyonu"
      ],
      technologies: ["React", "WordPress", "MySQL"],
      icon: "🏢",
      color: "from-slate-600 to-gray-800"
    },
    {
      title: "Mobil Oyun",
      category: "Mobil Uygulama",
      description: "Eğlenceli ve bağımlılık yapıcı mobil oyun. Unity ile geliştirilmiş, çoklu platform desteği.",
      features: [
        "Unity ile geliştirme",
        "Çoklu platform desteği",
        "Sosyal özellikler",
        "Liderlik tablosu",
        "In-app purchases"
      ],
      technologies: ["Unity", "C#", "Firebase"],
      icon: "🎮",
      color: "from-purple-600 to-pink-800"
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
              <span className="text-sm text-slate-300">Projelerimiz</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-100 mb-6">
              Projelerimiz
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Başarıyla tamamladığımız projeler ve müşterilerimiz için geliştirdiğimiz çözümler
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <Section>
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 text-center">
            Öne Çıkan Proje
          </h2>
          <p className="text-lg text-slate-300 text-center max-w-2xl mx-auto">
            En son tamamladığımız ve en çok dikkat çeken projemiz
          </p>
        </div>

        {projects.filter(p => p.featured).map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-800 p-8 text-white mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-800/20"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                      <span className="text-4xl">{project.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{project.title}</h3>
                      <p className="text-indigo-200 text-lg">{project.category}</p>
                    </div>
                  </div>
                  <p className="text-lg mb-6 text-indigo-100 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-indigo-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.neyesek.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      Google Play'den İndir
                    </a>
                    <a 
                      href={project.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      Reklam Filmini İzle
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image 
                    src="/images/Ne Yesek/ChatGPT Image 6 Nis 2025 23_12_01.png" 
                    alt="Ne Yesek Uygulaması" 
                    width={400} 
                    height={400}
                    className="rounded-2xl shadow-2xl mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Section>

      <WaveDivider />

      {/* Other Projects */}
      <Section>
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 text-center">
            Diğer Projelerimiz
          </h2>
          <p className="text-lg text-slate-300 text-center max-w-2xl mx-auto">
            Farklı alanlarda geliştirdiğimiz başarılı projeler
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{project.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-indigo-300 text-sm mb-4">{project.category}</p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <WaveDivider flip />

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
                Projenizi Hayata Geçirelim
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Benzer bir proje mi geliştirmek istiyorsunuz? Bizimle iletişime geçin.
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
