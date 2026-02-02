import { PricingCard } from '@/components/pricing/pricing-card';

export default function App() {
  const pricingPlans = [
    {
      title: 'Бесплатно',
      price: '0₽',
      description: 'Для тех, кто любит халяву',
      features: [
        'Безлимитные пины (да, серьёзно)',
        'Безлимитные доски (мы не шутим)',
        'Без рекламы (мы её тоже ненавидим)',
        'Загрузка изображений Full HD',
        'Доступ к сообществу',
        'Действительно бесплатно',
      ],
      ctaText: 'Начать бесплатно',
      isPopular: false,
    },
    {
      title: 'Всё ещё бесплатно',
      price: '0.00₽',
      description: 'Всё из тарифа «Бесплатно», плюс... ничего',
      features: [
        'Все функции тарифа «Бесплатно» (а это всё)',
        'Приоритетная поддержка (такая же)',
        'Продвинутая аналитика (шутим)',
        'Свой домен (никогда не будет)',
        'White-label опция (тоже нет)',
        'Мы серьёзно, это бесплатно',
      ],
      ctaText: 'Ничего не платить',
      isPopular: true,
    },
    {
      title: 'Абсолютно бесплатно',
      price: 'Бесплатно навсегда',
      description: 'Для скептиков среди нас',
      features: [
        'Всё из тарифа «Всё ещё бесплатно»',
        'Без скрытых платежей (обещаем)',
        'Не нужна банковская карта (очевидно)',
        'Отмена в любое время (но отменять нечего)',
        'Возврат денег (нуля рублей)',
        'Серьёзно, просто пользуйтесь',
      ],
      ctaText: 'Начать пинить',
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Тарифные планы
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Выберите идеальный план для своих нужд. Подсказка: они все одинаковые и все бесплатные.
            <br />
            <span className="text-sm italic">
              (Серьёзно, мы просто не смогли определиться с ценами, поэтому забили.)
            </span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              ctaText={plan.ctaText}
              isPopular={plan.isPopular}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Никаких трюков, никаких пробных периодов, никаких карт. Просто бесплатное приложение от разработчиков, которым надоели абсурдные страницы с тарифами.
          </p>
        </div>
      </div>
    </div>
  );
}