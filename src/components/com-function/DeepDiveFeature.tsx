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
  reverse = false 
}: DeepDiveFeatureProps) {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="max-w-xl text-gray-900 dark:text-white">{title}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              {description}
            </p>
          </div>
          
          {/* Image Mockup */}
          <div className="flex-1 w-full">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <ImageWithFallback
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
