import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide1TitleSlide from "./slides/Slide1TitleSlide";
import Slide2Problem from "./slides/Slide2Problem";
import Slide3Solution from "./slides/Slide3Solution";
import Slide4HowItWorks from "./slides/Slide4HowItWorks";
import Slide5KeyFeatures from "./slides/Slide5KeyFeatures";
import Slide6LiveDemo from "./slides/Slide6LiveDemo";
import Slide7Impact from "./slides/Slide7Impact";
import Slide8Roadmap from "./slides/Slide8Roadmap";
import Slide9ThankYou from "./slides/Slide9ThankYou";

const slides = [
  Slide1TitleSlide,
  Slide2Problem,
  Slide3Solution,
  Slide4HowItWorks,
  Slide5KeyFeatures,
  Slide6LiveDemo,
  Slide7Impact,
  Slide8Roadmap,
  Slide9ThankYou,
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prevSlide();
      } else if (e.key === "Home") {
        setCurrentSlide(0);
      } else if (e.key === "End") {
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Slide Content */}
      <div className="w-full h-full transition-opacity duration-500">
        <CurrentSlideComponent />
      </div>

      {/* Navigation Buttons */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/80 hover:bg-card border border-border rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
      )}
      
      {currentSlide < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/80 hover:bg-card border border-border rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-12 h-3 bg-primary"
                : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 text-sm text-muted-foreground z-10">
        <span className="font-semibold text-foreground">{currentSlide + 1}</span> / {slides.length}
      </div>
    </div>
  );
};

export default Presentation;
