import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 transition-colors duration-300 group-hover:bg-gray-900 dark:bg-neutral-800 dark:group-hover:bg-neutral-100">
        <Icon className="h-6 w-6 text-gray-700 transition-colors duration-300 group-hover:text-white dark:text-neutral-200 dark:group-hover:text-black" />
      </div>
      <h3 className="mb-3 text-gray-900 dark:text-neutral-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
}
