"use client";

import Link from "next/link";

export default function Features() {
  const items = [
    {
      icon: "📱",
      title: "Mobil Uygulama Geliştirme",
      description: "iOS ve Android platformları için modern, kullanıcı dostu mobil uygulamalar geliştiriyoruz.",
      features: ["React Native", "Flutter", "Native Development", "UI/UX Design"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🌐",
      title: "Web Sitesi Tasarımı",
      description: "Responsive ve modern web siteleri ile markanızı dijital dünyada öne çıkarın.",
      features: ["React.js", "Next.js", "WordPress", "E-commerce"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🔧",
      title: "Donanım Tamiri & Destek",
      description: "Profesyonel donanım tamiri ve teknik destek hizmetleri sunuyoruz.",
      features: ["Bilgisayar Tamiri", "Yedek Parça", "Teknik Destek", "Bakım"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div>
      <div className="text-center mb-20">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Dijital dönüşümünüz için kapsamlı yazılım çözümleri sunuyoruz
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`card hover-glow group animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 rounded-3xl group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                <span className="text-4xl">{item.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed text-lg">
                {item.description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3 text-white/70 group-hover:text-white transition-colors">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center animate-fade-in-up delay-500">
        <div className="card hover-glow">
          <h3 className="text-3xl font-bold text-white mb-6">
            Projenizi Hayata Geçirelim
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Hangi hizmete ihtiyacınız olduğunu söyleyin, size en uygun çözümü sunalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+905374064175" 
              className="btn btn-primary group"
            >
              <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Hemen Ara
            </a>
            <Link 
              href="/iletisim" 
              className="btn btn-secondary group"
            >
              <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}