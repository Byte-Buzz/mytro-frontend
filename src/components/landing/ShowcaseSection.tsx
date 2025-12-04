import { MasonryGrid } from "./MasonryGrid";

const showcasePins = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY0NjIzMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Minimalist Living Room",
    category: "Interior Design",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1764345713176-3fd77a47bfd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMHBhc3RlbHxlbnwxfHx8fDE3NjQ2NjgzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Pastel Abstract Art",
    category: "Art & Design",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0NTYyODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Contemporary Building",
    category: "Architecture",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY0NTg3OTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Mountain Landscape",
    category: "Nature",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1566236041308-e01bc4b727d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjBtaW5pbWFsfGVufDF8fHx8MTc2NDYwNDAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Artisan Food Plating",
    category: "Food & Drink",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1531347058246-6dfef49b7b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NjQ2NjgzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Modern Fashion",
    category: "Fashion",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc3BhY2UlMjBkZXNrJTIwbWluaW1hbHxlbnwxfHx8fDE3NjQ1OTY0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Workspace Setup",
    category: "Workspace",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1684214677257-fd5d235a5aa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwYm90YW5pY2FsfGVufDF8fHx8MTc2NDY2ODM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Botanical Beauty",
    category: "Nature",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1682979358243-816a75830f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjYWZlJTIwYWVzdGhldGljfGVufDF8fHx8MTc2NDYwMDI1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Coffee Aesthetic",
    category: "Food & Drink",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1663524962768-ef47bbdb11ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY0NjY4MzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Mountain Adventure",
    category: "Travel",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc2NDU5Nzk5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Gallery Exhibition",
    category: "Art & Culture",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBvY2VhbnxlbnwxfHx8fDE3NjQ1NzM2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Ocean Sunset",
    category: "Nature",
  },
];

export function ShowcaseSection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl mb-4">
            Explore endless inspiration
          </h2>
          <p className="text-xl text-muted-foreground">
            Browse millions of ideas from our creative
            community. From home decor to travel destinations,
            find what moves you.
          </p>
        </div>

        <MasonryGrid pins={showcasePins} columns={4} />
      </div>
    </section>
  );
}