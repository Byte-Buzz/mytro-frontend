import { DeepDiveFeature } from "./DeepDiveFeature";

export function DeepDiveSections() {
  return (
    <div className="w-full">
      <DeepDiveFeature
        title="How Boards Keep You Organized"
        description="Create custom boards to organize your pins by theme, project, or mood. Whether you're planning a home renovation, collecting recipe ideas, or building a mood board for your next creative project, boards make it easy to keep everything neatly categorized and accessible whenever inspiration strikes."
        imageUrl="https://images.unsplash.com/photo-1758876201787-bd6ad98b7d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjB3b3Jrc3BhY2UlMjBib2FyZHxlbnwxfHx8fDE3NjUyNjcxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Organized board view showcasing multiple themed collections"
        reverse={false}
      />
      
      <DeepDiveFeature
        title="Explore Ideas With a Smarter Feed"
        description="Our intelligent discovery feed learns from your interests and shows you personalized content you'll love. The more you explore, save, and interact, the better our recommendations become. Discover new ideas, trends, and inspiration tailored specifically to your taste and preferences."
        imageUrl="https://images.unsplash.com/photo-1571863281644-68331501b108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGluc3BpcmF0aW9uJTIwZmVlZHxlbnwxfHx8fDE3NjUyNjcxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Personalized feed showing creative inspiration"
        reverse={true}
      />
      
      <DeepDiveFeature
        title="Upload & Share Without Limits"
        description="Share your creativity with the world by uploading your own images, designs, and ideas. Whether you're a professional creator or just sharing inspiration, our platform makes it simple to contribute to the community. Add descriptions, tags, and assign your uploads to boards to help others discover your content."
        imageUrl="https://images.unsplash.com/photo-1571771985403-f79bfdbd34ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMHVwbG9hZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjUyNjcxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Upload interface for sharing images and ideas"
        reverse={false}
      />
    </div>
  );
}
