import { Sparkles, Grid3x3, Image } from "lucide-react";

export function FeaturesHeader() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-4 text-gray-900 dark:text-white">Функции, которые вдохновляют</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Находите, упорядочивайте и делитесь идеями с помощью мощных инструментов, 
            созданных для того, чтобы работа с визуальным вдохновением была лёгкой и приятной.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <Sparkles className="w-7 h-7 text-gray-700 dark:text-gray-200" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <Grid3x3 className="w-7 h-7 text-gray-700 dark:text-gray-200" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <Image className="w-7 h-7 text-gray-700 dark:text-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
