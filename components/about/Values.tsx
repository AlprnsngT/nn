export default function Values() {
  const items = [
    {
      icon: "🤝",
      title: "Güvenilirlik",
      description: "Müşterilerimizle uzun vadeli güven ilişkisi kurarak, sözümüzü tutar ve kaliteli hizmet sunarız."
    },
    {
      icon: "💡",
      title: "İnovasyon",
      description: "Sürekli öğrenme ve yenilikçi çözümler geliştirerek teknoloji dünyasında öncü olmaya çalışırız."
    },
    {
      icon: "🎯",
      title: "Müşteri Odaklılık",
      description: "Müşterilerimizin ihtiyaçlarını anlayarak, onlara özel çözümler geliştirir ve memnuniyetlerini sağlarız."
    },
    {
      icon: "⭐",
      title: "Kalite",
      description: "Her projede en yüksek kalite standartlarını uygulayarak, mükemmel sonuçlar elde etmeyi hedefleriz."
    }
  ];

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Değerlerimiz
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Çalışma prensiplerimizi ve değerlerimizi yansıtan temel ilkelerimiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 text-center"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{item.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


