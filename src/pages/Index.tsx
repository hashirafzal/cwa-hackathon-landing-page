import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import EventStructureSection from "@/components/EventStructureSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <EventStructureSection />
    </main>
  );
};

export default Index;
