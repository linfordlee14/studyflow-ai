import { Search, FileText, Calendar, HelpCircle, BookOpen, Package, ArrowDown } from "lucide-react";

const Slide4HowItWorks = () => {
  const steps = [
    { icon: Search, title: "Topic Input", description: "Enter your subject" },
    { icon: Search, title: "Research Collector", description: "Find key resources & concepts" },
    { icon: FileText, title: "Structured Summarizer", description: "Organize learning material" },
    { icon: Calendar, title: "Learning Plan Builder", description: "5-day roadmap" },
    { icon: HelpCircle, title: "Quiz & Flashcard Generator", description: "Self-assessment" },
    { icon: Package, title: "Complete Study Package Ready", description: "Everything you need" },
  ];

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-dark px-6 py-12 overflow-y-auto">
      <div className="max-w-4xl w-full py-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
          How It Works
        </h2>
        <div className="flex flex-col items-center gap-4">
          {steps.map((step, index) => (
            <div key={index} className="w-full">
              <div className="bg-card border border-primary/30 rounded-lg p-6 hover:shadow-strong transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center my-2">
                  <ArrowDown className="w-6 h-6 text-primary animate-float" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide4HowItWorks;
