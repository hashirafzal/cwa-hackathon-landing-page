import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventStructureSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gradient-primary mb-6">
            Event Structure
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Want a detailed breakdown of the schedule, guidelines, and rules for the hackathon?
            Please read our official structure document.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 rounded-xl gap-2 mb-16"
          >
            <ExternalLink className="w-4 h-4" />
            View Event Structure Doc
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Mail className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold font-heading text-foreground">
              Interested in Sponsoring?
            </h3>
          </div>
          <p className="text-muted-foreground text-sm">
            Contact us at{" "}
            <a href="mailto:maham.visionwiseab@gmail.com" className="text-primary hover:underline">
              maham.visionwiseab@gmail.com
            </a>{" "}
            or{" "}
            <a href="mailto:ahsan.ubitian@gmail.com" className="text-primary hover:underline">
              ahsan.ubitian@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventStructureSection;
