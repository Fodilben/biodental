// Framer Motion reusable appear/enter animation variant
// Usage: <motion.div variants={appearEffect} initial="hidden" animate="visible" ... />

export const appearEffect = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}; 