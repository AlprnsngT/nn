import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import Timeline from "@/components/about/Timeline";
import CTA from "@/components/about/CTA";
import WaveDivider from "@/components/ui/WaveDivider";

export const metadata = {
  title: "Hakkımızda - Novexis Tech",
  description: "Yazılım destek, mobil projeler, donanım tamiri ve reklam çözümleri ile dijital dünyada öncü.",
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      <AboutHero />
      <MissionVision />
      <Values />
      <WaveDivider />
      <Timeline />
      <WaveDivider flip />
      <CTA />
    </main>
  );
}
