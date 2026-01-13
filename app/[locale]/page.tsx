import { setRequestLocale } from 'next-intl/server';
import { HeroCarousel } from "@/components/hero-carousel";
import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";
import { Expertise } from "@/components/expertise";
import { Invest } from "@/components/invest";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <HeroCarousel />
      <Intro />
      <Projects />
      <Expertise />
      <Invest />
    </main>
  );
}
