import { Check } from "lucide-react";

const benefits = [
  {
    title: "Lightning Fast",
    description: "Optimized performance ensures smooth scrolling and instant loading, even with thousands of pins."
  },
  {
    title: "Simple & Intuitive",
    description: "Clean interface designed for ease of use. No learning curve, just pure inspiration."
  },
  {
    title: "Cross-Platform",
    description: "Seamless experience across all your devices with automatic cloud sync."
  },
  {
    title: "Privacy Focused",
    description: "Your data is yours. Control what you share and keep your boards private when you want."
  },
  {
    title: "Community Driven",
    description: "Join millions of creators and discover endless inspiration from a vibrant community."
  },
  {
    title: "Always Improving",
    description: "Regular updates with new features based on user feedback and the latest trends."
  }
];

export function BenefitsSection() {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built with your needs in mind, our platform delivers the best experience for visual discovery and organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-gray-900 rounded-xl">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
