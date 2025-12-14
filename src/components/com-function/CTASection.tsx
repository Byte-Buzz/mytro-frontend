import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 p-12 md:p-16 text-center">
          <h2 className="mb-4 text-gray-900 dark:text-white">Начните исследовать прямо сейчас</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Присоединяйтесь к нашему сообществу создателей и открывайте бесконечное вдохновение. Ваша следующая большая идея — всего в одном клике.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-8 py-4 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 shadow-sm">
              Начать бесплатно
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-gray-500 dark:text-gray-400 mt-6">
            Без карты • Бесплатно навсегда
          </p>
        </div>
      </div>
    </div>
  );
}
