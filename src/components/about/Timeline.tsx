import { CheckCircle2 } from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Founded with a vision to democratize visual discovery and creative inspiration.",
  },
  {
    year: "2021",
    title: "Community Growth",
    description: "Reached 100K users and launched our first mobile app.",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded to 50+ countries with multi-language support.",
  },
  {
    year: "2023",
    title: "AI-Powered Discovery",
    description: "Introduced intelligent recommendations and visual search features.",
  },
  {
    year: "2024",
    title: "1M+ Users",
    description: "Celebrated reaching one million active users and 10M saved ideas.",
  },
];

export function Timeline() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From a small idea to a thriving platform, here&apos;s how we&apos;ve grown together.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="inline-block px-3 py-1 bg-slate-900 text-white rounded-lg mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="mb-2">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border-4 border-white shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
