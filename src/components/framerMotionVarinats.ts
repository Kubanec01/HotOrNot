import type { Variants } from "motion";

export const fromUpToDownVisibility: Variants = {
  // Primary Variants
  offscreenPrimary: {
    opacity: 0,
    y: -20,
  },
  onscreenPrimary: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
      delay: 0.3,
    },
  },
  //   Secondary Variants
  offscreenSecondary: {
    opacity: 0,
    y: -40,
  },
  onscreenSecondary: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};
