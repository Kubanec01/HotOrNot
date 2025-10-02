import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router";
import Modal from "../../../components/Modal";
import { useGameContext } from "../../../hooks/contexts/GameContext";
import CartButton from "./components/CartButton";

const GamePage = () => {
  const { setIsGameRunning, gameData } = useGameContext();

  // Data
  const data = gameData;

  const [actWinner, setActWinner] = useState(0);
  const [nextPlayer, setNextPlayer] = useState(1);
  const [rounds, setRounds] = useState(data.length);

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

  useEffect(() => {
    if (rounds === 1) setIsGameRunning(false);
  }, [rounds]);

  return (
    <>
      <Modal />
      <Navbar />
      <div className="w-full h-screen flex justify-center items-center">
        {rounds > 1 ? (
          <>
            <section className="w-11/12 max-w-max-width flex justify-center gap-[200px]">
              <CartButton
                onClickFunction={() => handlePlayer(actWinner)}
                image={data[actWinner].image}
              ></CartButton>
              <CartButton
                onClickFunction={() => handlePlayer(nextPlayer)}
                image={data[nextPlayer].image}
              ></CartButton>
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

export default GamePage;

// ! je potrebne tu dokoncit nasledujuce TODOS:
// ! 3. Sprav jednotlive datas na zenske a muzske arrays
// ! 4. Sorav tuto cast plne prisposoivu - cize ak je vote for men tak budu Array s chlapmi a naopak
