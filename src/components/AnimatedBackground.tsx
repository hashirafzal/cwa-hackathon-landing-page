import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large soft gradient orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] animate-float-slow"
        style={{ top: "10%", left: "5%" }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] animate-float-reverse"
        style={{ top: "50%", right: "5%" }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full bg-primary/5 blur-[90px] animate-float-slow"
        style={{ bottom: "10%", left: "30%", animationDelay: "5s" }}
      />

      {/* Small floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-8 h-8 border-2 border-primary/15 rounded-lg"
        style={{ top: "20%", left: "15%" }}
      />
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute w-6 h-6 border-2 border-accent/15 rounded-full"
        style={{ top: "35%", right: "20%" }}
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute w-10 h-10 border-2 border-primary/10 rounded-xl rotate-45"
        style={{ bottom: "30%", left: "10%" }}
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, 120, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-5 h-5 bg-primary/8 rounded-full animate-pulse-glow"
        style={{ top: "60%", left: "70%" }}
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, -10, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute w-7 h-7 border-2 border-accent/10 rounded-lg rotate-12"
        style={{ top: "15%", right: "30%" }}
      />

      {/* Decorative circles like original */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-24 h-24 border border-primary/15 rounded-full"
        style={{ top: "25%", left: "25%" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute w-16 h-16 border border-accent/15 rounded-full"
        style={{ top: "18%", right: "22%" }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute w-20 h-20 border border-primary/10 rounded-full"
        style={{ bottom: "25%", right: "15%" }}
      />
    </div>
  );
};

export default AnimatedBackground;
