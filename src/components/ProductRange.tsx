import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Circle, Brush, Cable, Wrench, Zap, Shield } from "lucide-react";

const ProductRange = () => {
  const products = [
    {
      thickness: "0.6mm",
      icon: Circle,
      applications: ["Fine mattress springs", "Delicate wire mesh", "Precision components"],
      description: "Ultra-fine wire for precision applications"
    },
    {
      thickness: "0.8mm",
      icon: Brush,
      applications: ["Wire brushes", "Cleaning tools", "Industrial brushes"],
      description: "Ideal for brush manufacturing industries"
    },
    {
      thickness: "1.0mm",
      icon: Cable,
      applications: ["Cable armouring", "Rope core", "General binding"],
      description: "Versatile wire for multiple applications"
    },
    {
      thickness: "1.2mm",
      icon: Zap,
      applications: ["Medium mattress springs", "Furniture springs", "Automotive parts"],
      description: "Standard thickness for spring applications"
    },
    {
      thickness: "1.5mm",
      icon: Wrench,
      applications: ["Heavy-duty springs", "Industrial fixtures", "Construction ties"],
      description: "Heavy-duty applications and construction"
    },
    {
      thickness: "2.0mm",
      icon: Shield,
      applications: ["Cable armouring", "Heavy springs", "Industrial binding"],
      description: "Maximum thickness for robust applications"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality soft mild steel wire available in various thicknesses to meet your specific industrial requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-blue-600">
                    {product.thickness}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {product.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {app}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Need a custom size? We can manufacture wire according to your specific requirements.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Request Custom Size
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
