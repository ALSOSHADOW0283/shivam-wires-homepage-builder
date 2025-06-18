
import { Award, Truck, Wrench, MapPin } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "High Quality & Consistency",
      description: "Rigorous quality control ensures every batch meets industrial standards with consistent properties and finish.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Wrench,
      title: "Custom Sizes Available",
      description: "Flexible manufacturing capabilities to produce wire according to your specific diameter and length requirements.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Truck,
      title: "Fast Dispatch Across India",
      description: "Efficient logistics network ensures quick delivery to your location with proper packaging and documentation.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: MapPin,
      title: "Local Manufacturing Expertise",
      description: "Micro-scale precision with macro-scale reliability. Deep understanding of Indian industrial requirements.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Shivam Wires?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of working with a dedicated wire manufacturing partner committed to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional trust signals */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">ISO 9001</div>
            <div className="text-gray-700">Quality Management System</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-700">Customer Support</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-700">Quality Assurance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
