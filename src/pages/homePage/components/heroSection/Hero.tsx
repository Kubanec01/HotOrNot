import React from "react";
import img1 from "../../../../assets/Welcome Title - Lg.png";
import PagesButtons from "./components/PagesButtons";

const Hero = () => {
  return (
    <>
      <div className="w-11/12 max-w-[70.50rem] mt-[1.50rem] mx-auto">
        <img src={img1} alt="title-img" className="object-cover" />
      </div>
      <PagesButtons />
    </>
  );
};

export default Hero;
