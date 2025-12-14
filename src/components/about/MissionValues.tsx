import type { ComponentType } from "react";
import { Heart, Users, Lightbulb } from "lucide-react";

type ValueItem = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const VALUES: ValueItem[] = [
  {
    icon: Heart,
    title: "Вдохновляем на творчество",
    description:
      "Мы верим, что каждый имеет потенциал создать что-то прекрасное. Наша платформа предоставляет инструменты и вдохновение для воплощения идей в жизнь.",
  },
  {
    icon: Users,
    title: "Создаём сообщество",
    description:
      "Общайтесь с единомышленниками, делитесь своими работами и открывайте новые перспективы в нашем разнообразном глобальном сообществе.",
  },
  {
    icon: Lightbulb,
    title: "Открываем возможности",
    description:
      "Мы помогаем легко находить и организовывать важные идеи. От DIY-проектов до профессиональных работ — мы показываем, что возможно.",
  },
];

export function MissionValues() {
  return (
    <section className="bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">

        <header className="mb-12 text-center">
          <h2 className="mb-4">Наша миссия и ценности</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Нами движет простая вера: каждый заслуживает пространства для исследования,
            творчества и обмена своими увлечениями.
          </p>
        </header>

        <ul className="grid gap-6 md:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3">{title}</h3>

              <p className="text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
