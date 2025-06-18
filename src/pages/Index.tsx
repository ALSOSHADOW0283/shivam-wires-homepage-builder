
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductRange from "@/components/ProductRange";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductRange />
      <IndustriesSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
