import { Link } from "react-router";
import { useGameContext } from "../hooks/contexts/GameContext";

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useGameContext();

  const modalOpacity = isModalOpen ? "block" : "hidden";

  return (
    <div
      className={`${modalOpacity} absolute top-[25%] left-6/12 -translate-x-6/12 max-w-[500px] md:w-[90%] w-[260px] md:h-[240px] h-[180px] rounded-[16px] bg-[white] md:border-6 border-4 border-pink-primary`}
    >
      <h1 className="w-[80%] text-center mx-auto md:text-lg text-sm md:mt-[30px] mt-[14px] font-semibold">
        Do you really want to leave during the game? There are still a lot of
        hot characters waiting for you!
      </h1>
      <div className="flex justify-between items-center md:w-[80%] w-[90%] mx-auto md:mt-[46px] mt-[24px]">
        <Link
          to="/"
          replace
          onClick={() => setIsModalOpen(false)}
          className="md:px-[14px] px-[5px] md:py-[8px] py-[4px] rounded-[12px] bg-pink-primary text-white font-semibold md:text-sm text-[10px] md:text-left text-center"
        >
          Back To Main Page
        </Link>
        <button
          onClick={() => setIsModalOpen(false)}
          className="md:px-[14px] px-[5px] md:py-[8px] py-[4px] rounded-[12px] border-pink-primary md:border-2 border-1 text-pink-primary font-semibold md:text-sm text-[10px] md:text-left cursor-pointer"
        >
          Nuh, I'm just kidding
        </button>
      </div>
    </div>
  );
};

export default Modal;
