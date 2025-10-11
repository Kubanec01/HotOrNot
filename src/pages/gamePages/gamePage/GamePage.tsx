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
          // Game Is Running
          <>
            <section className="w-10/12 max-w-max-width-sec flex md:flex-row flex-col items-center justify-between md:gap-0 gap-8 md:pt-0 pt-40 pb-10">
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
          // Game Is Not Running
          <>
            <section
              className="
            w-11/12 max-w-max-width flex items-center flex-col"
            >
              <h1 className="text-center lg:text-3xl text-2xl text-[#ee7c9c] font-semibold">
                {data[actWinner].name}
              </h1>
              <p className="md:text-lg text-[#00000051] font-semibold">
                ({data[actWinner].show})
              </p>
              <div
                onClick={() => handlePlayer(actWinner)}
                className={`lg:w-[19.375rem] md:w-[17.125rem] w-[15.125rem] lg:h-[27.5rem] md:h-[25rem] h-[22rem] mt-4 rounded-[0.875rem] bg-no-repeat bg-cover bg-center border-[0.375rem] border-pink-primary
        flex justify-center items-end`}
                style={{
                  backgroundImage: `url(${data[actWinner].image})`,
                }}
              />
              <h1 className="lg:text-2xl md:text-xl text-lg font-semibold md:mt-[1.375rem] mt-[1rem]">
                This is definitely your type! <span>😍</span>
              </h1>
              <Link
                to="/"
                replace
                className="md:px-4 px-2 md:py-[0.688rem] py-[0.588rem] md:text-base text-sm bg-pink-primary rounded-[0.75rem] text-white lg:mt-[2.5rem] md:mt-[2rem] mt-[1.4rem] hover:scale-95 duration-150"
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
