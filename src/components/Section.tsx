import { motion } from "framer-motion";
import { SectionProps } from "../types";

export default function Section({
  children,
  id,
  className = "",
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}
