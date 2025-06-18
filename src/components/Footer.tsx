
import { MapPin, Phone, Mail, MessageCircle, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";
    const message = "Hi! I found your website and I'm interested in your wire products.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-blue-400 mb-4">Shivam Wires</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading manufacturer of soft mild steel wire based in Agra. Serving industries across India with high-quality pickled, annealed, and drawn wire solutions ranging from 0.6mm to 2mm thickness.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">
                  Industrial Area, Agra, Uttar Pradesh - 282001
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+91 9876543210, +91 9876543211</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">sales@shivamwires.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Get Quote
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Quality Standards
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Wire Sizes</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">0.6mm Wire</li>
              <li className="text-gray-300">0.8mm Wire</li>
              <li className="text-gray-300">1.0mm Wire</li>
              <li className="text-gray-300">1.2mm Wire</li>
              <li className="text-gray-300">1.5mm Wire</li>
              <li className="text-gray-300">2.0mm Wire</li>
              <li className="text-blue-400">Custom Sizes</li>
            </ul>
          </div>
        </div>

        {/* Social Links & Business Info */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              
              <a
                href="https://facebook.com/shivamwires"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              
              <a
                href="https://linkedin.com/company/shivamwires"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <div className="text-center md:text-right">
              <div className="text-sm text-gray-400 mb-2">
                GST: 09XXXXX1234X1X5 | PAN: ABCDE1234F
              </div>
              <div className="text-sm text-gray-400">
                ISO 9001:2015 Certified | BIS Approved
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © 2024 Shivam Wires. All rights reserved. | 
            <span className="ml-2">Trusted Wire Manufacturing Since 2009</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
