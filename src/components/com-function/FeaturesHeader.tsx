import { Sparkles, Grid3x3, Image } from "lucide-react";

export function FeaturesHeader() {
  return (
    <div className="w-full border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white dark:border-neutral-800 dark:from-black dark:to-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-gray-900 dark:text-neutral-100">
            Функции, которые вдохновляют
          </h1>
          <p className="mb-12 text-gray-600 dark:text-neutral-400">
            Находите, упорядочивайте и делитесь идеями с помощью мощных
            инструментов, созданных для того, чтобы работа с визуальным
            вдохновением была лёгкой и приятной.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <Sparkles className="h-7 w-7 text-gray-700 dark:text-neutral-200" />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <Grid3x3 className="h-7 w-7 text-gray-700 dark:text-neutral-200" />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <Image className="h-7 w-7 text-gray-700 dark:text-neutral-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
