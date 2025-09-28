import { useState } from "react";
import Navbar from "./Navbar";
import { maleCharactersData } from "../../../data/animeCharacters/maleCharacters";
import { Link } from "react-router";

const MaleGamePage = () => {
  const data = maleCharactersData;

  const [actWinner, setActWinner] = useState(0);
  const [nextPlayer, setNextPlayer] = useState(1);
  const [rounds, setRounds] = useState(data.length);
  console.log(rounds);

  const handlePlayer = (value: number) => {
    if (value === actWinner) {
      setNextPlayer(nextPlayer + 1);
      setRounds((v) => v - 1);
    } else {
      setActWinner(nextPlayer);
      setNextPlayer(nextPlayer + 1);
      setRounds((v) => v - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex justify-center items-center">
        {rounds > 1 ? (
          <>
            <section className="w-11/12 max-w-max-width flex justify-center gap-[200px]">
              <button
                onClick={() => handlePlayer(actWinner)}
                className={`w-[310px] h-[440px] rounded-[14px] bg-no-repeat bg-cover bg-center border-[6px] border-pink-primary
        flex justify-center items-end cursor-pointer`}
                style={{
                  backgroundImage: `url(${data[actWinner].image})`,
                }}
              ></button>
              <button
                onClick={() => handlePlayer(nextPlayer)}
                className={`w-[310px] h-[440px] rounded-[14px] bg-no-repeat bg-cover bg-center border-[6px] border-pink-primary
        flex justify-center items-end cursor-pointer`}
                style={{
                  backgroundImage: `url(${data[nextPlayer].image})`,
                }}
              ></button>
            </section>
          </>
        ) : (
          <>
            <section
              className="
            w-11/12 max-w-max-width flex items-center flex-col"
            >
              <h1 className="text-center text-3xl text-[#ee7c9c] font-semibold">
                {data[actWinner].name}
              </h1>
              <p className="text-lg text-[#00000051] font-semibold">
                ({data[actWinner].show})
              </p>
              <div
                onClick={() => handlePlayer(actWinner)}
                className={`w-[310px] h-[440px] mt-4 rounded-[14px] bg-no-repeat bg-cover bg-center border-[6px] border-pink-primary
        flex justify-center items-end`}
                style={{
                  backgroundImage: `url(${data[actWinner].image})`,
                }}
              />
              <h1 className="text-2xl font-semibold mt-[22px]">
                This is definitely your type! <span>😍</span>
              </h1>
              <Link
                to="/"
                replace
                className="px-[16px] py-[11px] bg-pink-primary rounded-[12px] text-white mt-[40px] hover:scale-95 duration-150"
              >
                Back To Main Page
              </Link>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default MaleGamePage;

// ! je potrebne tu dokoncit nasledujuce TODOS:
// ! 1. Sprav na buttons Cart component nech v tom nieje taky chaos a zjednot to
// ! 2. Uprav vizual podla figmy
// ! 3. Sprav jednotlive datas na zenske a muzske arrays
// ! 4. Sorav tuto cast plne prisposoivu - cize ak je vote for men tak budu Array s chlapmi a naopak
