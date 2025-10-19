import { Link } from "react-router";
import { useGameContext } from "../../../../../hooks/contexts/GameContext";
import type { CharactersData } from "../../../../../data/animeCharacters/types";
import { motion } from "motion/react";
import { fromUpToDownVisibility } from "../../../../../components/framerMotionVariants";
import { useIsMobileView } from "../../../../../components/hooks/useIsMobileView";

const Cart = ({
  primaryImage,
  secondaryImage,
  tertiaryImage,
  text,
  id,
  gameData,
}: {
  primaryImage: string;
  secondaryImage: string;
  tertiaryImage: string;
  text: string;
  id: "male" | "female";
  gameData: CharactersData[];
}) => {
  const { hoveredCart, setHoveredCart, setIsGameRunning, setGameData } =
    useGameContext();

  // Variables
  let cartStyle = "";
  let linearGradientStyle = "";
  let sideCart1 = "";
  let sideCart2 = "";

  // Styles
  const baseLinear =
    "from-pink-primary via-[#ffc0cbc6] via-50% to-[#ffc0cb00] to-90%";
  const hoveredLinear =
    "from-[#F37296] via-[#ed6b90d7] via-50% to-[#f2aec10c] to-90%";
  const baseSideCart1 =
    "translate-x-[6.875rem] -translate-y-[0.625rem] opacity  duration-250";
  const baseSideCart2 =
    "-translate-x-[6.875rem] -translate-y-[0.625rem] opacity-0  duration-250";
  const hoveredSideCart = "translate-x-0 duration-250 lg:opacity-100";

  if (hoveredCart === null) {
    cartStyle = "scale-[1]";
    sideCart1 = baseSideCart1;
    sideCart2 = baseSideCart2;
    linearGradientStyle = baseLinear;
  } else if (hoveredCart === id) {
    cartStyle = "lg:scale-[105%] scale-[102%] border-pink-secondary";
    sideCart1 = hoveredSideCart;
    sideCart2 = hoveredSideCart;
    linearGradientStyle = hoveredLinear;
  } else {
    cartStyle = "lg:scale-[0.8] scale-[0.9]";
    linearGradientStyle = baseLinear;
    sideCart1 = baseSideCart1;
    sideCart2 = baseSideCart2;
  }

  // Media Screen Hook
  const isMobile = useIsMobileView();

  return (
    <Link
      to="vote-for-anime-characters"
      className="xl:w-[19.375rem] md:w-[18.125rem] w-[90%] 2xl:h-[27.5rem] xl:h-[25.5rem] md:h-[25rem] h-[14rem] relative"
    >
      {/* Left Hover Cart */}
      <div
        className={`xl:w-[15.313rem] w-[12.5rem] xl:h-[22.25rem] h-[19.75rem] rounded-[0.875rem] bg-no-repeat bg-cover bg-center border-[0.375rem] border-pink-secondary absolute bottom-4 xl:-left-[4.313rem] -left-[3.75rem] -rotate-19
          ${sideCart1} opacity-0`}
        style={{
          backgroundImage: `url(${secondaryImage})`,
        }}
      />
      {/* Right Hover Cart */}
      <div
        className={`xl:w-[15.313rem] w-[12.5rem] xl:h-[22.25rem] h-[19.75rem] rounded-[0.875rem] bg-no-repeat bg-cover bg-center border-[0.375rem] border-pink-secondary absolute bottom-4 xl:-right-[4.313rem] -right-[3.75rem] rotate-19
          ${sideCart2} opacity-0`}
        style={{
          backgroundImage: `url(${tertiaryImage})`,
        }}
      />
      {/* Main Cart */}
      <motion.div
        variants={isMobile ? {} : fromUpToDownVisibility}
        initial="offscreenPrimary"
        whileInView="onscreenPrimary"
        key={id}
        onMouseEnter={() => setHoveredCart(id)}
        onClick={() => {
          setHoveredCart(null);
          setIsGameRunning(true);
          setGameData(gameData);
        }}
        onMouseLeave={() => setHoveredCart(null)}
        className={`w-full h-full rounded-[0.875rem] bg-no-repeat bg-cover bg-center border-[0.375rem] border-pink-primary
        flex justify-center items-end cursor-pointer ${cartStyle} duration-150 ease-initial relative`}
        style={{
          backgroundImage: `url(${primaryImage})`,
        }}
      >
        {/* TEXT */}
        <div
          className={`w-full md:h-[56%] h-[86%] bg-linear-to-t ${linearGradientStyle} duration-150 ease-initial flex justify-start items-end`}
        >
          <h1 className="md:text-[1.625rem] text-xl font-semibold text-[white] md:ml-[1.25rem] ml-[0.625rem] md:mb-[3rem] mb-[1.125rem]">
            {text}
          </h1>
        </div>
      </motion.div>
    </Link>
  );
};

export default Cart;
