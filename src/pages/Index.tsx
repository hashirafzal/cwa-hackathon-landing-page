import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import EventStructureSection from "@/components/EventStructureSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <main className="bg-background min-h-screen relative">
      <AnimatedBackground />
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <EventStructureSection />
    </main>
  );
};

export default Index;
