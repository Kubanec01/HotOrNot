import maleImg from "../../../../assets/Satoru-img.png";
import femaleImg from "../../../../assets/Makima-img.webp";
import Cart from "./components/Cart";
import { useState } from "react";

const GameSelection = () => {


  return (
    <div
    className="select-none max-w-max-width mx-auto flex justify-center items-center gap-[182px] mt-[86px]">
      <Cart
        id="male"
        image={maleImg}
        text="Vote For Men"
      />
      <Cart
        id="female"
        image={femaleImg}
        text="Vote For Women"
      />
    </div>
  );
};

export default GameSelection;
