"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pin, ArrowLeft, Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-zinc-50 p-6">
      <Card className="max-w-2xl w-full shadow-lg border-zinc-200/60">
        <CardContent className="pt-12 pb-10 px-8 md:px-12">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Decorative Image */}
            <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden mb-2">
              <img
                src="https://images.unsplash.com/photo-1580920900532-af6fcf2110df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1pbmltYWwlMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzIwMjcwODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="В разработке"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-md">
                <Pin className="size-6 text-zinc-700" />
              </div>
            </div>

            {/* Icon Badge */}
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-zinc-100 rounded-full">
              <Sparkles className="size-4 text-zinc-600" />
              <span className="text-sm text-zinc-600">Скоро</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl tracking-tight text-zinc-900">
                Мы Создаём Что-то Потрясающее
              </h1>
              
              {/* Subtext */}
              <p className="text-zinc-500 max-w-md mx-auto">
                Наша команда создаёт идеальную доску для вашего вдохновения. 
                Мы добавляем последние штрихи и вернёмся прежде, чем вы успеете сказать «эстетика».
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="gap-2 min-w-[180px]"
                onClick={() => window.location.href = '/'}
              >
                <ArrowLeft className="size-4" />
                Вернуться домой
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 min-w-[180px] border-zinc-300 hover:bg-zinc-100"
              >
                <Pin className="size-4" />
                Смотреть пины
              </Button>
            </div>

            {/* Footer Note */}
            <p className="text-xs text-zinc-400 pt-6">
              Спасибо за ваше терпение! Мы уведомим вас, когда всё будет готово.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}