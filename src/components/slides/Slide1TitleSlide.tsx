import { Brain, Sparkles } from "lucide-react";

const Slide1TitleSlide = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-dark px-6 relative">
      {/* Hackathon Badge - Top Right */}
      <div className="absolute top-8 right-8 text-muted-foreground text-lg">
        Hackathon 2025
      </div>
      
      {/* Main Content */}
      <div className="max-w-5xl text-center animate-fade-in">
        {/* Brain Icon */}
        <div className="flex justify-center mb-8">
          <Brain className="w-20 h-20 text-cyan-400" strokeWidth={1.5} />
        </div>
        
        {/* Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground">
          StudyFlow Agent
        </h1>
        
        {/* Subtitle */}
        <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 font-light">
          Turn Any Topic Into a Personalized Study Plan in Minutes
        </p>
        
        {/* Powered By */}
        <p className="text-xl md:text-2xl text-cyan-400 mb-12 font-medium">
          Powered by Perplexity Comet AI
        </p>
        
        {/* Authors */}
        <p className="text-lg md:text-xl text-muted-foreground/80">
          Athandile Tetyana & Linford Musiyambodza
        </p>
      </div>
      
      {/* Sparkle Decoration - Bottom Right */}
      <div className="absolute bottom-12 right-12">
        <Sparkles className="w-16 h-16 text-cyan-400/60" />
      </div>
    </div>
  );
};

export default Slide1TitleSlide;
