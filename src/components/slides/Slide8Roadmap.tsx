import { CheckCircle } from "lucide-react";

const Slide8Roadmap = () => {
  const roadmap = [
    {
      quarter: "Q1 2026",
      color: "primary",
      items: [
        "Mobile app (iOS & Android)",
        "Study group collaboration",
      ],
    },
    {
      quarter: "Q2 2026",
      color: "purple",
      items: [
        "AI tutor chatbot",
        "Real-time progress tracking",
        "Integration with learning platforms",
      ],
    },
    {
      quarter: "Q3 2026",
      color: "success",
      items: [
        "Voice-based input",
        "Community study resources",
      ],
    },
  ];

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-dark px-6 py-12 overflow-y-auto">
      <div className="max-w-5xl w-full py-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
          Roadmap
        </h2>
        <div className="space-y-8">
          {roadmap.map((phase, index) => (
            <div
              key={index}
              className="bg-card border-2 rounded-lg p-8 animate-fade-in-up hover:scale-105 transition-all duration-300"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                borderColor: `hsl(var(--${phase.color}))`
              }}
            >
              <h3 
                className="text-3xl font-bold mb-6"
                style={{ color: `hsl(var(--${phase.color}))` }}
              >
                {phase.quarter}
              </h3>
              <div className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle 
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
                      style={{ color: `hsl(var(--${phase.color}))` }}
                    />
                    <p className="text-lg text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide8Roadmap;
