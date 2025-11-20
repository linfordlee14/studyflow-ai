import { X, Sparkles } from "lucide-react";

const Slide2Problem = () => {
  const problems = [
    "Students waste hours organizing study materials",
    "No personalized learning paths",
    "Inconsistent study quality",
    "No self-assessment tools",
    "Procrastination due to lack of structure",
  ];

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-dark px-6 py-12 relative">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
          The Problem
        </h2>
        <div className="space-y-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center gap-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <X className="w-12 h-12 text-red-500 flex-shrink-0" strokeWidth={3} />
              <p className="text-xl md:text-2xl text-foreground">{problem}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Sparkle Decoration - Bottom Right */}
      <div className="absolute bottom-12 right-12">
        <Sparkles className="w-16 h-16 text-gray-400/40" />
      </div>
    </div>
  );
};

export default Slide2Problem;
