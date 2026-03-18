import {
  Bookmark,
  FolderOpen,
  Slack,
  Search,
  Upload,
  Users,
  Grid3x3,
  Smartphone,
} from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: Bookmark,
    title: "Сохраняйте пины",
    description:
      "Сохраняйте любые идеи и изображения в личные или публичные коллекции одним кликом.",
  },
  {
    icon: FolderOpen,
    title: "Создавайте доски",
    description:
      "Организуйте пины по тематическим доскам — для удобной навигации и визуального порядка.",
  },
  {
    icon: Slack,
    title: "Умная лента открытий",
    description:
      "Получайте персональные рекомендации на основе ваших интересов и поведения.",
  },
  {
    icon: Search,
    title: "Умный поиск",
    description:
      "Ищите по тексту, ключевым словам или используйте распознавание изображений.",
  },
  {
    icon: Upload,
    title: "Загрузка пинов",
    description:
      "Загружайте свои изображения и идеи прямо в ленту и делитесь с сообществом.",
  },
  {
    icon: Grid3x3,
    title: "Адаптивная сетка Masonry",
    description:
      "Красивая responsive-сетка в стиле Pinterest, идеально подстраивается под любой экран.",
  },
];

export function FeatureGrid() {
  return (
    <div className="w-full bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-gray-900 dark:text-neutral-100">
            Всё, что вам нужно
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-neutral-400">
            Мощный набор функций, созданный для того, чтобы вы легко находили,
            сохраняли и упорядочивали визуальное вдохновение.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
