
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by manufacturers across diverse industries for consistent quality and reliable supply
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl">
                  <IconComponent className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Applications:</h4>
                  <p className="text-sm text-gray-600">{industry.applications}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Partnership Opportunities</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Looking for a reliable wire supplier? Join our network of satisfied B2B partners and experience consistent quality delivery.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
