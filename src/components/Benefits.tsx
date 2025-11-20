import { CheckCircle } from "lucide-react";

const benefits = [
  "Save hours of planning time every week",
  "Improve retention with optimized study intervals",
  "Never miss a deadline with smart reminders",
  "Reduce stress with clear, manageable goals",
  "Adapt plans based on your progress",
  "Study smarter, not harder"
];

const Benefits = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose
              <span className="bg-gradient-primary bg-clip-text text-transparent"> StudyFlow?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of students who have transformed their study habits
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50 hover:shadow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;