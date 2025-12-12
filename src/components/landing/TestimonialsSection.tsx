import { Card, CardContent } from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Сара Митчелл",
    role: "Дизайнер интерьеров",
    avatar:
      "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2NDU2NTAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "Эта платформа полностью изменила то, как я создаю мудборды для клиентов. Визуальный поиск и умные коллекции экономят мне часы каждую неделю.",
  },
  {
    id: 2,
    name: "Маркус Чен",
    role: "Креативный директор",
    avatar:
      "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3NjQ1NjUwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "Как руководителю команды, мне незаменима функция совместных досок. Вся моя команда может добавлять идеи, и мы всегда остаёмся на одной волне.",
  },
  {
    id: 3,
    name: "Елена Родригес",
    role: "Лайфстайл-блогер",
    avatar:
      "https://images.unsplash.com/photo-1595745688820-1a8bca9dd00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGNyZWF0aXZlJTIwcGVyc29ufGVufDF8fHx8MTc2NDY2ODQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "Я использую это ежедневно для планирования контента. Возможность упорядочивать вдохновение по темам и легко делиться подборками с аудиторией — настоящий прорыв.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl mb-4">
            Нас любят создатели по всему миру
          </h2>
          <p className="text-xl text-muted-foreground">
            Присоединяйтесь к тысячам творческих профессионалов,
            которые доверяют нам организацию своего вдохновения.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border rounded-2xl shadow-sm"
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-primary/30" />
                <p className="text-muted-foreground">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
