import { FileText, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Share Your Goals",
    description: "Tell us about your subjects, deadlines, and learning preferences. The more details you provide, the better your plan."
  },
  {
    icon: Sparkles,
    title: "AI Generates Your Plan",
    description: "Our advanced AI analyzes your information and creates a personalized, optimized study schedule in seconds."
  },
  {
    icon: CheckCircle2,
    title: "Start Learning",
    description: "Follow your custom plan, track progress, and adjust as needed. Watch your productivity soar."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your personalized study plan in three simple steps
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary transform -translate-y-1/2 opacity-20" />
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 h-full">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-medium mx-auto">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold shadow-soft">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-center text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;