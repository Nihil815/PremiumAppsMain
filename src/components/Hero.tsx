import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/20 rounded-full blur-3xl animate-gradient-float-1"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/30 to-primary/20 rounded-full blur-3xl animate-gradient-float-2"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-gradient-to-r from-secondary/30 to-accent/20 rounded-full blur-3xl animate-gradient-float-3"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, hsl(262 83% 58%) 1px, transparent 1px), linear-gradient(to bottom, hsl(262 83% 58%) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute -z-10 w-2 h-2 rounded-full"
          style={{
            background: `hsl(${262 - i * 10} ${83 - i * 2}% ${58 + i * 3}%)`,
            left: `${15 + i * 12}%`,
            top: `${10 + i * 15}%`,
            animation: `float ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            opacity: 0.4,
          }}
        />
      ))}

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-pulse-slow">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Premium Quality Apps</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Elevate Your Digital <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our suite of premium applications designed to simplify your life. 
              From device tracking to document management, we've got you covered.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="premium" 
              size="xl"
              onClick={() => {
                const element = document.getElementById("apps");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group"
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Explore Our Apps
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="space-y-1">
              <div className="text-3xl font-bold gradient-text">1 Million+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="space-y-1">
              <div className="text-3xl font-bold gradient-text">4.8★</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
