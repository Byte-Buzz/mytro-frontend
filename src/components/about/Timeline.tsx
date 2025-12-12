import { CheckCircle2 } from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "Начало пути",
    description: "Основание компании с целью демократизировать визуальный поиск и творческое вдохновение.",
  },
  {
    year: "2021",
    title: "Рост сообщества",
    description: "Достигли 100 тыс. пользователей и выпустили первое мобильное приложение.",
  },
  {
    year: "2022",
    title: "Глобальная экспансия",
    description: "Расширили присутствие до 50+ стран с поддержкой нескольких языков.",
  },
  {
    year: "2023",
    title: "AI-поиск",
    description: "Внедрили интеллектуальные рекомендации и функции визуального поиска.",
  },
  {
    year: "2024",
    title: "1 млн+ пользователей",
    description: "Отпраздновали достижение миллиона активных пользователей и 10 млн сохранённых идей.",
  },
];

export function Timeline() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="mb-4">Наш путь</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            От небольшой идеи до процветающей платформы — вот как мы росли вместе.
          </p>
        </div>
        
        <div className="relative">
          {/* Линия таймлайна */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Контент */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="inline-block px-3 py-1 bg-slate-900 text-white rounded-lg mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="mb-2">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Центральная точка */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border-4 border-white shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Пустое пространство для чередующегося макета */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}