import { Link } from "react-router";
import { useGameContext } from "../hooks/contexts/GameContext";

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useGameContext();

  const modalOpacity = isModalOpen ? "block" : "hidden";

  return (
    <div
      className={`${modalOpacity} absolute top-[25%] left-6/12 -translate-x-6/12 w-[500px] h-[240px] rounded-[16px] bg-[white] border-6 border-pink-primary`}
    >
      <h1 className="w-[80%] text-center mx-auto text-lg mt-[30px] font-semibold">
        Do you really want to leave during the game? There are still a lot of
        hot characters waiting for you!
      </h1>
      <div className="flex justify-between items-center w-[80%] mx-auto mt-[46px]">
        <Link
          to="/"
          replace
          onClick={() => setIsModalOpen(false)}
          className="px-[14px] py-[8px] rounded-[12px] bg-pink-primary text-white font-semibold text-sm"
        >
          Back To Main Page
        </Link>
        <button
          onClick={() => setIsModalOpen(false)}
          className="px-[14px] py-[8px] rounded-[12px] border-pink-primary border-2 text-pink-primary font-semibold text-sm cursor-pointer"
        >
          Nuh, I'm just kidding
        </button>
      </div>
    </div>
  );
};

export default Modal;
