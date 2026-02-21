import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-gradient-overlay" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-accent/10 blur-[80px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.2em] uppercase border border-primary/30 rounded-full text-primary bg-primary/5">
            Hackathon & Innovation Sprint
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-gradient-primary mb-6 leading-tight"
        >
          CWA Prompt-a-thon
          <br />
          2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto"
        >
          Theme: <span className="text-foreground font-medium">Generative AI, Build with AI</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-10"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>28th Mar, 2026</span>
          </div>
          <span className="text-border">•</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>10:00am – 7:00pm</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold rounded-xl glow-border transition-all duration-300 hover:scale-105"
          >
            Register Now (10 Teams Maximum)
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
