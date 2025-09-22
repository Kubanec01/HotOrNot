import maleImg from "../../../../assets/Satoru-img.png";
import femaleImg from "../../../../assets/Makima-img.webp";
import Cart from "./components/Cart";

const GameSelection = () => {
  return (
    <div className="select-none max-w-max-width mx-auto flex justify-center items-center gap-[182px] mt-[86px]">
      <Cart image={maleImg} text="Vote For Men" />
      <Cart image={femaleImg} text="Vote For Women" />
    </div>
  );
};

export default GameSelection;
