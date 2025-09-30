import Section from "@/components/ui/Section";
import WaveDivider from "@/components/ui/WaveDivider";
import Image from "next/image";

export const metadata = {
  title: "Ne Yesek | Yemek Tarifleri ve Beslenme Uygulaması",
  description: "Bugün ne yesek? Sorusu artık tarih oluyor! Ne Yesek uygulaması ile her gün yeni ve lezzetli tarifler keşfet, sağlıklı beslenmeyi kolaylaştır.",
};

export default function NeYesek() {
  const features = [
    {
      icon: "🎡",
      title: "Çarkı Çevir, Günlük Yemek Önerini Al!",
      description: "Kararsız kaldığında çarkı çevir ve sana özel rastgele bir yemek tarifi keşfet! İster kahvaltı, ister öğle yemeği, ister akşam için harika tarifler seni bekliyor."
    },
    {
      icon: "📹",
      title: "Video Tariflerle Kolayca Pişir!",
      description: "Metin tabanlı tarifler yerine usta şeflerin hazırladığı adım adım video tarifler ile yemek yapmayı öğren. Görsel anlatımlarla hata yapma riskini ortadan kaldır!"
    },
    {
      icon: "🔍",
      title: "Yemek Filtreleme ve Arama",
      description: "Canın makarna, kebap, diyet yemekleri ya da tatlı mı çekti? Kategori ve malzeme bazlı filtreleme yaparak tam aradığın yemeği bul!"
    },
    {
      icon: "👨‍🍳",
      title: "Farklı Şeflerden Özel Tarifler",
      description: "Profesyonel aşçılardan, gurmelerden ve ev şeflerinden gelen tariflerle mutfağını zenginleştir."
    },
    {
      icon: "🌟",
      title: "Premium ile Daha Fazlasını Keşfet!",
      description: "Premium üyelik ile tarif paylaşabilir, tariflere yorum yapabilir ve diğer kullanıcılarla etkileşime geçebilirsin. Ayrıca beğendiğin tarifleri kaydedebilir ve kendi tarif defterini oluşturabilirsin."
    },
    {
      icon: "🔥",
      title: "Kalori Takibi ve Diyetisyen Desteği",
      description: "Yediğin yemeklerin kalorisini hesapla ve sağlıklı beslenme hedeflerine ulaş. Uzman diyetisyenlerden kişiye özel öneriler alarak dengeli bir beslenme düzeni oluştur."
    }
  ];

  const benefits = [
    "✅ Geniş yemek tarifleri arşivi – Dünya mutfaklarından binlerce tarif!",
    "✅ Sağlıklı beslenme desteği – Kalori takibi & diyetisyen önerileri",
    "✅ Sosyal bir yemek topluluğu – Tarif paylaş, yorum yap, beğen!",
    "✅ Eğlenceli & interaktif kullanım – Çark çevir, şeflerden öğren, tarifleri keşfet!"
  ];

  const appScreenshots = [
    "/images/Ne Yesek/ChatGPT Image 6 Nis 2025 23_12_01.png",
    "/images/Ne Yesek/Ne Yesek (10) (1).png",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.10.00_b2cf831e.jpg",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.10.00_0fc50f7d.jpg",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.10.00_e34634c8.jpg",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.10.00_b4561b3f.jpg",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.10.00_6463f124.jpg",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.10.00_34b9f47f.jpg",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.09.59_f00d878c.jpg",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.09.59_04b89b65.jpg",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.09.59_40cbaabd.jpg",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.09.59_673a988c.jpg",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.09.59_ab49ec1a.jpg",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.09.58_faf0ce9f.jpg",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.09.58_3ff1a0fd.jpg",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.09.58_ec851077.jpg",
    "/images/Ne Yesek/WhatsApp Görsel 2025-04-06 saat 23.09.58_6264b1e8.jpg"
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
                Bugün ne yesek? 🍽️
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-blue-100">
                Sorusu artık tarih oluyor! Ne Yesek uygulaması ile her gün yeni ve lezzetli tarifler keşfet, sağlıklı beslenmeyi kolaylaştır ve mutfağını şenlendir!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.neyesek.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play'den İndir
                </a>
                <a 
                  href="https://www.youtube.com/watch?v=5O5O8Begfi4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Reklam Filmini İzle
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image 
                  src="/images/Ne Yesek/Ne Yesek (10) (1).png" 
                  alt="Ne Yesek Uygulaması" 
                  width={400} 
                  height={800}
                  className="mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Özellikler
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ne Yesek uygulamasının sunduğu benzersiz özellikler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-100 mb-3">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <WaveDivider />

      {/* Screenshots Section */}
      <section className="py-16 bg-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              Uygulama Görselleri
            </h2>
            <p className="text-lg text-slate-300">
              Ne Yesek uygulamasının ekran görüntüleri
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {appScreenshots.map((screenshot, index) => (
              <div key={index} className="bg-slate-700 rounded-lg p-2 hover:scale-105 transition-transform duration-300">
                <Image 
                  src={screenshot} 
                  alt={`Ne Yesek Ekran Görüntüsü ${index + 1}`} 
                  width={200} 
                  height={400}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip />

      {/* Benefits Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Neden "Ne Yesek"?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-green-400 text-xl">✓</div>
                <p className="text-slate-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-slate-300 mb-6">
            Ne pişireceğini düşünmek yerine hemen keşfetmeye başla! 🍳
          </p>
          <a 
            href="https://play.google.com/store/apps/details?id=com.neyesek.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            Hemen İndir ve Mutfağını Lezzetle Doldur!
          </a>
        </div>
      </Section>
    </main>
  );
}
