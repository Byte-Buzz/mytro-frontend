import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

interface DeepDiveFeatureProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

export function DeepDiveFeature({
  title,
  description,
  imageUrl,
  imageAlt,
  reverse = false,
}: DeepDiveFeatureProps) {
  return (
    <div className="w-full bg-gray-50 py-20 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex flex-col items-center gap-12 lg:gap-16 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="max-w-xl text-gray-900 dark:text-neutral-100">
              {title}
            </h2>
            <p className="max-w-xl text-gray-600 dark:text-neutral-400">
              {description}
            </p>
          </div>

          {/* Image Mockup */}
          <div className="w-full flex-1">
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
              <ImageWithFallback
                src={imageUrl}
                alt={imageAlt}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
