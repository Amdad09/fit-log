'use client'
import type { ReactNode } from "react"; 
import { motion } from 'framer-motion';

interface CardMotionProps{
    children: ReactNode;
}

const CardMotion = ({ children, ...rest }: CardMotionProps) => {
  return (
      <motion.div
          initial={{ opacity: 0, y: 24 }}
            whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true ,amount: 0.15}}
          transition={{
              duration: 0.4,
                ease: 'easeOut'
      }}
          {...rest}
      >
        {children}
    </motion.div>
  );
};

export default CardMotion;