import { Brain, Calendar, Target, Zap, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Planning",
    description: "Advanced algorithms analyze your learning patterns and create personalized study schedules that adapt to your progress."
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automatically organize your study sessions around your availability with intelligent time management."
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set and monitor your learning objectives with progress tracking and milestone celebrations."
  },
  {
    icon: Zap,
    title: "Quick Generation",
    description: "Generate comprehensive study plans in seconds. No manual planning required."
  },
  {
    icon: Clock,
    title: "Time Optimization",
    description: "Maximize productivity with scientifically-backed study intervals and break times."
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track your improvement over time with detailed insights and recommendations."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Excel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to supercharge your study sessions and help you achieve your academic goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-soft">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;