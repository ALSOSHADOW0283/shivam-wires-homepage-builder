
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const yearsCount = useCountUp({ end: 15, duration: 2000 });
  const clientsCount = useCountUp({ end: 500, duration: 2500 });

  const goToContact = () => {
    navigate('/contact');
  };

  const goToProducts = () => {
    navigate('/products');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Background image - using a factory/industrial themed placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Trusted Manufacturer of 
            <span className="text-blue-400 block mt-2">Soft Mild Steel Wire</span>
            <span className="text-2xl md:text-3xl lg:text-4xl text-gray-300 block mt-4 font-medium">
              (0.6mm - 2mm)
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Delivering quality wire solutions to industries across India with precision manufacturing and reliable supply chains
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={goToContact}
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-gray-400 hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              onClick={goToProducts}
            >
              View Products
            </Button>
          </div>

          {/* Stats or trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{yearsCount}+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{clientsCount}+</div>
              <div className="text-gray-300">B2B Clients</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-blue-400">Pan India</div>
              <div className="text-gray-300">Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
