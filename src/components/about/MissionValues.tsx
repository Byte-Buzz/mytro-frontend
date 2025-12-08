import { Heart, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Inspire Creativity",
    description: "We believe everyone has the potential to create something beautiful. Our platform provides the tools and inspiration to bring ideas to life.",
  },
  {
    icon: Users,
    title: "Build Community",
    description: "Connect with like-minded creators, share your work, and discover new perspectives from a diverse global community.",
  },
  {
    icon: Lightbulb,
    title: "Empower Discovery",
    description: "Make it easy to find and organize ideas that matter. From DIY projects to professional work, we help you discover what&apos;s possible.",
  },
];

export function MissionValues() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Mission & Values</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We&apos;re driven by a simple belief: everyone deserves a space to explore, 
            create, and share their passions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-white mb-4">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
