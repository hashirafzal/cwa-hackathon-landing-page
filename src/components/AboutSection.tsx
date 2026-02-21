import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-2xl p-6 sm:p-10 relative overflow-hidden"
        >
          {/* Corner decoration */}
          <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-primary/20 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-primary/20 rounded-bl-2xl" />

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gradient-primary">
              What is Prompt-a-thon 2026?
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-5">
            The <span className="text-foreground font-semibold">Code With Ahsan Prompt-a-thon 2026</span> is an exciting
            Hackathon & Innovation Sprint focused on the theme of{" "}
            <span className="text-gradient-accent font-semibold">Generative AI & Build with AI</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            This event brings together developers, AI enthusiasts, and problem-solvers to collaborate, build,
            and showcase innovative solutions using Generative AI. Whether you are a beginner or an expert,
            this hackathon provides a platform to pair program, receive mentorship from industry leaders,
            and build the future of tech together.
          </p>

          {/* Terminal-style decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-3 rounded-lg bg-muted/50 font-mono text-xs text-muted-foreground"
          >
            <span className="text-primary">$</span> build --theme="generative-ai" --mode="hackathon"
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-primary ml-1"
            >
              █
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
