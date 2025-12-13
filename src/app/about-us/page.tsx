import { ThemeProvider } from "@/components/landing/ThemeProvider";
import { HeroSection } from "@/components/about/HeroSection";
import { Header } from "@/components/landing/Header";
import { MissionValues } from "@/components/about/MissionValues";
import { TeamSection } from "@/components/about/TeamSection";
import { Timeline } from "@/components/about/Timeline";
import { Statistics } from "@/components/about/Statistics";
import { CallToAction } from "@/components/about/CallToAction";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="inspire-theme">
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <MissionValues />
          <TeamSection />
          <Timeline />
          <Statistics />
          <CallToAction />
        </main>
      </div>
    </ThemeProvider>
  );
}
