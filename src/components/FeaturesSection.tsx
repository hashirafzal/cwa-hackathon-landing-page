import { motion } from "framer-motion";
import { Users, GraduationCap, Rocket } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Collaboration",
    description: "Experts and beginners coding side-by-side. Cultivating the next generation of engineers.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    description: "Mentors guiding teams, providing real-time code reviews and architectural advice.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Build incredible AI apps, scaling ideas to reality in a high-energy sprint.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-8 text-center hover:glow-border transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
