import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WaveDivider from "@/components/ui/WaveDivider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Novexis Tech | Yazılım Destek ve Mobil Projeler",
  description:
    "Yazılım destek, mobil projeler, donanım tamiri, yedek parça ve reklam siteleri çözümleri. Ne Yesek mobil uygulaması ve daha fazlası.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Novexis Tech | Yazılım Destek ve Mobil Projeler",
    description:
      "Yazılım destek, mobil projeler, donanım tamiri, yedek parça ve reklam siteleri çözümleri. Ne Yesek mobil uygulaması ve daha fazlası.",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Novexis Tech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novexis Tech | Yazılım Destek ve Mobil Projeler",
    description:
      "Yazılım destek, mobil projeler, donanım tamiri, yedek parça ve reklam siteleri çözümleri. Ne Yesek mobil uygulaması ve daha fazlası.",
    images: ["/images/logo.png"],
  },
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <Header />
        {children}
        <WaveDivider />
        <Footer />
      </body>
    </html>
  );
}
