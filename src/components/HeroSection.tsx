import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 39, 52, 0.85), rgba(34, 39, 52, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-hero-foreground mb-6 leading-tight">
            Klaar voor actie.
          </h1>
          <p className="text-2xl md:text-3xl text-hero-foreground/90 mb-12 leading-relaxed">
            De innovatieve kinesiotape<br />
            met kleurfeedback
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-hero-foreground hover:bg-white/20 backdrop-blur-sm px-8 py-3 text-lg"
            >
              Meer informatie
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-brand hover:opacity-90 text-white px-8 py-3 text-lg shadow-glow"
            >
              Bestel nu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;