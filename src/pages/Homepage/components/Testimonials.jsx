import TestimonialsCarousel from "./TestimonialsCarousel";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="flex flex-col items-center gap-20 py-10 md:py-20"
    >
      <h2 className="text-xl font-medium uppercase text-white sm:text-2xl md:text-3xl lg:text-4xl lg:font-semibold">
        Testimonials
      </h2>
      <TestimonialsCarousel />
    </motion.div>
  );
}

export default Testimonials;
