import { FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


const PagesButtons = () => {
  return (
    <div className="w-11/12 max-w-[70.50rem] mx-auto flex items-center justify-center gap-[100px] mt-[8px]">
      {/* GitHub Link Button */}
      <button
        className="px-[9px] py-[6px] text-[17px] font-semibold flex items-center justify-center gap-[3px] rounded-[10px] bg-pink-primary
      text-customWhite"
      >
        GitHub{" "}
        <span>
          <FaGithub />
        </span>
      </button>
      {/* Portfolio Link Button */}
      <button className="px-[8px] py-[5px] text-[16px] font-semibold flex items-center justify-center rounded-[10px] text-pink-primary border-pink-primary border-2">
        My Web{" "}
        <span className="translate-y-[1px]">
          <IoIosArrowForward  />
        </span>
      </button>
    </div>
  );
};

export default PagesButtons;
