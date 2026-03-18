"use client";

import type { ComponentType } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Ефимов Дмитрий",
    role: "Backend",
    bio: "Инженер серверной разработки, отвечающий за архитектуру и логику работы платформы. Занимается проектированием API, обработкой пользовательских данных и обеспечением стабильной работы сервиса. Увлекается созданием масштабируемых систем и оптимизацией производительности веб-приложений.",
    image:
      "https://ya.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fi.sstatic.net%2FrYsym.png&lr=51&pos=53&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%20%D0%B8%D0%B7%20%D0%B3%D0%B8%D1%82%D1%85%D0%B0%D0%B1%D0%B0",
  },
  {
    name: "Леликов Иван",
    role: "Frontend",
    bio: "Frontend-разработчик, создающий удобный и современный пользовательский интерфейс. Отвечает за визуальную часть платформы, интерактивность и адаптивность интерфейса. Стремится сделать взаимодействие пользователя с сервисом максимально простым, быстрым и интуитивно понятным.",
    image:
      "https://ya.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fi.sstatic.net%2FrYsym.png&lr=51&pos=53&rpt=simage&text=%D1%84%D0%BE%D1%82%D0%BE%20%D0%B8%D0%B7%20%D0%B3%D0%B8%D1%82%D1%85%D0%B0%D0%B1%D0%B0",
  },
];

export function TeamSection() {
  return (
    <section className="bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">

        <header className="mb-12 text-center">
          <h2 className="mb-4">Наша команда</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Разнообразная группа специалистов, работающих вместе,
            чтобы сделать вдохновение доступным для каждого.
          </p>
        </header>

        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {TEAM.map(({ name, role, bio, image }) => (
            <li key={name} className="text-center">
              <div className="mb-4 flex justify-center">
                <ImageWithFallback
                  src={image}
                  alt={name}
                  className="
                    h-32 w-32 rounded-full object-cover
                    border-4 border-background
                    shadow-lg
                  "
                />
              </div>

              <h3 className="mb-1">{name}</h3>

              <p className="mb-2 text-sm font-medium text-foreground">
                {role}
              </p>

              <p className="text-sm text-muted-foreground">
                {bio}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
