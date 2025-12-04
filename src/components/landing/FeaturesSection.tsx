import { Card, CardContent } from "@/components/ui/card";
import { Grid3x3, Sparkles, Users, Lock } from "lucide-react";

const features = [
  {
    icon: Grid3x3,
    title: "Visual Organization",
    description: "Create beautiful boards to organize your ideas by theme, project, or mood. Everything stays visually organized and easy to find."
  },
  {
    icon: Sparkles,
    title: "AI-Powered Discovery",
    description: "Get personalized recommendations based on your interests. Our smart algorithm helps you discover content you'll love."
  },
  {
    icon: Users,
    title: "Collaborate & Share",
    description: "Invite team members to collaborate on shared boards. Work together seamlessly on creative projects."
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description: "Keep your personal boards private or share them with the world. You're in complete control of your content."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl mb-4">
            Everything you need to stay inspired
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed to help you collect, organize, and share your creative inspiration.
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