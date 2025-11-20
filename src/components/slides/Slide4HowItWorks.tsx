import workflowDiagram from "@/assets/workflow-diagram.png";

const Slide4HowItWorks = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-dark px-6 py-12 overflow-y-auto">
      <div className="max-w-6xl w-full py-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
          How It Works
        </h2>
        <div className="relative flex justify-center">
          <img 
            src={workflowDiagram} 
            alt="StudyFlow workflow: Topic Input → Research Collector → Structured Summarizer → Learning Plan Builder → Flashcard Generator → Study Package Ready"
            className="w-full max-w-5xl h-auto rounded-xl border border-primary/30 shadow-strong hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide4HowItWorks;
