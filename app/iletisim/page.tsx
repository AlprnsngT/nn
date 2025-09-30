"use client";

import Section from "@/components/ui/Section";
import WaveDivider from "@/components/ui/WaveDivider";

export default function Contact() {
  const contactInfo = [
    {
      icon: "📍",
      title: "Adres",
      content: "Ulukavak, Çiftlik Çayırı 2. Cd. No:3/A, 19100 Çorum Merkez/Çorum",
      link: "https://maps.google.com/?q=Ulukavak,Çiftlik+Çayırı+2.+Cd.+No:3/A,19100+Çorum+Merkez/Çorum"
    },
    {
      icon: "📞",
      title: "Telefon",
      content: "+90 537 406 41 75",
      link: "tel:+905374064175"
    },
    {
      icon: "📞",
      title: "Telefon",
      content: "+90 539 489 36 63",
      link: "tel:+905394893663"
    },
    {
      icon: "📧",
      title: "E-posta",
      content: "novexistech@gmail.com",
      link: "mailto:novexistech@gmail.com"
    },
    {
      icon: "🌐",
      title: "Website",
      content: "www.novexistech.com",
      link: "http://www.novexistech.com"
    }
  ];

  const services = [
    {
      icon: "📱",
      title: "Mobil Uygulama",
      description: "iOS ve Android uygulama geliştirme"
    },
    {
      icon: "🌐",
      title: "Web Tasarımı",
      description: "Modern ve responsive web siteleri"
    },
    {
      icon: "🔧",
      title: "Donanım Tamiri",
      description: "Profesyonel teknik destek"
    },
    {
      icon: "📈",
      title: "Dijital Pazarlama",
      description: "SEO ve reklam çözümleri"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    
    // WhatsApp mesajı oluştur
    const whatsappMessage = `*Novexis Tech - Yeni İletişim Formu*

*Ad Soyad:* ${data.name}
*E-posta:* ${data.email}
*Telefon:* ${data.phone}
*Hizmet Türü:* ${data.service}
*Mesaj:* ${data.message}

*Tarih:* ${new Date().toLocaleString('tr-TR')}`;

    const whatsappUrl = `https://wa.me/905374064175?text=${encodeURIComponent(whatsappMessage)}`;
    
    // E-posta mesajı oluştur
    const emailSubject = "Novexis Tech - Yeni İletişim Formu";
    const emailBody = `Yeni bir iletişim formu gönderildi:

Ad Soyad: ${data.name}
E-posta: ${data.email}
Telefon: ${data.phone}
Hizmet Türü: ${data.service}
Mesaj: ${data.message}

Tarih: ${new Date().toLocaleString('tr-TR')}`;

    const emailUrl = `mailto:novexistech@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Hem WhatsApp hem de e-posta aç
    window.open(whatsappUrl, '_blank');
    window.open(emailUrl, '_blank');
  };

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
              <span className="text-sm text-slate-300">İletişim</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-100 mb-6">
              İletişime Geçin
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Projeleriniz için bizimle iletişime geçin. Mobil uygulama geliştirme, web tasarımı ve yazılım destek hizmetlerimiz hakkında bilgi alın.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-slate-100 mb-8">
              İletişim Bilgileri
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group flex items-start gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-xl">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-100 mb-1">
                      {info.title}
                    </h3>
                    <a 
                      href={info.link} 
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-slate-100 mb-6">
              Mesaj Gönderin
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Ad Soyad *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    E-posta *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Telefon *
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Hizmet Türü *
                </label>
                <select 
                  name="service"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Hizmet seçiniz</option>
                  <option value="Mobil Uygulama Geliştirme">Mobil Uygulama Geliştirme</option>
                  <option value="Web Sitesi Tasarımı">Web Sitesi Tasarımı</option>
                  <option value="Donanım Tamiri">Donanım Tamiri</option>
                  <option value="Dijital Pazarlama">Dijital Pazarlama</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Mesajınız *
                </label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Projeniz hakkında detayları yazın..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                WhatsApp & E-posta ile Gönder
              </button>
            </form>
          </div>
        </div>
      </Section>

      <WaveDivider />

      {/* Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Size sunduğumuz kapsamlı yazılım ve teknoloji çözümleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip />

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              Hemen Başlayalım
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Projenizi hayata geçirmek için hemen bizimle iletişime geçin
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
                href="mailto:novexistech@gmail.com" 
                className="inline-flex items-center gap-2 bg-slate-700 text-slate-100 px-6 py-3 rounded-lg font-medium hover:bg-slate-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
