import { Heart, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Вдохновляем на творчество",
    description: "Мы верим, что каждый имеет потенциал создать что-то прекрасное. Наша платформа предоставляет инструменты и вдохновение для воплощения идей в жизнь.",
  },
  {
    icon: Users,
    title: "Создаём сообщество",
    description: "Общайтесь с единомышленниками, делитесь своими работами и открывайте новые перспективы в нашем разнообразном глобальном сообществе.",
  },
  {
    icon: Lightbulb,
    title: "Открываем возможности",
    description: "Мы помогаем легко находить и организовывать важные идеи. От DIY1проектов до профессиональных работ — мы показываем, что возможно.",
  },
];

export function MissionValues() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="mb-4">Наша миссия и ценности</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Нами движет простая вера: каждый заслуживает пространства для исследования, 
            творчества и обмена своими увлечениями.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-white mb-4">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}