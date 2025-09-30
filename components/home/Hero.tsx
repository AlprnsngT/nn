import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const stats = [
    { number: "10+", label: "Proje", delay: "delay-100" },
    { number: "100%", label: "Memnuniyet", delay: "delay-200" },
    { number: "24/7", label: "Destek", delay: "delay-300" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float delay-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float delay-400"></div>
        
        {/* Rotating Elements */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse-slow delay-300"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse-slow delay-500"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Company Badge */}
            <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-8 animate-fade-in-up">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white/80">Novexis Tech</span>
              <span className="text-xs text-white/60">Yazılım Çözümleri</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up delay-100">
              <span className="block">Dijital</span>
              <span className="block gradient-text-blue">Dünyada</span>
              <span className="block">Öncü</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-white/70 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-200">
              Mobil uygulama geliştirme, web tasarımı, donanım tamiri ve dijital pazarlama çözümleri ile işinizi dijital dünyada büyütün.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-12 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center animate-fade-in-up ${stat.delay}`}>
                  <div className="text-4xl sm:text-5xl font-bold gradient-text-blue mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-white/60 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in-up delay-400">
              <Link 
                href="/iletisim"
                className="btn btn-primary group"
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +90 537 406 41 75
              </Link>
              <Link 
                href="/projeler"
                className="btn btn-secondary group"
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Projeleri İncele
              </Link>
            </div>
          </div>

          {/* Right Content - Ne Yesek Project Showcase */}
          <div className="relative animate-fade-in-scale delay-300">
            {/* Main Project Card */}
            <div className="card hover-glow group">
              {/* Project Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🍽️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Ne Yesek</h3>
                  <p className="text-white/60 text-sm font-medium">Mobil Uygulama</p>
                </div>
              </div>
              
              {/* Project Description */}
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                Bugün ne yesek? Sorusu artık tarih oluyor! Yemek tarifleri ve beslenme uygulaması ile her gün yeni lezzetler keşfedin.
              </p>

              {/* App Screenshot */}
              <div className="relative mb-8 group/image">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image 
                    src="/images/Ne Yesek/ChatGPT Image 6 Nis 2025 23_12_01.png" 
                    alt="Ne Yesek Uygulaması" 
                    width={400}
                    height={300}
                    className="w-full h-auto group-hover/image:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-float delay-200"></div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.neyesek.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn btn-primary group"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play'den İndir
                </a>
                <a 
                  href="https://www.youtube.com/watch?v=5O5O8Begfi4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn btn-secondary group"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Reklam Filmini İzle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs text-white/50 font-medium">Scroll</span>
        </div>
      </div>
    </section>
  );
}