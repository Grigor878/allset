import { useLayoutEffect } from "react";
import { scrollToTopWithDuration } from "../utils/helpers";
import { AnimatePresence, motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const MotionBox = motion.create(Box);

export const Scroll = ({ children, scrollToTop = true, animationKey }) => {
  useLayoutEffect(() => {
    if (scrollToTop) {
      scrollToTopWithDuration(700);
    }
  }, [scrollToTop]);

  return (
    <AnimatePresence mode="wait">
      <MotionBox
        key={animationKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </MotionBox>
    </AnimatePresence>
  );
};
