import { MasonryGrid } from "./MasonryGrid";

const showcasePins = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?...",
    title: "Минималистичная гостиная",
    category: "Интерьер",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1764345713176-3fd77a47bfd9?...",
    title: "Пастельное абстрактное искусство",
    category: "Арт и дизайн",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1519662978799-2f05096d3636?...",
    title: "Современное здание",
    category: "Архитектура",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?...",
    title: "Горный пейзаж",
    category: "Природа",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1566236041308-e01bc4b727d2?...",
    title: "Подача авторской кухни",
    category: "Еда и напитки",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1531347058246-6dfef49b7b7b?...",
    title: "Современная мода",
    category: "Мода",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1505209487757-5114235191e5?...",
    title: "Рабочее пространство",
    category: "Рабочая среда",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1684214677257-fd5d235a5aa0?...",
    title: "Ботаническая эстетика",
    category: "Природа",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1682979358243-816a75830f77?...",
    title: "Кофейная эстетика",
    category: "Еда и напитки",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1663524962768-ef47bbdb11ef?...",
    title: "Горное приключение",
    category: "Путешествия",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?...",
    title: "Галерейная выставка",
    category: "Арт и культура",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?...",
    title: "Закат над океаном",
    category: "Природа",
  },
];

export function ShowcaseSection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl mb-4">
            Откройте бесконечное вдохновение
          </h2>
          <p className="text-xl text-muted-foreground">
            Просматривайте миллионы идей от нашего творческого сообщества. 
            От домашнего декора до путешествий — находите то, что вдохновляет вас.
          </p>
        </div>

        <MasonryGrid pins={showcasePins} columns={4} />
      </div>
    </section>
  );
}
