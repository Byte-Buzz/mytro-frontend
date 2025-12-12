import { Sparkles, Grid3x3, Image } from "lucide-react";

export function FeaturesHeader() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-4">Функции, которые вдохновляют</h1>
          <p className="text-gray-600 mb-12">
            Находите, упорядочивайте и делитесь идеями с помощью мощных инструментов, 
            созданных для того, чтобы работа с визуальным вдохновением была лёгкой и приятной.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <Sparkles className="w-7 h-7 text-gray-700" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <Grid3x3 className="w-7 h-7 text-gray-700" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <Image className="w-7 h-7 text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
