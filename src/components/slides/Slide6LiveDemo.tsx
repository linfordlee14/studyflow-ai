import { Play } from "lucide-react";

const Slide6LiveDemo = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-dark px-6 py-12">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center text-foreground">
          Live Demo
        </h2>
        <h3 className="text-2xl md:text-3xl text-center mb-12 text-primary">
          Black Rhino Conservation
        </h3>
        <div className="relative bg-muted/30 border-2 border-primary/40 rounded-xl overflow-hidden shadow-strong aspect-video flex items-center justify-center group hover:border-primary/60 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple/5" />
          <div className="relative z-10 text-center p-8">
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <Play className="w-12 h-12 text-primary fill-primary ml-2" />
            </div>
            <p className="text-xl text-muted-foreground">
              Demo Screenshot Area
            </p>
            <p className="text-sm text-muted-foreground/60 mt-2">
              (Research findings • Study summary • 5-day plan • Quiz • Flashcards)
            </p>
          </div>
        </div>
        <p className="text-center text-xl md:text-2xl text-primary font-semibold mt-8">
          From topic to complete study package in 30 seconds
        </p>
      </div>
    </div>
  );
};

export default Slide6LiveDemo;
