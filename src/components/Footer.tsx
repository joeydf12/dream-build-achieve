const Footer = () => {
  return (
    <footer className="bg-hero border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-hero-foreground">
                Active<span className="text-brand-blue">Color</span>
              </span>
            </div>
            <p className="text-hero-foreground/70">
              De innovatieve kinesiotape met kleurfeedback voor optimale sportprestaties.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-hero-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-hero-foreground/70 hover:text-brand-blue transition-colors">Sporttape</a></li>
              <li><a href="#" className="text-hero-foreground/70 hover:text-brand-blue transition-colors">Voordelen</a></li>
              <li><a href="#" className="text-hero-foreground/70 hover:text-brand-blue transition-colors">Gebruiksinstructies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-hero-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-hero-foreground/70 hover:text-brand-blue transition-colors">Contact</a></li>
              <li><a href="#" className="text-hero-foreground/70 hover:text-brand-blue transition-colors">FAQ</a></li>
              <li><a href="#" className="text-hero-foreground/70 hover:text-brand-blue transition-colors">Klantenservice</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-hero-foreground mb-4">Bedrijf</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-hero-foreground/70 hover:text-brand-blue transition-colors">Over ons</a></li>
              <li><a href="#" className="text-hero-foreground/70 hover:text-brand-blue transition-colors">Nieuws</a></li>
              <li><a href="#" className="text-hero-foreground/70 hover:text-brand-blue transition-colors">Carrière</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-hero-foreground/50">
            © 2024 ActiveColor. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;