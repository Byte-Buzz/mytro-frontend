import { Card, CardContent } from "@/components/ui/card";
import { Grid3x3, Sparkles, Users, Lock } from "lucide-react";

const features = [
  {
    icon: Grid3x3,
    title: "Визуальная организация",
    description: "Создавайте красивые доски, чтобы организовывать идеи по темам, проектам или настроению. Всё остаётся структурированным и легко доступным."
  },
  {
    icon: Sparkles,
    title: "Открытие с помощью ИИ",
    description: "Получайте персонализированные рекомендации на основе ваших интересов. Наш умный алгоритм помогает находить контент, который вам понравится."
  },
  {
    icon: Users,
    title: "Совместная работа и обмен",
    description: "Приглашайте участников команды для совместной работы над досками. Работайте вместе над творческими проектами."
  },
  {
    icon: Lock,
    title: "Приватность и безопасность",
    description: "Держите личные доски приватными или делитесь ими с миром. Вы полностью контролируете свой контент."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl mb-4">
            Всё, что нужно для вдохновения
          </h2>
          <p className="text-xl text-muted-foreground">
            Мощные инструменты, созданные для того, чтобы вы могли собирать, организовывать и делиться своим творческим вдохновением.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
