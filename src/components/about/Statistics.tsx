import type { ComponentType } from "react";
import { Users, Bookmark, Globe, Heart } from "lucide-react";

type StatItem = {
  icon: ComponentType<{ className?: string }>;
  value: string;
  label: string;
};

const STATS: StatItem[] = [
  {
    icon: Users,
    value: "1M+",
    label: "Активных пользователей",
  },
  {
    icon: Bookmark,
    value: "10M+",
    label: "Сохранённых идей",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Стран",
  },
  {
    icon: Heart,
    value: "100M+",
    label: "Опубликованных вдохновений",
  },
];

export function Statistics() {
  return (
    <section className="bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">

        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <li
              key={label}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-7 w-7" />
              </div>

              <strong className="mb-1 text-2xl font-semibold">
                {value}
              </strong>

              <span className="text-muted-foreground">
                {label}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
