import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1">
      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl mb-6 group-hover:bg-gray-900 transition-colors duration-300">
        <Icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
