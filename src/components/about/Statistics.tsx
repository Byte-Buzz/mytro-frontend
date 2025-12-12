import { Users, Bookmark, Globe, Heart } from "lucide-react";

const stats = [
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
    <section className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900 text-white mb-4">
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="mb-1">{stat.value}</div>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}