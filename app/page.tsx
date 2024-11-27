import { Preloader } from "@/components/preloader";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ArticlesSection } from "@/components/sections/articles";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Preloader />
      <HeroSection />
      <AboutSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ArticlesSection />
      {/* <CTASection /> */}
    </main>
  );
}
