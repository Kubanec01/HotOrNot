import primaryMaleImg from "../../../../assets/Satoru-img.png";
import secondaryMaleImg from "../../../../assets/Megumi-Fushiguro-Img.jpg";
import tertiaryMaleImg from "../../../../assets/Levi-Ackerman-img.jpg";
import primaryFemaleImg from "../../../../assets/Makima-img.webp";
import secondaryFemaleImg from "../../../../assets/Zero-Two-img.jpg";
import tertiaryFemaleImg from "../../../../assets/Maki-Zenin-Img.jpeg";
import Cart from "./components/Cart";
import { maleCharactersData } from "../../../../data/animeCharacters/maleCharacters";
import { femaleCharactersData } from "../../../../data/animeCharacters/femaleCharactersData";

// Data
const maleGameData = maleCharactersData;
const femaleGameData = femaleCharactersData;

const GameSelection = () => {
  return (
    <section className="max-w-max-width w-11/12 mx-auto flex md:flex-row flex-col justify-center items-center lg:gap-[11.375rem] md:gap-[9.375rem] gap-[1rem] md:mt-[86px] mt-[56px] md:overflow-visible overflow-hidden">
      <Cart
        id="male"
        primaryImage={primaryMaleImg}
        secondaryImage={secondaryMaleImg}
        tertiaryImage={tertiaryMaleImg}
        text="Vote For Men"
        gameData={maleGameData}
      />
      <Cart
        id="female"
        primaryImage={primaryFemaleImg}
        secondaryImage={secondaryFemaleImg}
        tertiaryImage={tertiaryFemaleImg}
        text="Vote For Women"
        gameData={femaleGameData}
      />
    </section>
  );
};

export default GameSelection;
