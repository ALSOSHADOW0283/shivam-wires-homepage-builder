
import { Bed, Brush, Cable } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Bed,
      title: "Mattress Manufacturers",
      description: "High-quality spring wire for comfortable and durable mattress systems",
      applications: "Bonnell springs, Pocket springs, Support structures"
    },
    {
      icon: Brush,
      title: "Brush Factories",
      description: "Precision wire for manufacturing industrial and household brushes",
      applications: "Cleaning brushes, Industrial brushes, Wire brushes"
    },
    {
      icon: Cable,
      title: "Cable & Rope Industries",
      description: "Strong and flexible wire for cable armouring and rope manufacturing",
      applications: "Cable protection, Rope cores, Binding applications"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by manufacturers across diverse industries for consistent quality and reliable supply
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl">
                  <IconComponent className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <div className="bg-secondary/50 rounded-lg p-4 border">
                  <h4 className="font-semibold text-foreground mb-2">Key Applications:</h4>
                  <p className="text-sm text-muted-foreground">{industry.applications}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Partnership Opportunities</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Looking for a reliable wire supplier? Join our network of satisfied B2B partners and experience consistent quality delivery.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-300"
          >
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
