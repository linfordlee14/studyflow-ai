import { TrendingUp, BarChart, GraduationCap, Globe } from "lucide-react";

const Slide7Impact = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-dark px-6 py-12 overflow-y-auto">
      <div className="max-w-6xl w-full py-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
          Impact & Use Cases
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Impact */}
          <div className="space-y-8">
            <div className="bg-card border border-success/30 rounded-lg p-8 animate-fade-in">
              <TrendingUp className="w-12 h-12 text-success mb-4" />
              <div className="text-5xl font-bold text-success mb-2">5x</div>
              <p className="text-xl text-foreground">FASTER study prep</p>
            </div>
            <div className="bg-card border border-success/30 rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <BarChart className="w-12 h-12 text-success mb-4" />
              <div className="text-3xl font-bold text-success mb-2">BETTER</div>
              <p className="text-xl text-foreground">retention with spaced repetition + self-testing</p>
            </div>
          </div>

          {/* Right Column - Use Cases */}
          <div className="space-y-8">
            <div className="bg-card border border-primary/30 rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">WORKS FOR ANY TOPIC</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Science, History, Tech, Languages</li>
                <li>• Professional certifications</li>
                <li>• Competitive exam prep</li>
              </ul>
            </div>
            <div className="bg-card border border-primary/30 rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">SCALABLE & ACCESSIBLE</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Free for students</li>
                <li>• Works in any language</li>
                <li>• Available 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide7Impact;
