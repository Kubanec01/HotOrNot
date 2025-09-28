import { useState, type FormEvent } from "react";
import Navbar from "./Navbar";

const MaleGamePage = () => {
  const array: number[] = [1, 2, 3, 4, 5, 6];

  const [actWinner, setActWinner] = useState(array[0]);
  const [nextPlayer, setNextPlayer] = useState(array[1]);
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
            <section className="border w-11/12 max-w-max-width flex justify-center gap-[200px]">
              <button
                onClick={() => handlePlayer(actWinner)}
                className="border text-3xl px-10 py-3 rounded-2xl"
              >
                {actWinner}
              </button>
              <button
                onClick={() => handlePlayer(nextPlayer)}
                className="border text-3xl px-10 py-3 rounded-2xl"
              >
                {nextPlayer}
              </button>
            </section>
          </>
        ) : (
          <>
            <div>Winner is {actWinner}</div>
          </>
        )}
      </div>
    </>
  );
};

export default MaleGamePage;
