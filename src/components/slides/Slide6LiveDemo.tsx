import demoImage from "@/assets/demo-black-rhino.png";

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
        <div className="relative rounded-xl overflow-hidden shadow-strong">
          <img 
            src={demoImage} 
            alt="StudyFlow Agent demo showing Black Rhino Conservation study package with research findings, study summary, 5-day roadmap, and practice quiz"
            className="w-full h-auto border-2 border-primary/40 rounded-xl hover:border-primary/60 hover:scale-[1.02] transition-all duration-300"
          />
        </div>
        <p className="text-center text-xl md:text-2xl text-primary font-semibold mt-8">
          From topic to complete study package in 30 seconds
        </p>
      </div>
    </div>
  );
};

export default Slide6LiveDemo;
