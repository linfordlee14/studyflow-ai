import { Search, BookOpen, Calendar, PenTool, Clock, Sparkles } from "lucide-react";

const Slide5KeyFeatures = () => {
  const features = [
    {
      icon: Search,
      title: "SMART RESEARCH",
      description: "Automatically finds and summarizes best resources",
    },
    {
      icon: BookOpen,
      title: "STRUCTURED LEARNING",
      description: "Organized by concepts, applications, misconceptions",
    },
    {
      icon: Calendar,
      title: "PERSONALIZED ROADMAP",
      description: "5-day study plan with time estimates",
    },
    {
      icon: PenTool,
      title: "SELF-ASSESSMENT",
      description: "Practice quizzes + digital flashcards",
    },
    {
      icon: Clock,
      title: "TIME ESTIMATES",
      description: "Know exactly how long each task takes",
    },
  ];

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-dark px-6 py-12 overflow-y-auto relative">
      <div className="max-w-6xl w-full py-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border p-8 rounded-lg hover:scale-105 hover:shadow-strong transition-all duration-300 hover:border-primary/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
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

export default Slide5KeyFeatures;
