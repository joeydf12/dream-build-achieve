import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-hero/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-hero-foreground">
              Active<span className="text-brand-blue">Color</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-hero-foreground hover:text-brand-blue transition-colors">
              Over ActiveColor
            </a>
            <a href="#" className="text-hero-foreground hover:text-brand-blue transition-colors">
              Instructies
            </a>
            <a href="#" className="text-hero-foreground hover:text-brand-blue transition-colors">
              Webshop
            </a>
            <a href="#" className="text-hero-foreground hover:text-brand-blue transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;