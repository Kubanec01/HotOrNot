import { motion } from "motion/react";
import img1 from "../../../../assets/Welcome-Title-Lg.png";
import PagesButtons from "./components/PagesButtons";
import { fromUpToDownVisibility } from "../../../../components/framerMotionVarinats";

const Hero = () => {
  return (
    <>
      <div className="sm:w-11/12 max-w-max-width mx-auto lg:mt-0 md:mt-6 mt-10 px-1">
        <motion.img
          variants={fromUpToDownVisibility}
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
