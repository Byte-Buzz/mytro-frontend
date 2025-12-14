import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 px-4 bg-background border-t border-border">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="mb-4">
          Начните своё творческое путешествие
        </h2>

        <p className="mb-8 text-muted-foreground max-w-2xl mx-auto">
          Присоединяйтесь к миллионам творцов, которые находят вдохновение,
          сохраняют идеи и воплощают свои мечты в жизнь.
          Ваш следующий крутой проект начинается прямо здесь.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Начать сейчас
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="/function"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
}
