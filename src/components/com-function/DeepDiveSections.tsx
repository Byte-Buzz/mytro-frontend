import { DeepDiveFeature } from "./DeepDiveFeature";

export function DeepDiveSections() {
  return (
    <div className="w-full">
      <DeepDiveFeature
        title="Как доски помогают оставаться организованным"
        description="Создавайте собственные доски, чтобы систематизировать пины по темам, проектам или настроению. Планируете ли вы ремонт дома, собираете идеи рецептов или создаёте мудборд для следующего творческого проекта — доски позволяют удобно категоризировать всё и иметь быстрый доступ к вдохновению в любой момент."
        imageUrl="https://images.unsplash.com/photo-1758876201787-bd6ad98b7d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjB3b3Jrc3BhY2UlMjBib2FyZHxlbnwxfHx8fDE3NjUyNjcxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Организованный вид досок с тематическими коллекциями"
        reverse={false}
      />
      
      <DeepDiveFeature
        title="Исследуйте идеи с умной лентой"
        description="Наша интеллектуальная лента открытий изучает ваши интересы и показывает персонализированный контент, который вам точно понравится. Чем больше вы просматриваете, сохраняете и взаимодействуете, тем точнее становятся рекомендации. Открывайте новые идеи, тренды и вдохновение, подобранное специально под ваш вкус и предпочтения."
        imageUrl="https://images.unsplash.com/photo-1571863281644-68331501b108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGluc3BpcmF0aW9uJTIwZmVlZHxlbnwxfHx8fDE3NjUyNjcxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Персонализированная лента с творческим вдохновением"
        reverse={true}
      />
      
      <DeepDiveFeature
        title="Загружайте и делитесь без ограничений"
        description="Делитесь своим творчеством со всем миром, загружая собственные изображения, дизайны и идеи. Будь вы профессиональным создателем или просто делитесь вдохновением — наша платформа делает вклад в сообщество простым и удобным. Добавляйте описания, теги и распределяйте загруженное по доскам, чтобы другие могли легко найти ваш контент."
        imageUrl="https://images.unsplash.com/photo-1571771985403-f79bfdbd34ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMHVwbG9hZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjUyNjcxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Интерфейс загрузки изображений и идей"
        reverse={false}
      />
    </div>
  );
}