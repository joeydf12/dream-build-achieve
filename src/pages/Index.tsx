import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SportsSection from "@/components/SportsSection";
import ProductSection from "@/components/ProductSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SportsSection />
      <ProductSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
