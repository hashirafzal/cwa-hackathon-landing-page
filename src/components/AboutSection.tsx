import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gradient-primary mb-8">
            What is Prompt-a-thon 2026?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            The <span className="text-foreground font-semibold">Code With Ahsan Prompt-a-thon 2026</span> is an exciting
            Hackathon & Innovation Sprint focused on the theme of{" "}
            <span className="text-foreground font-semibold">Generative AI & Build with AI</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This event brings together developers, AI enthusiasts, and problem-solvers to collaborate, build,
            and showcase innovative solutions using Generative AI. Whether you are a beginner or an expert,
            this hackathon provides a platform to pair program, receive mentorship from industry leaders,
            and build the future of tech together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
