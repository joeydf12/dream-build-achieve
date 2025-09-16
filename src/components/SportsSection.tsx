import voetbalImage from "@/assets/voetbal.jpg";
import hockeyImage from "@/assets/hockey.jpg";
import padelImage from "@/assets/padel.jpg";
import tennisImage from "@/assets/tennis.jpg";
import hardlopenImage from "@/assets/hardlopen.jpg";

const sportsData = [
  { name: "VOETBAL", image: voetbalImage },
  { name: "HOCKEY", image: hockeyImage },
  { name: "PADEL", image: padelImage },
  { name: "TENNIS", image: tennisImage },
  { name: "HARDLOPEN", image: hardlopenImage },
];

const SportsSection = () => {
  return (
    <section className="py-20 bg-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-hero-foreground mb-16">
          Sporten
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
          {sportsData.map((sport, index) => (
            <div
              key={sport.name}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={sport.image}
                alt={sport.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-bold text-lg">
                  {sport.name}
                </h3>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-blue transition-colors duration-300 rounded-lg" />
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-6xl font-bold text-brand-blue mb-4">
              5.3M
            </div>
            <p className="text-hero-foreground/80 text-lg leading-relaxed">
              Sportblessures per jaar (illustratie: atleet in beweging met felblauwe gloeiende contour op zwarte achtergrond, cyan accenten benadrukken snelheid)
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-6xl font-bold text-brand-cyan mb-4">
              1 op 3
            </div>
            <p className="text-hero-foreground/80 text-lg leading-relaxed">
              Blessures door koude spieren (Visual: gloeiende blauwe lijp, vloeiend van donkerblauw naar cyan richting het getal, accentueert de statistiek)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsSection;