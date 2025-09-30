export default function ContactChannels() {
  const channels = [
    {
      title: "Telefon",
      desc: "Teknik destek ve satış için hemen arayın",
      link: "tel:+903642549550",
      linkText: "+90 364 254 95 50",
      icon: "📞",
    },
    {
      title: "E-posta",
      desc: "Detaylı bilgi ve teklif için yazın",
      link: "mailto:info@hitityalitim.com.tr",
      linkText: "info@hitityalitim.com.tr",
      icon: "✉️",
    },
    {
      title: "WhatsApp",
      desc: "Hızlı mesajlaşma ile anında yanıt",
      link: "https://wa.me/905321234567",
      linkText: "WhatsApp'ta Yaz",
      icon: "💬",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900">İletişim Kanalları</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((c, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-white border p-6 shadow-sm hover:shadow-xl transition-all duration-300 card-hover overflow-hidden"
              style={{ borderColor: "color-mix(in srgb, var(--btn-red) 25%, transparent)" }}
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="font-semibold text-neutral-900 text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{c.desc}</p>
              <a
                href={c.link}
                className="mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold shadow"
                style={{ backgroundColor: "var(--btn-red)", color: "#fff" }}
              >
                {c.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


