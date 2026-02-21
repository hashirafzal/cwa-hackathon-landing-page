import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Particle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -40, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.3, 1],
    }}
    transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const AnimatedBackground = () => {
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      size: 2 + Math.random() * 4,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg" />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="w-full h-px bg-primary animate-scan-line" />
      </div>

      {/* Large gradient orbs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.07]"
        style={{ background: "hsl(var(--glow-1))", top: "5%", left: "-5%" }}
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.06]"
        style={{ background: "hsl(var(--glow-2))", top: "40%", right: "-10%" }}
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.05]"
        style={{ background: "hsl(var(--glow-3))", bottom: "0%", left: "20%" }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <Particle key={p.id} delay={p.delay} x={p.x} y={p.y} size={p.size} />
      ))}

      {/* Geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-32 h-32 border border-primary/[0.06] rounded-xl"
        style={{ top: "15%", right: "15%" }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-48 h-48 border border-accent/[0.05] rounded-full"
        style={{ bottom: "20%", left: "8%" }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute w-20 h-20 border border-primary/[0.08] rotate-45"
        style={{ top: "60%", right: "25%" }}
      />

      {/* Connecting lines (subtle) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <motion.line
          x1="10%" y1="20%" x2="90%" y2="80%"
          stroke="hsl(var(--primary))" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="80%" y1="10%" x2="20%" y2="70%"
          stroke="hsl(var(--accent))" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
