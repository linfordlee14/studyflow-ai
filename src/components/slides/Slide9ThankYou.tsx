import { Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import athandileImg from "@/assets/athandile.jpg";
import linfordImg from "@/assets/linford.jpg";

const Slide9ThankYou = () => {
  const teamMembers = [
    {
      name: "Athandile Tetyana",
      role: "Aspiring Software Developer",
      linkedin: "linkedin.com/in/athandile-tetyana-639115343",
      linkedinUrl: "https://linkedin.com/in/athandile-tetyana-639115343?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image: athandileImg,
    },
    {
      name: "Linford Musiyambodza",
      role: "Founder & Full-Stack Developer",
      linkedin: "linkedin.com/in/linfordlee14",
      linkedinUrl: "https://linkedin.com/in/linfordlee14",
      image: linfordImg,
    }
  ];

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-dark px-6 py-12 overflow-y-auto relative">
      <div className="max-w-6xl w-full">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground animate-fade-in">
            Get Started
          </h2>
          <p className="text-3xl md:text-4xl text-cyan-400 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Try StudyFlow Agent Now
          </p>
        </div>

        {/* Team Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-strong animate-scale-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                {/* Photo */}
                <div className="mb-6 flex justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Name */}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                
                {/* Role */}
                <p className="text-lg md:text-xl text-muted-foreground mb-6">
                  {member.role}
                </p>
                
                {/* LinkedIn Link */}
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-base md:text-lg underline"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="break-all">{member.linkedin}</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Questions Section */}
        <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Questions?
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            We'd love to hear from you
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Sparkle Decoration - Bottom Right */}
      <div className="absolute bottom-12 right-12">
        <Sparkles className="w-16 h-16 text-gray-400/40" />
      </div>
    </div>
  );
};

export default Slide9ThankYou;
