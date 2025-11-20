import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Start Your Journey Today</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Study Experience?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join over 50,000 students who are achieving their academic goals with StudyFlow Agent. 
            Get started for free today—no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-10 group shadow-medium hover:shadow-strong transition-all">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10">
              Schedule a Demo
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Free forever • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;