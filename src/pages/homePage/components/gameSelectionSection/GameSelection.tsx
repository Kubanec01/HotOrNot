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
    <section className="max-w-max-width mx-auto flex justify-center items-center gap-[182px] mt-[86px]">
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
