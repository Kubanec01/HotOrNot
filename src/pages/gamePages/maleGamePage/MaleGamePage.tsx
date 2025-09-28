import { useState, type FormEvent } from "react";
import Navbar from "./Navbar";
import image01 from "../../../assets/bg-carts-male-img2.jpg";
import image02 from "../../../assets/bg-carts-male-img1.jpg";
import image03 from "../../../assets/Satoru-img.png";

const MaleGamePage = () => {
  const array = [
    {
      id: "1",
      image: image01,
    },
    {
      id: "2",
      image: image02,
    },
    {
      id: "3",
      image: image03,
    },
  ];

  const [actWinner, setActWinner] = useState(0);
  const [nextPlayer, setNextPlayer] = useState(1);
  const [rounds, setRounds] = useState(array.length);
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
                  backgroundImage: `url(${array[actWinner].image})`,
                }}
              ></button>
              <button
                onClick={() => handlePlayer(nextPlayer)}
                className={`w-[310px] h-[440px] rounded-[14px] bg-no-repeat bg-cover bg-center border-[6px] border-pink-primary
        flex justify-center items-end cursor-pointer`}
                style={{
                  backgroundImage: `url(${array[nextPlayer].image})`,
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
              <h1 className="mb-2">Winner Is</h1>
              <button
                onClick={() => handlePlayer(actWinner)}
                className={`w-[310px] h-[440px] rounded-[14px] bg-no-repeat bg-cover bg-center border-[6px] border-pink-primary
        flex justify-center items-end cursor-pointer`}
                style={{
                  backgroundImage: `url(${array[actWinner].image})`,
                }}
              ></button>
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
