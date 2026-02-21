import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section-bg">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-5 py-2 mb-8 text-xs font-medium tracking-[0.2em] uppercase border border-primary/25 rounded-full text-primary bg-primary/5">
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
          className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-12"
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
            className="px-8 py-6 text-base font-semibold rounded-xl glow-border transition-all duration-300 hover:scale-105"
          >
            Register Now (10 Teams Maximum)
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
