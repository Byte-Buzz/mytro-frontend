import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          {/* Decorative element */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 text-white mb-4">
            <Sparkles className="w-8 h-8" />
          </div>
          
          <h1 className="mx-auto max-w-4xl">
            About Us
          </h1>
          
          <p className="mx-auto max-w-2xl text-slate-600">
            We&apos;re building a visual discovery platform that inspires creativity and 
            helps millions of people find and save ideas for their projects and passions.
          </p>
          
          {/* Abstract decorative shapes */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-slate-200/50 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-slate-300/30 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
