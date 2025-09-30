export const PRODUCTS = [
  {
    id: 1,
    slug: "dondurma-kutulari",
    title: "Dondurma Kutuları",
    category: "Strafor Çözümleri",
    summary: "Soğuk zincire uygun, darbeye dayanıklı ve hafif strafor dondurma kutuları.",
    specs: {
      width: "Özel ölçü",
      height: "—",
      lambda: "—",
      usage: "Üretim, depolama ve sevkiyat süreçlerinde ürün koruma",
    },
    images: ["/images/product-dondurma.svg"],
    pdfDownloadUrl: "#",
  },
  {
    id: 2,
    slug: "firin-koruyucu-strafor",
    title: "Fırın Koruyucu Strafor",
    category: "Strafor Çözümleri",
    summary: "Sevkiyat ve depolama sırasında fırın gövdelerini darbe ve çizilmelere karşı koruyan ölçüye özel strafor.",
    specs: {
      width: "Özel ölçü",
      height: "—",
      lambda: "—",
      usage: "Beyaz eşya sevkiyatı ve depolama",
    },
    images: ["/images/product-firin-koruyucu.svg"],
    pdfDownloadUrl: "#",
  },
  {
    id: 3,
    slug: "davlumbaz-kose-koruyucular",
    title: "Davlumbaz (Köşe Koruyucular)",
    category: "Strafor Çözümleri",
    summary: "Davlumbaz ve benzeri cihazların köşe/kenarlarını koruyan, darbe emici strafor köşe parçaları.",
    specs: {
      width: "Özel ölçü",
      height: "—",
      lambda: "—",
      usage: "Köşe/kenar koruma, sevkiyat ve depolama",
    },
    images: ["/images/product-davlumbaz-kose.svg"],
    pdfDownloadUrl: "#",
  },
  {
    id: 4,
    slug: "ocak-koruyucu",
    title: "Ocak Koruyucu",
    category: "Strafor Çözümleri",
    summary: "Cam ve metal yüzeyleri darbe/çizilmeye karşı koruyan, ölçüye özel strafor koruyucular.",
    specs: {
      width: "Özel ölçü",
      height: "—",
      lambda: "—",
      usage: "Ocak ve benzeri cihazların sevkiyat koruması",
    },
    images: ["/images/product-ocak-koruyucu.svg"],
    pdfDownloadUrl: "#",
  },
  {
    id: 5,
    slug: "isitma-panelleri",
    title: "Isıtma Panelleri",
    category: "Isıtma Panelleri",
    summary: "Strafor ısı yalıtım panelleri; inşaatlarınızda, evlerinizde ve yapılarınızda ısı yalıtımı için güvenilir ve verimli çözüm sunar.",
    specs: {
      width: "100–150 cm",
      height: "—",
      lambda: "—",
      usage: "Duvar, çatı, döşeme ve temel uygulamalarında ısı yalıtımı",
    },
    images: ["/images/product-isitma-paneli.svg"],
    pdfDownloadUrl: "#",
  },
];

export function getAllCategories() {
  const set = new Set(PRODUCTS.map((p) => p.category));
  return ["Tümü", ...Array.from(set)];
}

export function findProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}