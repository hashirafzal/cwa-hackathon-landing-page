import { motion } from "framer-motion";
import { ExternalLink, Mail, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventStructureSection = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gradient-primary">
              Event Structure
            </h2>
          </div>
          <p className="text-muted-foreground mb-8 leading-relaxed text-sm sm:text-base max-w-lg mx-auto">
            Want a detailed breakdown of the schedule, guidelines, and rules for the hackathon?
            Please read our official structure document.
          </p>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 rounded-xl gap-2 mb-12 sm:mb-16"
            >
              <ExternalLink className="w-4 h-4" />
              View Event Structure Doc
            </Button>
          </motion.div>
        </motion.div>

        {/* Sponsor card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card-hover rounded-2xl p-6 sm:p-8 relative"
        >
          <motion.div
            className="absolute -top-3 left-1/2 -translate-x-1/2"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full badge-glow text-xs font-mono">
              <Sparkles className="w-3 h-3" />
              Sponsors Welcome
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-2 mb-3 mt-2">
            <Mail className="w-5 h-5 text-primary" />
            <h3 className="text-base sm:text-lg font-semibold font-heading text-foreground">
              Interested in Sponsoring?
            </h3>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Contact us at{" "}
            <a href="mailto:maham.visionwiseab@gmail.com" className="text-primary hover:underline font-mono text-xs">
              maham.visionwiseab@gmail.com
            </a>{" "}
            or{" "}
            <a href="mailto:ahsan.ubitian@gmail.com" className="text-primary hover:underline font-mono text-xs">
              ahsan.ubitian@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-border/50"
        >
          <p className="text-xs text-muted-foreground font-mono">
            &lt;/&gt; Built with ❤️ by the CWA Community
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventStructureSection;
