import { motion, useMotionValue, useTransform } from "framer-motion";
import { Calendar, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="glass-card rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[56px] sm:min-w-[72px] glow-primary">
      <span className="text-xl sm:text-3xl font-bold font-heading text-primary animate-flicker">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-[10px] sm:text-xs text-muted-foreground mt-1.5 uppercase tracking-wider font-mono">
      {label}
    </span>
  </div>
);

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-03-28T10:00:00").getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section-bg">
      {/* Radial pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 2.5], opacity: [0.08, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
          className="absolute w-64 h-64 rounded-full border border-primary/30"
        />
        <motion.div
          animate={{ scale: [1, 2.5], opacity: [0.06, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1.3 }}
          className="absolute w-64 h-64 rounded-full border border-accent/20"
        />
        <motion.div
          animate={{ scale: [1, 2.5], opacity: [0.05, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2.6 }}
          className="absolute w-64 h-64 rounded-full border border-primary/20"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 sm:mb-8 text-xs font-medium tracking-[0.15em] uppercase badge-glow rounded-full font-mono">
            <Zap className="w-3.5 h-3.5" />
            Hackathon & Innovation Sprint
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-gradient-primary mb-4 sm:mb-6 leading-tight glow-text"
        >
          CWA Prompt-a-thon
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            2026
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto"
        >
          Theme: <span className="text-foreground font-semibold">Generative AI, Build with AI</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>28th Mar, 2026</span>
          </div>
          <span className="hidden sm:inline text-border">•</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>10:00am – 7:00pm</span>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
        >
          <CountdownUnit value={timeLeft.days} label="Days" />
          <span className="text-primary/50 text-xl font-bold mt-[-20px]">:</span>
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <span className="text-primary/50 text-xl font-bold mt-[-20px]">:</span>
          <CountdownUnit value={timeLeft.minutes} label="Min" />
          <span className="text-primary/50 text-xl font-bold mt-[-20px]">:</span>
          <CountdownUnit value={timeLeft.seconds} label="Sec" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <Button
            size="lg"
            className="px-6 sm:px-10 py-5 sm:py-6 text-sm sm:text-base font-semibold rounded-xl glow-primary transition-all duration-300 hover:scale-105 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-4 h-4 group-hover:animate-pulse" />
              Register Now (10 Teams Maximum)
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
