import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Slide9ThankYou = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-dark px-6">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
          Get Started
        </h2>
        <p className="text-3xl md:text-4xl text-primary mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Try StudyFlow Agent Now
        </p>
        
        <div className="flex flex-col items-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <a
            href="https://github.com/linfordlee14"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-xl text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-8 h-8" />
            <span>github.com/linfordlee14</span>
          </a>
          <a
            href="https://linkedin.com/in/linfordlee14"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-xl text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-8 h-8" />
            <span>linkedin.com/in/linfordlee14</span>
          </a>
        </div>

        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-2xl font-semibold text-foreground mb-4">Questions?</h3>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you
          </p>
        </div>

        <Button 
          size="lg" 
          className="text-lg px-8 py-6 animate-scale-in" 
          style={{ animationDelay: "0.4s" }}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Slide9ThankYou;
