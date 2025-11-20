import roadmap from "@/assets/roadmap.png";

const Slide8Roadmap = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-dark px-6 py-12 overflow-y-auto">
      <div className="max-w-6xl w-full py-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
          Roadmap
        </h2>
        <div className="relative flex justify-center">
          <img 
            src={roadmap} 
            alt="StudyFlow Roadmap: Q1 2026 - Mobile app and Study group collaboration, Q2 2026 - AI tutor chatbot, Real-time progress tracking, and Platform integrations, Q3 2026 - Voice-based input and Community study resources"
            className="w-full max-w-5xl h-auto rounded-xl border border-primary/30 shadow-strong hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide8Roadmap;
