import { FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const PagesButtons = () => {
  return (
    <div className="w-11/12 max-w-[70.50rem] mx-auto flex items-center justify-center gap-[100px] mt-[8px]">
      {/* GitHub Link Button */}
      <a
        className="px-[9px] py-[6px] text-[17px] font-semibold flex items-center justify-center gap-[3px] rounded-[10px] bg-pink-primary
      text-customWhite hover:scale-[0.9] active:scale-100 duration-150"
        href="https://github.com/Kubanec01"
        target="_blank"
      >
        GitHub{" "}
        <span>
          <FaGithub />
        </span>
      </a>
      {/* Portfolio Link Button */}
      <a
        className="px-[8px] py-[5px] text-[16px] font-semibold flex items-center justify-center rounded-[10px] text-pink-primary border-pink-primary border-2 hover:scale-[0.9] active:scale-100 duration-150"
        href="https://jakubroman.xyz/"
        target="_blank"
      >
        My Web{" "}
        <span className="translate-y-[1px]">
          <IoIosArrowForward />
        </span>
      </a>
    </div>
  );
};

export default PagesButtons;
