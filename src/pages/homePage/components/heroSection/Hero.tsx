import { motion } from "motion/react";
import img1 from "../../../../assets/Welcome-Title-Lg.png";
import PagesButtons from "./components/PagesButtons";
import { fromUpToDownVisibility } from "../../../../components/framerMotionVariants";
import { useIsMobileView } from "../../../../components/hooks/useIsMobileView";

const Hero = () => {
  const isMobile = useIsMobileView();

  return (
    <>
      <div className="sm:w-11/12 max-w-max-width mx-auto lg:mt-0 md:mt-6 mt-10 px-1">
        <motion.img
          variants={isMobile ? {} : fromUpToDownVisibility}
          initial="offscreenSecondary"
          whileInView="onscreenSecondary"
          viewport={{ once: true }}
          src={img1}
          alt="title-img"
          className="object-cover sm:w-[94%] mx-auto"
        />
      </div>
      <PagesButtons />
    </>
  );
};

export default Hero;
