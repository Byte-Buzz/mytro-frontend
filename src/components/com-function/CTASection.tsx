import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <div className="w-full bg-white dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-lg dark:border-neutral-800 dark:bg-neutral-900 md:p-16">
          <h2 className="mb-4 text-gray-900 dark:text-neutral-100">
            Начните исследовать прямо сейчас
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600 dark:text-neutral-400">
            Присоединяйтесь к нашему сообществу создателей и открывайте бесконечное
            вдохновение. Ваша следующая большая идея — всего в одном клике.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-8 py-4 text-white shadow-sm transition-colors duration-200 hover:bg-gray-800 dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-200">
              Начать бесплатно
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-6 text-gray-500 dark:text-neutral-500">
            Без карты • Бесплатно навсегда
          </p>
        </div>
      </div>
    </div>
  );
}
