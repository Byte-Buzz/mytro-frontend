import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-12 md:p-16 text-center">
          <h2 className="mb-4">Start Exploring Now</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join our community of creators and discover endless inspiration. Your next big idea is just a click away.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors duration-200 shadow-sm">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
              Learn More
            </button>
          </div>
          
          <p className="text-gray-500 mt-6">
            No credit card required • Free forever
          </p>
        </div>
      </div>
    </div>
  );
}
