import { HeroSection } from "@/components/about/HeroSection";
import { MissionValues } from "@/components/about/MissionValues";
import { TeamSection } from "@/components/about/TeamSection";
import { Timeline } from "@/components/about/Timeline";
import { Statistics } from "@/components/about/Statistics";
import { CallToAction } from "@/components/about/CallToAction";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <MissionValues />
      <TeamSection />
      <Timeline />
      <Statistics />
      <CallToAction />
    </div>
  );
}
