import img1 from "../../../../assets/Welcome Title - Lg.png";
import PagesButtons from "./components/PagesButtons";

const Hero = () => {
  return (
    <>
      <div className="w-11/12 max-w-max-width mx-auto">
        <img src={img1} alt="title-img" className="object-cover w-[94%] mx-auto" />
      </div>
      <PagesButtons />
    </>
  );
};

export default Hero;
