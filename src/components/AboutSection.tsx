
import { Factory, MapPin, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About Shivam Wires
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Based in Agra, Shivam Wires is a trusted manufacturer specializing in pickled, annealed, and drawn soft mild steel wire. With over a decade of experience in precision wire manufacturing, we serve B2B clients across India with consistent quality and reliable supply.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our expertise lies in producing high-grade soft MS wire ranging from 0.6mm to 2mm thickness, catering to diverse industrial applications including mattress springs, wire brushes, and cable armouring solutions.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Factory className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Modern Manufacturing</h4>
                  <p className="text-muted-foreground text-sm">State-of-the-art production facility</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Agra Based</h4>
                  <p className="text-muted-foreground text-sm">Strategic location for pan-India supply</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Quality Certified</h4>
                  <p className="text-muted-foreground text-sm">ISO standards and quality assurance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">B2B Focus</h4>
                  <p className="text-muted-foreground text-sm">Dedicated industrial partnerships</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80"
                alt="Wire manufacturing process"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">0.6mm - 2mm</div>
              <div className="text-sm">Wire Thickness Range</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
