import primaryMaleImg from "../../../../assets/Satoru-img.png";
import secondaryMaleImg from "../../../../assets/bg-carts-male-img1.jpg";
import tertiaryMaleImg from "../../../../assets/bg-carts-male-img2.jpg";
import femaleImg from "../../../../assets/Makima-img.webp";
import Cart from "./components/Cart";

const GameSelection = () => {
  return (
    <div className="select-none max-w-max-width mx-auto flex justify-center items-center gap-[182px] mt-[86px]">
      <Cart
        id="male"
        primaryImage={primaryMaleImg}
        secondaryImage={secondaryMaleImg}
        tertiaryImage={tertiaryMaleImg}
        text="Vote For Men"
      />
      <Cart id="female" primaryImage={femaleImg} text="Vote For Women" />
    </div>
  );
};

export default GameSelection;
