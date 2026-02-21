import { motion } from "framer-motion";
import { Users, GraduationCap, Rocket, type LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string; color: string }[] = [
  {
    icon: Users,
    title: "Collaboration",
    description: "Experts and beginners coding side-by-side. Cultivating the next generation of engineers.",
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    description: "Mentors guiding teams, providing real-time code reviews and architectural advice.",
    color: "accent",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Build incredible AI apps, scaling ideas to reality in a high-energy sprint.",
    color: "primary",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const isPrimary = feature.color === "primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
      whileHover={{ y: -8 }}
      className="glass-card-hover rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden group"
    >
      {/* Top glow line */}
      <motion.div
        className={`absolute top-0 left-1/2 -translate-x-1/2 h-px ${isPrimary ? 'bg-primary' : 'bg-accent'}`}
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className={`w-14 h-14 rounded-xl ${isPrimary ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center mx-auto mb-5`}
      >
        <feature.icon className={`w-7 h-7 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
      </motion.div>

      <h3 className="text-lg sm:text-xl font-semibold font-heading text-foreground mb-3">
        {feature.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {feature.description}
      </p>

      {/* Bottom corner decoration */}
      <div className={`absolute bottom-0 right-0 w-12 h-12 ${isPrimary ? 'border-primary/10' : 'border-accent/10'} border-b border-r rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-16 sm:py-24 section-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold font-heading text-center text-gradient-primary mb-10 sm:mb-14"
        >
          Why Join the Sprint?
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
