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
    name: "Сара Чен",
    role: "Сооснователь и CEO",
    bio: "Бывший продуктовый дизайнер с увлечением визуальным сторителлингом и созданием сообществ.",
    image:
      "https://images.unsplash.com/photo-1623594675959-02360202d4d6?auto=format&fit=crop&w=1080&q=80",
  },
  {
    name: "Маркус Джонсон",
    role: "Сооснователь и CTO",
    bio: "Инженер и художник, верящий, что технологии должны усиливать человеческое творчество.",
    image:
      "https://images.unsplash.com/photo-1672685667592-0392f458f46f?auto=format&fit=crop&w=1080&q=80",
  },
  {
    name: "Алекс Ривера",
    role: "Руководитель отдела дизайна",
    bio: "Эксперт по дизайн-системам, сосредоточенный на создании красивых и доступных интерфейсов.",
    image:
      "https://images.unsplash.com/photo-1724941407869-f8fb46a3cc38?auto=format&fit=crop&w=1080&q=80",
  },
  {
    name: "Джордан Ли",
    role: "Руководитель сообщества",
    bio: "Активист сообщества, посвятивший себя созданию значимых связей между творцами.",
    image:
      "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?auto=format&fit=crop&w=1080&q=80",
  },
];

export function TeamSection() {
  return (
    <section className="bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">

        <header className="mb-12 text-center">
          <h2 className="mb-4">Наша команда</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Разнообразная группа творцов, строителей и мечтателей, работающих вместе,
            чтобы сделать вдохновение доступным для каждого.
          </p>
        </header>

        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
