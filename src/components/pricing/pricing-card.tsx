import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  ctaText,
  isPopular = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-lg border bg-white p-8 shadow-sm transition-all hover:shadow-md dark:bg-zinc-900 ${
        isPopular ? 'border-zinc-900 ring-2 ring-zinc-900 dark:border-zinc-100 dark:ring-zinc-100' : 'border-zinc-200 dark:border-zinc-800'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-zinc-900 px-4 py-1 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
            Самый популярный
          </span>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
        <div className="mb-2 flex items-baseline gap-1">
          <span className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {price}
          </span>
          <span className="text-zinc-600 dark:text-zinc-400">/мес</span>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>

      <ul className="mb-8 flex-grow space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="mt-0.5 size-5 flex-shrink-0 text-zinc-900 dark:text-zinc-100" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full rounded-md px-4 py-3 font-medium transition-colors ${
          isPopular
            ? 'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200'
            : 'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700'
        }`}
      >
        {ctaText}
      </button>
    </div>
  );
}