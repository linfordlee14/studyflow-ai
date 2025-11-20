import { CheckCircle } from "lucide-react";

const Slide3Solution = () => {
  const features = [
    "Automated Research Aggregation",
    "Structured Learning Summaries",
    "Personalized 5-Day Roadmap",
    "Auto-Generated Quiz Questions",
    "Digital Flashcards for Retention",
  ];

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-dark px-6 py-12">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center text-foreground">
          The Solution
        </h2>
        <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-center text-primary">
          StudyFlow Agent
        </h3>
        <p className="text-2xl md:text-3xl text-center mb-12 text-muted-foreground font-light">
          One Input. One Click. Complete Study Plan.
        </p>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg bg-card/50 border border-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle className="w-8 h-8 text-success flex-shrink-0 mt-1" />
              <p className="text-xl md:text-2xl text-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide3Solution;
