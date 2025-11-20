import impactMetrics from "@/assets/impact-metrics.png";

const Slide7Impact = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-dark px-6 py-12 overflow-y-auto">
      <div className="max-w-6xl w-full py-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
          Impact & Use Cases
        </h2>
        <div className="relative flex justify-center">
          <img 
            src={impactMetrics} 
            alt="StudyFlow Impact: 5x faster study prep, better retention through spaced repetition (40% improvement), and scalable for any topic in any language available 24/7"
            className="w-full max-w-5xl h-auto rounded-xl border border-primary/30 shadow-strong hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide7Impact;
