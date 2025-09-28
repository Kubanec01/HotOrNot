import primaryMaleImg from "../../../../assets/Satoru-img.png";
import secondaryMaleImg from "../../../../assets/bg-carts-male-img1.jpg";
import tertiaryMaleImg from "../../../../assets/bg-carts-male-img2.jpg";
import primaryFemaleImg from "../../../../assets/Makima-img.webp";
import secondaryFemaleImg from "../../../../assets/secondaryFemaleImg.jpg";
import tertiaryFemaleImg from "../../../../assets/tertiaryFemaleImg.avif";
import Cart from "./components/Cart";

const GameSelection = () => {
  return (
    <section className="select-none max-w-max-width mx-auto flex justify-center items-center gap-[182px] mt-[86px]">
      <Cart
        id="male"
        primaryImage={primaryMaleImg}
        secondaryImage={secondaryMaleImg}
        tertiaryImage={tertiaryMaleImg}
        text="Vote For Men"
      />
      <Cart
        id="female"
        primaryImage={primaryFemaleImg}
        text="Vote For Women"
        secondaryImage={secondaryFemaleImg}
        tertiaryImage={tertiaryFemaleImg}
      />
    </section>
  );
};

export default GameSelection;
