import React from 'react';
import { motion } from 'motion/react';

/**
 * Reveal - soft rise-and-settle entrance as a section scrolls into view.
 * One shared easing curve so the whole page moves with the same hand.
 */
export const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-10% 0px' }}
    transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);
