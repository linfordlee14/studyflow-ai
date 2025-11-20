import { XCircle } from "lucide-react";

const Slide2Problem = () => {
  const problems = [
    "Students waste hours organizing study materials",
    "No personalized learning paths",
    "Inconsistent study quality",
    "No self-assessment tools",
    "Procrastination due to lack of structure",
  ];

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-dark px-6 py-12">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
          The Problem
        </h2>
        <div className="space-y-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg bg-card/50 border border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <XCircle className="w-8 h-8 text-warning flex-shrink-0 mt-1" />
              <p className="text-xl md:text-2xl text-foreground">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide2Problem;
