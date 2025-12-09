import { Header } from "@/components/landing/Header";
import { FeaturesHeader } from "@/components/com-function/FeaturesHeader";
import { FeatureGrid } from "@/components/com-function/FeatureGrid";
import { DeepDiveSections } from "@/components/com-function/DeepDiveSections";
import { BenefitsSection } from "@/components/com-function/BenefitsSection";
import { CTASection } from "@/components/com-function/CTASection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
      <FeaturesHeader />
      <FeatureGrid />
      <DeepDiveSections />
      <BenefitsSection />
      <CTASection />
      </main>
    </div>
  );
}
