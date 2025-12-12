import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 px-4 bg-slate-900 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-white">Начните своё творческое путешествие</h2>
        <p className="mb-8 text-slate-300 max-w-2xl mx-auto">
          Присоединяйтесь к миллионам творцов, которые находят вдохновение, сохраняют идеи 
          и воплощают свои мечты в жизнь. Ваш следующий крутой проект начинается прямо здесь.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-colors duration-200">
            Начать сейчас
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <a href="/function" className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors duration-200 inline-block">
           Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
}