import { SectionSubtitle } from "src/components/Text";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const AboutSection = forwardRef(
  ({ id, title, children, className, variants, animate }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={animate}
        id={id}
        className={`flex flex-col gap-6 ${className}`}
      >
        <SectionSubtitle content={title} />
        {children}
      </motion.div>
    );
  },
);

export default AboutSection;
