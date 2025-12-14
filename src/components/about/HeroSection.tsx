import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">

          {/* Иконка */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground shadow-lg mx-auto">
            <Sparkles className="w-8 h-8" />
          </div>

          <h1 className="mx-auto max-w-4xl">
            О нас
          </h1>

          <p className="mx-auto max-w-2xl text-muted-foreground">
            Мы создаём платформу визуальных открытий, которая вдохновляет на творчество
            и помогает миллионам людей находить и сохранять идеи для своих проектов и увлечений.
          </p>

          {/* Декоративные элементы */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />

        </div>
      </div>
    </section>
  );
}
