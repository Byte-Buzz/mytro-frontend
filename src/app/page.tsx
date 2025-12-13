import { ThemeProvider } from "@/components/landing/ThemeProvider";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ShowcaseSection } from "@/components/landing/ShowcaseSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="inspire-theme">
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ShowcaseSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
