import { CheckCircle2 } from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "Начало пути",
    description:
      "Основание компании с целью демократизировать визуальный поиск и творческое вдохновение.",
  },
  {
    year: "2021",
    title: "Рост сообщества",
    description:
      "Достигли 100 тыс. пользователей и выпустили первое мобильное приложение.",
  },
  {
    year: "2022",
    title: "Глобальная экспансия",
    description:
      "Расширили присутствие до 50+ стран с поддержкой нескольких языков.",
  },
  {
    year: "2023",
    title: "AI-поиск",
    description:
      "Внедрили интеллектуальные рекомендации и функции визуального поиска.",
  },
  {
    year: "2024",
    title: "1 млн+ пользователей",
    description:
      "Отпраздновали достижение миллиона активных пользователей и 10 млн сохранённых идей.",
  },
];

export function Timeline() {
  return (
    <section className="w-full bg-white py-20 transition-colors dark:bg-black">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-gray-900 dark:text-neutral-100">
            Наш путь
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-neutral-400">
            От небольшой идеи до масштабной платформы — шаг за шагом, год за годом.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gray-200 dark:bg-neutral-800 md:left-1/2 md:block" />

          <div className="space-y-14">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                      <span className="mb-3 inline-block rounded-lg border border-gray-300 px-3 py-1 text-sm font-medium text-gray-900 dark:border-neutral-700 dark:text-neutral-100">
                        {milestone.year}
                      </span>
                      <h3 className="mb-2 text-gray-900 dark:text-neutral-100">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-neutral-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="absolute left-4 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white shadow-md dark:border-neutral-700 dark:bg-black md:left-1/2 md:-translate-x-1/2">
                    <CheckCircle2 className="h-5 w-5 text-gray-900 dark:text-neutral-100" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
