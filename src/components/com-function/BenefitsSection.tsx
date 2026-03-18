import { Check } from "lucide-react";

const benefits = [
  {
    title: "Просто и интуитивно",
    description:
      "Чистый и понятный интерфейс. Никакого обучения — только чистое вдохновение.",
  },
  {
    title: "Сообщество создаёт",
    description:
      "Присоединяйтесь к миллионам создателей и открывайте бесконечное вдохновение от активного сообщества.",
  },
  {
    title: "Постоянно развивается",
    description:
      "Регулярные обновления с новыми функциями, основанными на обратной связи и современных трендах.",
  },
];

export function BenefitsSection() {
  return (
    <div className="w-full bg-white dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900 dark:text-neutral-100">
            Почему выбирают нас
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-neutral-400">
            Создано с учётом ваших потребностей — наша платформа обеспечивает
            лучший опыт визуального поиска и организации.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-neutral-800 bg-gray-900 dark:bg-neutral-900">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-gray-900 dark:text-neutral-100">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-neutral-400">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
