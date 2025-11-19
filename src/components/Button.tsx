import { motion } from "framer-motion";
import { ButtonProps } from "../types";

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "px-8 py-4 rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses: Record<string, string> = {
    primary: "bg-primary text-background hover:bg-primary/90",
    secondary:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-background",
    accent: "bg-accent text-background hover:bg-accent/90",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
