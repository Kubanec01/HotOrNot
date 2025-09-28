import { Link } from "react-router";
import { useGameContext } from "../../../../../hooks/contexts/GameContext";

const Cart = ({
  primaryImage,
  secondaryImage,
  tertiaryImage,
  text,
  id,
}: {
  primaryImage: string;
  secondaryImage: string;
  tertiaryImage: string;
  text: string;
  id: "male" | "female";
}) => {
  const { hoveredCart, setHoveredCart } = useGameContext();

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
  const baseSideCart1 = "translate-x-[110px] -translate-y-[10px] opacity-0  duration-250";
  const baseSideCart2 = "-translate-x-[110px] -translate-y-[10px] opacity-0  duration-250";
  const hoveredSideCart = "translate-x-0 duration-250";

  if (hoveredCart === null) {
    cartStyle = "scale-[1]";
    sideCart1 = baseSideCart1;
    sideCart2 = baseSideCart2;
    linearGradientStyle = baseLinear;
  } else if (hoveredCart === id) {
    cartStyle = "scale-[105%] border-pink-secondary";
    sideCart1 = hoveredSideCart;
    sideCart2 = hoveredSideCart;
    linearGradientStyle = hoveredLinear;
  } else {
    cartStyle = "scale-[0.8]";
    linearGradientStyle = baseLinear;
    sideCart1 = baseSideCart1;
    sideCart2 = baseSideCart2;
  }


  return (
    <Link
    // ! toto bude potrebne nastavit individualne
    to="vote-for-man-game"
    className="w-[310px] h-[440px] relative">
      {/* Left Hover Cart */}
      <div
        className={`w-[245px] h-[356px] rounded-[14px] bg-no-repeat bg-cover bg-center border-[6px] border-pink-secondary absolute bottom-4 -left-[69px] -rotate-19
          ${sideCart1}`}
        style={{
          backgroundImage: `url(${secondaryImage})`,
        }}
      />
      {/* Right Hover Cart */}
      <div
        className={`w-[245px] h-[356px] rounded-[14px] bg-no-repeat bg-cover bg-center border-[6px] border-pink-secondary absolute bottom-4 -right-[69px] rotate-19
          ${sideCart2}`}
        style={{
          backgroundImage: `url(${tertiaryImage})`,
        }}
      />
      <div
        key={id}
        onMouseEnter={() => setHoveredCart(id)}
        onMouseLeave={() => setHoveredCart(null)}
        className={`w-full h-full rounded-[14px] bg-no-repeat bg-cover bg-center border-[6px] border-pink-primary
        flex justify-center items-end cursor-pointer ${cartStyle} duration-150 ease-initial relative`}
        style={{
          backgroundImage: `url(${primaryImage})`,
        }}
      >
        {/* TEXT */}
        <div
          className={`w-full h-[56%] bg-linear-to-t ${linearGradientStyle} duration-150 ease-initial flex justify-start items-end`}
        >
          <h1 className="text-[26px] font-semibold text-[white] ml-[20px] mb-[48px]">
            {text}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Cart;
