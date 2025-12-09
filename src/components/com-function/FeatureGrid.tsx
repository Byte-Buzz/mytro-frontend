import { 
  Bookmark, 
  FolderOpen, 
  Sparkles, 
  Search, 
  Upload, 
  Users, 
  Grid3x3, 
  Smartphone 
} from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: Bookmark,
    title: "Save Pins",
    description: "Save any idea or image to your private or public collections with just one click."
  },
  {
    icon: FolderOpen,
    title: "Create Boards",
    description: "Organize pins into themed boards for easy navigation and visual organization."
  },
  {
    icon: Sparkles,
    title: "Visual Discovery Feed",
    description: "Get personalized recommendations based on your interests and browsing behavior."
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Search by text, keywords, or use image recognition to find exactly what you need."
  },
  {
    icon: Upload,
    title: "Pin Uploading",
    description: "Upload your own images or ideas directly into the feed and share with the community."
  },
  {
    icon: Users,
    title: "Sharing & Collaboration",
    description: "Share boards or collaborate with others to build collections together."
  },
  {
    icon: Grid3x3,
    title: "Masonry Grid Layout",
    description: "Beautiful, responsive Pinterest-like grid that adapts to any screen size."
  },
  {
    icon: Smartphone,
    title: "Cross-Device Sync",
    description: "Access your content seamlessly across mobile, tablet, and desktop devices."
  }
];

export function FeatureGrid() {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Everything You Need</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you discover, save, and organize visual inspiration effortlessly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
