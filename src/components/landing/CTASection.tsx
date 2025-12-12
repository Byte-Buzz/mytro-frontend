import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border rounded-3xl shadow-lg overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl">
                Начните своё творческое путешествие уже сегодня
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Присоединяйтесь к миллионам создателей, которые организуют своё вдохновение вместе с нами. 
                Начните бесплатно — банковская карта не требуется.
              </p>
            </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-xl group h-12 w-48">
              Начать бесплатно
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="/function" className="inline-flex items-center justify-center h-12 w-48 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-colors duration-200">
              Узнать больше
            </a>
          </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
