import { setRequestLocale } from 'next-intl/server';
import { Header } from "@/components/header";
import { HeroCarousel } from "@/components/hero-carousel";
import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";
import { Expertise } from "@/components/expertise";
import { Invest } from "@/components/invest";
import { Footer } from "@/components/footer";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      <HeroCarousel />
      <Intro />
      <Projects />
      <Expertise />
      <Invest />
      <Footer />
    </main>
  );
}
