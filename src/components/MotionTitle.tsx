import { motion } from 'framer-motion';

interface MotionTextProps {
  children: React.ReactNode;
  className?: string;
}

export const MotionTitle: React.FC<MotionTextProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.h2>
  );
};
