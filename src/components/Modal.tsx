import { Link } from "react-router";
import { useGameContext } from "../hooks/contexts/GameContext";

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useGameContext();

  const modalOpacity = isModalOpen ? "block" : "hidden";

  return (
    <div
      className={`${modalOpacity} absolute top-[25%] left-6/12 -translate-x-6/12 max-w-[31.25rem] md:w-[90%] w-[16.25rem] md:h-[15rem] h-[11.25rem] rounded-2xl bg-[white] md:border-6 border-4 border-pink-primary`}
    >
      <h1 className="w-[80%] text-center mx-auto md:text-lg text-sm md:mt-[1.875rem] mt-[0.875rem] font-semibold">
        Do you really want to leave during the game? There are still a lot of
        hot characters waiting for you!
      </h1>
      <div className="flex justify-between items-center md:w-[80%] w-[90%] mx-auto md:mt-[2.875rem] mt-[1.5rem]">
        <Link
          to="/"
          replace
          onClick={() => setIsModalOpen(false)}
          className="md:px-[0.875rem] px-[0.313rem] md:py-[0.5rem] py-[0.25rem] rounded-[0.75rem] bg-pink-primary text-white font-semibold md:text-sm text-[0.625rem] md:text-left text-center"
        >
          Back To Main Page
        </Link>
        <button
          onClick={() => setIsModalOpen(false)}
          className="md:px-[0.875rem] px-[0.313rem] md:py-[0.5rem] py-[0.25rem] rounded-[0.75rem] border-pink-primary md:border-2 border-1 text-pink-primary font-semibold md:text-sm text-[0.625rem] md:text-left cursor-pointer"
        >
          Nuh, I'm just kidding
        </button>
      </div>
    </div>
  );
};

export default Modal;
