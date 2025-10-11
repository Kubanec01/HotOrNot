import logoImg from "../../../../assets/Logo-Title-SM.png";
import { IoArrowBack } from "react-icons/io5";
import { useGameContext } from "../../../../hooks/contexts/GameContext";

const Navbar = () => {
  const { setIsModalOpen, isGameRunning } = useGameContext();

  const buttonVisibility = isGameRunning ? "block" : "hidden";

  return (
    <div className="bg-pink-primary w-full h-[4.875rem] flex justify-center items-center fixed">
      {/* Back Navigate Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${buttonVisibility} absolute cursor-pointer left-[4%] top-2/4 -translate-y-[50%] md:text-[1.875rem] text-[1.5rem] text-customWhite hover:bg-pink-tertiary duration-150 ease-linear p-[0.438rem] rounded-[3.125rem]`}
      >
        <IoArrowBack />
      </button>
      {/* Logo Img */}
      <img
        src={logoImg}
        className="object-cover w-[10rem] h-auto mt-4 "
        alt=""
      />
    </div>
  );
};

export default Navbar;
