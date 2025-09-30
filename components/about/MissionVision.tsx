export default function MissionVision() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Misyonumuz & Vizyonumuz
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Dijital dönüşümde öncü olmak ve müşterilerimizin başarısına katkıda bulunmak
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-blue-400 transition-colors">
                Misyonumuz
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Müşterilerimizin dijital dönüşüm süreçlerinde güvenilir bir partner olarak, 
                yenilikçi teknoloji çözümleri sunmak ve işlerini büyütmelerine yardımcı olmak. 
                Mobil uygulama geliştirme, web tasarımı ve yazılım destek hizmetlerimizle 
                müşterilerimizin dijital varlıklarını güçlendiriyoruz.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔮</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-purple-400 transition-colors">
                Vizyonumuz
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Türkiye'nin önde gelen yazılım şirketlerinden biri olarak, 
                teknoloji dünyasında öncü çözümler geliştirmek ve global pazarda 
                rekabet edebilir ürünler sunmak. Dijital inovasyonun merkezi olarak 
                tanınmak ve müşterilerimizin başarı hikayelerinin bir parçası olmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


