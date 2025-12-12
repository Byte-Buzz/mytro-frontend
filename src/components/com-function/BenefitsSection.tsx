import { Check } from "lucide-react";

const benefits = [
  {
    title: "Молниеносная скорость",
    description: "Оптимизированная производительность обеспечивает плавную прокрутку и мгновенную загрузку, даже с тысячами пинов."
  },
  {
    title: "Просто и интуитивно",
    description: "Чистый и понятный интерфейс. Никакого обучения — только чистое вдохновение."
  },
  {
    title: "Кроссплатформенность",
    description: "Бесшовный опыт на всех ваших устройствах с автоматической облачной синхронизацией."
  },
  {
    title: "Фокус на приватности",
    description: "Ваши данные — только ваши. Контролируйте, что делиться, и держите свои доски приватными, когда хотите."
  },
  {
    title: "Сообщество создаёт",
    description: "Присоединяйтесь к миллионам создателей и открывайте бесконечное вдохновение от активного сообщества."
  },
  {
    title: "Постоянно развивается",
    description: "Регулярные обновления с новыми функциями, основанными на обратной связи и современных трендах."
  }
];


export function BenefitsSection() {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Почему выбирают нас</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Создано с учётом ваших потребностей — наша платформа обеспечивает лучший опыт визуального поиска и организации.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-gray-900 rounded-xl">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
